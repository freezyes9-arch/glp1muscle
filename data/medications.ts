export type MedicationPrice = {
  name: string;
  ingredient: string;
  route: string;
  typicalUse: string;
  exampleCashPrice: string;
  savingsNotes: string;
  manufacturer: string;
};

export const medications: MedicationPrice[] = [
  {
    name: "Ozempic",
    ingredient: "Semaglutide",
    route: "Weekly injection",
    typicalUse: "Type 2 diabetes; often discussed for weight loss",
    exampleCashPrice: "$900-$1,100/month",
    savingsNotes: "Insurance varies; manufacturer savings may require eligibility.",
    manufacturer: "Novo Nordisk"
  },
  {
    name: "Wegovy",
    ingredient: "Semaglutide",
    route: "Weekly injection",
    typicalUse: "Chronic weight management",
    exampleCashPrice: "$1,200-$1,500/month",
    savingsNotes: "Coverage is improving but plan exclusions are common.",
    manufacturer: "Novo Nordisk"
  },
  {
    name: "Mounjaro",
    ingredient: "Tirzepatide",
    route: "Weekly injection",
    typicalUse: "Type 2 diabetes; often compared with weight loss drugs",
    exampleCashPrice: "$950-$1,200/month",
    savingsNotes: "Savings card terms depend on diagnosis and insurance status.",
    manufacturer: "Eli Lilly"
  },
  {
    name: "Zepbound",
    ingredient: "Tirzepatide",
    route: "Weekly injection",
    typicalUse: "Chronic weight management",
    exampleCashPrice: "$1,000-$1,300/month",
    savingsNotes: "Self-pay and savings programs can materially change net cost.",
    manufacturer: "Eli Lilly"
  }
];
