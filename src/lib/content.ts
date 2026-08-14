/* ============================================================
   246 IMPEX — VERIFIED CONTENT (single source of truth)
   Every fact here is sourced from the live site 246impex.com.np.
   Nothing invented: no fake stats, awards, clients, or addresses.
   ============================================================ */

export const SITE = {
  name: "246 Impex",
  legalName: "246 Impex Pvt. Ltd.",
  tagline: "Genuine Imported Electronics",
  domain: "246impex.com.np",
  storeUrl: "https://246impex.com.np",
  description:
    "Your trusted destination for high-quality imported products in Nepal. We bring reliable, affordable and modern tech to your doorstep.",
};

/* Real WhatsApp + social handles from the live site footer */
export const CONTACT = {
  whatsapp: "9843737799",
  whatsappIntl: "+977 9843737799",
  whatsappLink: "https://wa.me/9779843737799",
  socials: [
    { label: "Facebook", href: "https://facebook.com/246Impex" },
    { label: "Instagram", href: "https://instagram.com/246impex" },
    { label: "TikTok", href: "https://www.tiktok.com/@246impex" },
    { label: "YouTube", href: "https://www.youtube.com/@246impexnepal" },
  ],
};

/* Real navigation, pointing to the live storefront where a page exists */
export const NAV = [
  { label: "Home", href: "#top" },
  { label: "Categories", href: "#categories" },
  { label: "Why 246", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* The 5 real collections from the live site, with their real hrefs */
export const CATEGORIES = [
  {
    index: "01",
    title: "Mobile & Tablet",
    blurb:
      "Flagship and everyday smartphones and tablets — Samsung Galaxy, Redmi, Vivo, OnePlus and more, boxed and genuine.",
    href: "https://246impex.com.np/collections/mobile-and-tablet",
    tags: ["Samsung", "Redmi", "Vivo", "OnePlus"],
  },
  {
    index: "02",
    title: "Laptops & Computer",
    blurb:
      "Work, study and play machines — imported laptops and computing gear ready for daily performance.",
    href: "https://246impex.com.np/collections/laptops-and-computer",
    tags: ["Laptops", "Computing"],
  },
  {
    index: "03",
    title: "Audio & Wearables",
    blurb:
      "Speakers, headphones and smartwatches from JBL, Sony, Anker and more — sound and wearables that last.",
    href: "https://246impex.com.np/collections/Audio-and-Wearables",
    tags: ["JBL", "Sony", "Anker"],
  },
  {
    index: "04",
    title: "Electric & Electronics",
    blurb:
      "Home and lifestyle electronics — TVs, rice cookers, routers and appliances built for real homes.",
    href: "https://246impex.com.np/collections/Electric-Electronics",
    tags: ["TV", "Home", "Appliances"],
  },
  {
    index: "05",
    title: "Mobile Accessories",
    blurb:
      "Chargers, cables, screen protectors and everyday essentials from Anker, Promate, HiFuture and more.",
    href: "https://246impex.com.np/collections/mobile-accessories",
    tags: ["Anker", "Promate", "HiFuture"],
  },
];

/* Real brands featured on the live site */
export const BRANDS = [
  "Apple",
  "Samsung",
  "JBL",
  "OnePlus",
  "Redmi",
  "Xiaomi",
  "Vivo",
  "CMF by Nothing",
  "HiFuture",
  "Anker",
  "Sony",
  "Philips",
  "Aiwa",
  "Promate",
];

/* Real value propositions — all stated on the live site */
export const VALUES = [
  {
    k: "01",
    title: "100% Genuine",
    body: "Every product is original and imported — no clones, no grey-market surprises. What you order is exactly what arrives, boxed and sealed.",
  },
  {
    k: "02",
    title: "Official Warranty",
    body: "Products carry an official 1-year warranty, so support and peace of mind come standard with every purchase.",
  },
  {
    k: "03",
    title: "Easy EMI",
    body: "Flexible EMI plans built for students and everyone — own the tech you want today and pay over comfortable instalments.",
  },
  {
    k: "04",
    title: "Fast Delivery",
    body: "Same-day dispatch on orders before 3 PM and free delivery inside the Kathmandu Valley, with fast delivery across Nepal.",
  },
];

/* Trust facts — only real, countable numbers. No invented metrics. */
export const TRUST = [
  { value: 14, suffix: "+", label: "Global brands stocked" },
  { value: 5, suffix: "", label: "Product categories" },
  { value: 1, suffix: "-yr", label: "Official warranty" },
  { value: 100, suffix: "%", label: "Genuine, imported" },
];
