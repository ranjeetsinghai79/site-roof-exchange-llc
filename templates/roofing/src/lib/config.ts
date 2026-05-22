import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Roof Exchange",
    tagline: "Your Roof, Our Priority.",
    phone: "(407) 587-0738",
    phoneHref: "tel:+14075870738",
    email: "info@roofexchange.com",
    address: "123 Main St",
    city: "Kissimmee",
    serviceAreas: ["Kissimmee", "Orlando", "St. Cloud", "Davenport", "Poinciana"],
    license: "FL-CGC1526362",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "navy",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Roof Installation", desc: "Expert installation of new roofs with durable materials and superior craftsmanship.", urgent: false },
    { icon: "wrench", title: "Roof Repair", desc: "Fast, reliable repairs for leaks, storm damage, and general wear and tear.", urgent: true },
    { icon: "shield-check", title: "Storm Damage Restoration", desc: "Specialized restoration services to repair and rebuild roofs after severe weather.", urgent: true },
    { icon: "hammer", title: "Metal Roofing", desc: "Durable and energy-efficient metal roof installations for long-lasting protection.", urgent: false },
    { icon: "home", title: "Shingle Roofing", desc: "Classic and versatile shingle roof installations, offering a wide range of styles and colors.", urgent: false },
    { icon: "droplets", title: "Gutters", desc: "Installation and repair of seamless gutter systems to protect your home from water damage.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Kissimmee", stars: 5, text: "Roof Exchange replaced our entire roof after a bad storm. They were incredibly professional, explained the insurance process clearly, and finished the job in just three days. The crew was respectful, and the new roof looks fantastic. Highly recommend their storm damage expertise!" },
    { name: "Michael P.", location: "Orlando", stars: 5, text: "We had a persistent leak that other companies couldn't fix. Roof Exchange came out, identified the issue quickly, and completed the repair for a fair price. Their team was friendly and efficient, and we haven't had a single drip since. Truly impressed with their attention to detail." },
    { name: "Jessica R.", location: "St. Cloud", stars: 5, text: "From the initial free estimate to the final inspection, Roof Exchange made our new metal roof installation a breeze. They offered financing options that fit our budget, and the quality of work is outstanding. Our home feels cooler, and we're confident in its protection for years to come." }
  ],

  trustBadges: [
    "GAF Master Elite Contractor", "Licensed & Insured", "Certified Storm Restoration", "Financing Available", "Free Estimates", "24/7 Trusted Service"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent requests and provide prompt service for all your roofing needs." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Transparent, detailed estimates with no hidden fees, so you know the cost before we start." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained, certified, and experienced roofing specialists." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work and ensure your complete satisfaction with every project." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our advanced AI reception is available around the clock to assist you with scheduling and inquiries." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all the necessary tools and high-quality materials for efficient service." }
  ],

  formServiceOptions: ["Roof Installation", "Roof Repair", "Storm Damage Restoration", "Metal Roofing", "Shingle Roofing", "Gutters"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!