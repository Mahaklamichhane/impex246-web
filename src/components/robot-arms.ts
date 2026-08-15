import type { Application } from "@splinetool/runtime";

/* Drive the robot's forearms from the cursor: pointer on the left half
   raises the left (screen-left) hand, right half raises the right hand.
   Signs discovered empirically from the scene rig:
     forearm[0] (screen-right) raises with +z
     forearm[1] (screen-left)  raises with -z
   Desktop mouse only; skipped for touch and reduced-motion. Returns a
   cleanup function. */
export function wireRobotArms(app: Application): () => void {
  if (typeof window === "undefined") return () => {};

  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!finePointer || reduce) return () => {};

  const forearms = app.getAllObjects().filter((o) => o.name === "forearm");
  if (forearms.length < 2) return () => {};

  const right = forearms[0];
  const left = forearms[1];
  const baseR = right.rotation.z;
  const baseL = left.rotation.z;
  const RAISE = 1.0;

  let targetR = 0;
  let targetL = 0;
  let curR = 0;
  let curL = 0;
  let raf = 0;

  const onMove = (e: PointerEvent) => {
    const nx = e.clientX / window.innerWidth; // 0 (left) .. 1 (right)
    targetL = Math.min(1, Math.max(0, (0.5 - nx) * 2));
    targetR = Math.min(1, Math.max(0, (nx - 0.5) * 2));
  };
  const relax = () => {
    targetL = 0;
    targetR = 0;
  };

  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerleave", relax);
  window.addEventListener("blur", relax);

  const tick = () => {
    curR += (targetR - curR) * 0.12;
    curL += (targetL - curL) * 0.12;
    // Swapped: cursor on the left raises the screen-left hand and vice
    // versa (the scene's look-at body turn flips the naive mapping).
    right.rotation.z = baseR + curL * RAISE;
    left.rotation.z = baseL - curR * RAISE;
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerleave", relax);
    window.removeEventListener("blur", relax);
    cancelAnimationFrame(raf);
  };
}
