export type SlideId = 
  | 'cover'
  | 'problem'
  | 'why-nutrition'
  | 'parent-problems'
  | 'introducing-nutrowaa'
  | 'meal-plans'
  | 'school-benefits'
  | 'safety'
  | 'vision'
  | 'proposal';

export interface SlideData {
  id: SlideId;
  title: string;
  subtitle?: string;
  presenterNotes: string;
}

export const SLIDES: SlideData[] = [
  {
    id: 'cover',
    title: 'Nutrowaa',
    subtitle: 'Healthy Kids. Stress-Free Mornings. Smarter Futures.',
    presenterNotes: 'Start by welcoming the committee. Begin with the vision: We are not just a tiffin service; we are a partner in building the foundation of every child’s future. Highlight the tagline.'
  },
  {
    id: 'problem',
    title: 'The Silent Crisis in Classrooms',
    presenterNotes: 'Address the alarming statistics. Indian children are facing a double burden: malnutrition and obesity. Quote NFHS-5 data: rising obesity and anemia. Link poor nutrition directly to concentration and vision issues (spec numbers are rising).'
  },
  {
    id: 'why-nutrition',
    title: 'Fueling High Performance',
    presenterNotes: 'Shift to the positive. Explain the science of "Good Food = Good Grades". Use the comparisons for brain and body energy levels. Mention how balanced meals reduce afternoon fatigue (post-lunch energy slump).'
  },
  {
    id: 'parent-problems',
    title: 'The Morning Battle',
    presenterNotes: 'Empathize with parents. Busy mornings, the struggle of "Healthy vs. Tasty". This builds the emotional bridge for why schools need a structured solution like Nutrowaa.'
  },
  {
    id: 'introducing-nutrowaa',
    title: 'The Complete Nutrition Partner',
    presenterNotes: 'Introduce the solution. Fresh, hygienic, and school-delivered. Walk through the "How It Works" flow. Emphasize that we handle everything from nutrition planning to the last mile.'
  },
  {
    id: 'meal-plans',
    title: 'Crafted for Every Age',
    presenterNotes: 'Showcase the variety. Indian flavors but with a nutritional punch. Mention millets (Current year importance) and protein sources. Explain age-specific portioning.'
  },
  {
    id: 'school-benefits',
    title: 'Empowering Schools',
    presenterNotes: 'Talk to the committee directly. Focus on "School Reputation" and "Reduced Sick Days". A healthy school is a focused school. Attendance goes up when immunity is high.'
  },
  {
    id: 'safety',
    title: 'Hygiene Without Compromise',
    presenterNotes: 'The non-negotiables. Standards, quality checks, and temperature control. Reassure the management about risk mitigation.'
  },
  {
    id: 'vision',
    title: 'Towards a Healthier Future',
    presenterNotes: 'The emotional high. Share a story or a quote. "Healthy children create stronger nations". Show testimonials from pilot parents/students.'
  },
  {
    id: 'proposal',
    title: 'Building Futures Together',
    presenterNotes: 'The closing call to action. Propose a pilot. Provide contact details. End on a high, inspiring note.'
  }
];
