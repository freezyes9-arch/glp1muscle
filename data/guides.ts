export type Guide = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  updated: string;
  sections: { heading: string; body: string }[];
  table?: { columns: string[]; rows: string[][] };
  recommendations: string[];
  faqs: { question: string; answer: string }[];
};

export const guides: Guide[] = [
  {
    slug: "how-much-protein-on-ozempic",
    title: "How Much Protein Do You Need on Ozempic?",
    description: "A practical protein guide for Ozempic users who want to preserve lean mass during weight loss.",
    keyword: "Ozempic protein calculator",
    updated: "2026-05-12",
    sections: [
      {
        heading: "Protein Becomes Harder When Appetite Drops",
        body: "Ozempic can make meals smaller and less frequent. That can be helpful for fat loss, but it also makes it easier to miss protein without realizing it."
      },
      {
        heading: "Use Goal Weight as a Starting Point",
        body: "A practical target often starts around 1.4-2.0 grams of protein per kilogram of goal body weight, then adjusts for age, activity, and resistance training."
      },
      {
        heading: "The Real Goal Is Muscle Preservation",
        body: "Protein is not only about fullness. During GLP-1 weight loss, it is one of the simplest daily habits that helps protect strength, lean mass, and long-term maintenance."
      }
    ],
    table: {
      columns: ["Situation", "Protein priority", "What to do"],
      rows: [
        ["Very low appetite", "High", "Use smaller protein meals and shakes if needed"],
        ["Training 2-4x weekly", "High", "Spread protein across 3-4 eating moments"],
        ["Feeling weaker", "Urgent", "Check protein, calories, and training load"]
      ]
    },
    recommendations: [
      "Use the protein calculator to set a daily target before changing calories again.",
      "Treat breakfast or the first meal as a protein anchor.",
      "Ask a clinician for personalized guidance if you have kidney disease or complex medical needs."
    ],
    faqs: [
      {
        question: "How much protein should I eat on Ozempic?",
        answer: "Many people use a goal-weight-based range as a starting point, then adjust for training, age, and medical context."
      },
      {
        question: "Can low protein make muscle loss worse?",
        answer: "Yes. Low protein, fast loss, and no resistance training can stack together and raise lean-mass risk."
      }
    ]
  },
  {
    slug: "can-glp-1-drugs-cause-muscle-loss",
    title: "Can GLP-1 Drugs Cause Muscle Loss?",
    description: "Why lean mass can drop during GLP-1 weight loss and how to lower your risk.",
    keyword: "Do you lose muscle on Ozempic?",
    updated: "2026-05-12",
    sections: [
      {
        heading: "The Medication Is Only Part of the Story",
        body: "Muscle loss risk usually comes from the whole situation: rapid weight loss, low calories, low protein, less training, older age, and appetite suppression."
      },
      {
        heading: "Fast Weight Loss Raises the Stakes",
        body: "When the scale moves quickly, the body may pull from both fat and lean tissue. The goal is not to stop weight loss, but to make it more muscle-aware."
      },
      {
        heading: "Strength Is a Useful Signal",
        body: "If your lifts, energy, or daily function are falling sharply, it may be time to reassess protein, calories, training, and rate of loss."
      }
    ],
    table: {
      columns: ["Risk factor", "Why it matters", "Better move"],
      rows: [
        ["Low protein", "Less material for repair", "Set a protein floor"],
        ["No lifting", "Less signal to keep muscle", "Train 2-4x weekly"],
        ["Rapid loss", "More lean-mass pressure", "Avoid crash dieting"]
      ]
    },
    recommendations: [
      "Use the muscle loss calculator if weight is dropping faster than expected.",
      "Track strength, waist, photos, and energy alongside the scale.",
      "Do not ignore persistent weakness, dizziness, or severe side effects."
    ],
    faqs: [
      {
        question: "Do GLP-1 drugs directly burn muscle?",
        answer: "They do not simply target muscle, but the appetite and calorie changes around weight loss can increase lean-mass loss risk."
      },
      {
        question: "What is the fastest fix?",
        answer: "Protein consistency and resistance training are the most practical first levers for many users."
      }
    ]
  },
  {
    slug: "best-protein-foods-while-using-wegovy",
    title: "Best Protein Foods While Using Wegovy",
    description: "Protein foods and meal ideas that can be easier to tolerate when Wegovy reduces appetite.",
    keyword: "How much protein on Wegovy?",
    updated: "2026-05-12",
    sections: [
      {
        heading: "Tolerability Wins",
        body: "The best protein food is the one you can actually eat consistently. Lower-fat, smaller portions may be easier when nausea or fullness is high."
      },
      {
        heading: "Make Protein Easy to Repeat",
        body: "Greek yogurt, eggs, fish, poultry, tofu, tempeh, beans, cottage cheese, and protein shakes can all work depending on tolerance."
      },
      {
        heading: "Use Shakes as a Tool, Not the Whole Plan",
        body: "Protein shakes can help on low-appetite days. Whole foods still matter for fiber, micronutrients, and meal satisfaction."
      }
    ],
    table: {
      columns: ["Food", "Why it helps", "Watch-out"],
      rows: [
        ["Greek yogurt", "High protein, small volume", "Choose lower sugar if needed"],
        ["Eggs", "Easy, nutrient dense", "May feel heavy for some users"],
        ["Clear whey", "Light texture", "Check sweetener tolerance"]
      ]
    },
    recommendations: [
      "Pick 3 repeatable protein anchors instead of trying to perfect every meal.",
      "Use the protein calculator to know the daily number you are aiming for.",
      "Keep portions smaller if fullness or nausea is a barrier."
    ],
    faqs: [
      {
        question: "What protein is easiest on Wegovy?",
        answer: "Many people tolerate smaller servings of yogurt, fish, eggs, tofu, or shakes, but tolerance is individual."
      },
      {
        question: "Should I force protein if I feel sick?",
        answer: "Persistent nausea should be discussed with your prescriber. Smaller, lower-fat choices may be easier."
      }
    ]
  },
  {
    slug: "fast-weight-loss-muscle-loss-risk",
    title: "How Fast Weight Loss Increases Muscle Loss Risk",
    description: "Understand why rapid GLP-1 weight loss can increase lean-mass risk and what to monitor.",
    keyword: "Muscle preservation on GLP-1",
    updated: "2026-05-12",
    sections: [
      {
        heading: "Fast Loss Can Feel Rewarding",
        body: "Seeing the scale drop quickly is motivating. The hidden risk is that aggressive loss can make it harder to preserve strength and lean tissue."
      },
      {
        heading: "Rate of Loss Is a Risk Signal",
        body: "A high weekly percentage of body weight lost can increase the need for protein, resistance training, and recovery."
      },
      {
        heading: "Do Not Chase the Lowest Calories",
        body: "The best plan is the one that reduces fat while keeping you functional, strong, hydrated, and consistent."
      }
    ],
    table: {
      columns: ["Weekly pace", "Muscle risk", "Action"],
      rows: [
        ["Under 0.75%", "Lower", "Keep habits consistent"],
        ["0.75%-1.5%", "Moderate", "Watch protein and strength"],
        ["Over 1.5%", "Higher", "Reassess pace with a clinician"]
      ]
    },
    recommendations: [
      "Use the muscle loss calculator if weekly loss is above 1% of body weight.",
      "Keep resistance training in the plan even during busy weeks.",
      "If strength is falling fast, do not celebrate the scale in isolation."
    ],
    faqs: [
      {
        question: "Is faster weight loss always worse?",
        answer: "Not always, but faster loss can raise the need to protect protein, training, hydration, and recovery."
      },
      {
        question: "What should I track besides weight?",
        answer: "Track protein, lifting performance, steps, waist, energy, and side effects."
      }
    ]
  },
  {
    slug: "ozempic-vs-mounjaro-muscle-preservation",
    title: "Ozempic vs Mounjaro for Muscle Preservation",
    description: "A practical comparison of Ozempic and Mounjaro through the lens of preserving lean mass.",
    keyword: "Ozempic vs Mounjaro muscle preservation",
    updated: "2026-05-12",
    sections: [
      {
        heading: "The Muscle-Preservation Basics Are Similar",
        body: "Regardless of medication, the biggest controllable levers are protein intake, strength training, rate of loss, sleep, and enough total nutrition."
      },
      {
        heading: "Appetite Suppression Changes the Plan",
        body: "If one medication suppresses appetite more strongly for you, your protein and calorie consistency may need more attention."
      },
      {
        heading: "Compare Your Habits, Not Just the Drug",
        body: "A medication comparison is useful, but your day-to-day habits determine much of your lean-mass risk."
      }
    ],
    table: {
      columns: ["Factor", "Ozempic", "Mounjaro"],
      rows: [
        ["Active ingredient", "Semaglutide", "Tirzepatide"],
        ["Muscle strategy", "Protein + training", "Protein + training"],
        ["Main practical question", "Can you eat enough protein?", "Can you eat enough protein?"]
      ]
    },
    recommendations: [
      "Use the same muscle-preservation checklist on either medication.",
      "Watch appetite, protein, training performance, and weekly loss pace.",
      "Discuss medication choice and side effects with your prescriber."
    ],
    faqs: [
      {
        question: "Is Mounjaro better for preserving muscle?",
        answer: "Medication response varies. Muscle preservation still depends heavily on protein, training, pace, and clinical context."
      },
      {
        question: "Should I switch medications for muscle preservation?",
        answer: "That is a clinician decision. Start by assessing protein, training, calories, and rate of loss."
      }
    ]
  }
];
