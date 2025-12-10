import { Question, Category } from './types';

export const CATEGORIES: Category[] = [
  'Nutrition',
  'Movement',
  'Sleep',
  'Social Connection',
  'Purpose'
];

export const QUESTIONS: Question[] = [
  // PILLAR 1: NUTRITION
  { category: 'Nutrition', text: 'I primarily consume whole, single-ingredient foods and minimize consumption of ultra-processed foods.' },
  { category: 'Nutrition', text: 'I consume sufficient protein (1.2 – 1.8 g/kg/day) and distribute it adequately across meals.' },
  { category: 'Nutrition', text: 'I consume a high volume of non-starchy vegetables and fruits daily (e.g., 3-5 servings).' },
  { category: 'Nutrition', text: 'I rarely or never consume alcohol (0-2 drinks per week maximum).' },
  { category: 'Nutrition', text: 'I consistently monitor my food intake (e.g., portion sizes, tracking, or mindful eating) to maintain an optimal body composition.' },
  { category: 'Nutrition', text: 'I actively limit my intake of added sugars and rarely or never consume sugary beverages.' },
  { category: 'Nutrition', text: 'I consume a diverse variety of fiber sources daily including fruits, vegetables, legumes, nuts, etc.' },
  { category: 'Nutrition', text: 'I consume adequate omega-3 fatty acids through whole foods (>=2 servings of fatty fish or equivalent per week).' },
  { category: 'Nutrition', text: 'I stop eating at least 2 hours before sleep.' },
  { category: 'Nutrition', text: 'I stay adequately hydrated based on my activity levels.' },

  // PILLAR 2: MOVEMENT
  { category: 'Movement', text: 'I accumulate at least 150 minutes of low-to-moderate intensity aerobic activity (Zone 2) each week.' },
  { category: 'Movement', text: 'I engage in resistance training 2 or more times per week, including functional compound movements.' },
  { category: 'Movement', text: 'I intentionally train my core, grip strength and carrying capacity.' },
  { category: 'Movement', text: 'I regularly practice functional mobility (e.g., deep squats, hip flexor stretching).' },
  { category: 'Movement', text: 'I incorporate high-intensity intervals (Zone 4/5) at least once per week.' },
  { category: 'Movement', text: 'I have a daily "movement hygiene" practice (stretching, mobility) to counteract sedentary postures.' },
  { category: 'Movement', text: 'I walk 7,000 to 10,000+ steps daily.' },
  { category: 'Movement', text: 'I can easily get up from the floor to a standing position without using my hands.' },
  { category: 'Movement', text: 'I consistently adhere to my exercise schedule throughout the week, making it a non-negotiable component of my health routine.' },
  { category: 'Movement', text: 'I actively break up periods of sitting every 45-60 minutes.' },

  // PILLAR 3: SLEEP
  { category: 'Sleep', text: 'I consistently get 7-9 hours of total sleep time (not just time in bed) per night.' },
  { category: 'Sleep', text: 'I maintain a consistent sleep/wake time within a 30-minute window, even on weekends.' },
  { category: 'Sleep', text: 'I expose my eyes to natural sunlight in the morning.' },
  { category: 'Sleep', text: 'I sleep in a room that is completely dark and cool (65-68°F / 18-20°C).' },
  { category: 'Sleep', text: 'I have a wind-down routine 60 minutes before bed that minimizes blue light screens and mentally activating work.' },
  { category: 'Sleep', text: 'I rarely rely on pharmacological aids (prescription or OTC) to initiate sleep.' },
  { category: 'Sleep', text: 'I wake up feeling mentally refreshed and physically restored most mornings.' },
  { category: 'Sleep', text: 'I avoid caffeine consumption 10-12 hours before my intended bedtime.' },
  { category: 'Sleep', text: 'I avoid consuming alcohol within 3-4 hours of bedtime.' },
  { category: 'Sleep', text: 'If I wake up in the middle of the night, I can fall back asleep relatively quickly.' },

  // PILLAR 4: SOCIAL CONNECTION
  { category: 'Social Connection', text: 'I have at least 2-3 people I could call at 3 AM if I had a serious emergency.' },
  { category: 'Social Connection', text: 'I engage in meaningful, face-to-face conversation with friends or family multiple times per week.' },
  { category: 'Social Connection', text: 'I feel a genuine sense of belonging to a community (professional, hobbyist, religious, or geographic).' },
  { category: 'Social Connection', text: 'I rarely feel essentially "lonely" or isolated, even when I am physically alone.' },
  { category: 'Social Connection', text: 'I actively invest time in maintaining long-term relationships, even when it is inconvenient.' },
  { category: 'Social Connection', text: 'I feel understood and validated by the people closest to me.' },
  { category: 'Social Connection', text: 'My closest support system actively encourages my positive health behaviors (e.g., exercise, diet, sleep) rather than sabotaging them.' },
  { category: 'Social Connection', text: 'When conflicts or disagreements arise in my close relationships, I actively seek constructive resolution rather than avoidance.' },
  { category: 'Social Connection', text: 'I am able to be vulnerable and share my true emotional state with at least one other person.' },
  { category: 'Social Connection', text: 'I actively listen to others and feel my social interactions are reciprocal, not one-sided.' },

  // PILLAR 5: PURPOSE
  { category: 'Purpose', text: 'I have a clear reason to get out of bed in the morning beyond just financial obligation.' },
  { category: 'Purpose', text: 'I regularly experience "flow states" where I am completely absorbed in a task.' },
  { category: 'Purpose', text: 'I feel my daily activities contribute to something larger than myself or society.' },
  { category: 'Purpose', text: 'I have specific long-term goals that I am actively working toward.' },
  { category: 'Purpose', text: 'I view stress as a challenge to adapt to, rather than a threat to be avoided.' },
  { category: 'Purpose', text: 'I actively engage in continuous learning or skill acquisition to maintain my mental sharpness.' },
  { category: 'Purpose', text: 'I feel a strong sense of autonomy and control over the direction and major decisions of my life.' },
  { category: 'Purpose', text: 'I have hobbies or passions that I pursue purely for the joy of the activity.' },
  { category: 'Purpose', text: 'I feel useful and that my contributions matter to my work, family, or society.' },
  { category: 'Purpose', text: 'I practice gratitude or mindfulness effectively to regulate emotional reactivity.' }
];