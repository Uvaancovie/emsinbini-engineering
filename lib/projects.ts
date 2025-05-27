// lib/projects.ts
// Fictional engineering case studies and services for ENSIMBINI ENGINEERING CC

export type Project = {
  id: string;
  title: string;
  image: string;
  summary: string;
  scenario: string;
  solution: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "precision-turning-24hr",
    title: "Precision Shaft Delivered in 24 Hours",
    image: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//precision-shaft.jpg",
    summary: "A manufacturing plant required a custom precision shaft on an urgent timeline.",
    scenario: "A client’s production line was halted due to a broken shaft. They needed a replacement within 24 hours to avoid costly downtime.",
    solution: "Our team quickly sourced the material, performed precision turning, and delivered the finished shaft within the deadline, restoring operations.",
    tags: ["Precision Turning", "Rapid Response", "Machining"],
  },
  {
    id: "pump-refurbishment",
    title: "Industrial Pump Refurbishment",
    image: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//industrial-pump.jpg",
    summary: "Refurbishing a worn-out industrial pump to extend its service life.",
    scenario: "A facility’s main pump was showing signs of wear, risking a major breakdown.",
    solution: "We disassembled, machined, and replaced worn components, then reassembled and tested the pump, ensuring reliable performance.",
    tags: ["Pump Refurbishment", "Maintenance", "Machining"],
  },
  {
    id: "custom-fabrication-platform",
    title: "Custom Fabrication of Access Platform",
    image: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//fabrication.jpg",
    summary: "Design and fabrication of a steel access platform for a warehouse.",
    scenario: "A warehouse needed a safe, custom-sized access platform for elevated storage.",
    solution: "We designed, fabricated, and installed a steel platform with safety railings, meeting all safety standards.",
    tags: ["Custom Fabrication", "Steelwork", "Safety"],
  },
  {
    id: "onsite-fitting-maintenance",
    title: "On-Site Fitting & Maintenance",
    image: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//fitting.jpg",
    summary: "Providing on-site fitting and maintenance for critical equipment.",
    scenario: "A plant required on-site alignment and fitting of new rollers during a scheduled shutdown.",
    solution: "Our technicians performed precise alignment and installation, minimizing downtime and ensuring smooth operation.",
    tags: ["On-Site Fitting", "Maintenance", "Rollers"],
  },
  {
    id: "emergency-breakdown-repair",
    title: "Emergency Breakdown Repair",
    image: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//emergency.jpg",
    summary: "Rapid response to an unexpected equipment failure.",
    scenario: "A critical piece of equipment failed unexpectedly, threatening production schedules.",
    solution: "We quickly diagnosed the issue, machined a replacement part, and restored the equipment to service the same day.",
    tags: ["Emergency Repair", "Machining", "Rapid Response"],
  },
];
