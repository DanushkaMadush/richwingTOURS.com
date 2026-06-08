export interface AboutStorySection {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
}

export const ABOUT_STORY_SECTIONS: AboutStorySection[] = [
  {
    id: 'who-we-are',
    eyebrow: 'Who We Are',
    title: 'A Sri Lankan travel agency built around memorable journeys',
    body:
      'Richwing Tours is a premier travel agency nestled in the heart of Sri Lanka, dedicated to crafting unforgettable experiences for travelers worldwide. With a passion for hospitality and a deep-rooted love for our island home, we blend local expertise with global standards to curate journeys that captivate the senses and enrich the soul.'
  },
  {
    id: 'vision',
    eyebrow: 'Our Vision',
    title: 'Authentic experiences that connect travelers with Sri Lanka',
    body:
      'At Richwing Tours, we envision a world where every traveler discovers the magic of Sri Lanka through authentic experiences that celebrate its rich culture, diverse landscapes, and warm hospitality. Our mission is to be the bridge that connects explorers with the essence of this island paradise, fostering meaningful connections and memories that last a lifetime.'
  },
  {
    id: 'why-us',
    eyebrow: 'Why Us',
    title: 'Personalized service, local knowledge, and thoughtful care',
    body:
      'Choose Richwing Tours for a journey beyond the ordinary. With our intimate knowledge of Sri Lanka, personalized service, and commitment to excellence, we ensure every moment of your trip is infused with wonder and delight. Whether you seek adventure in the wilderness, serenity on sandy shores, or cultural immersion in vibrant communities, we tailor each experience to your desires, making us your ideal partner in exploration and discovery.'
  }
];
