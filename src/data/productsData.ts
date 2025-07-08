export interface Product {
  slug: string
  title: string
  description: string
  priceEth: number
  imageUrl: string
}


export const products = [
  {
    slug: "basic-yoga-pack",
    title: "Basic Yoga Pack",
    description: "Perfect for beginners. Includes 3 foundational classes to kickstart your yoga journey.",
    priceEth: 0.00001,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/07ddb2a5-ffda-4567-bcde-902c7efc188d/Leonardo_Phoenix_10_Lifestyle_product_shot_of_a_detox_yoga_pac_1.jpg",
  },
  {
    slug: "intermediate-flow",
    title: "Intermediate Flow",
    description: "Build strength and flexibility with our 5-session intermediate vinyasa course.",
    priceEth: 0.025,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/07ddb2a5-ffda-4567-bcde-902c7efc188d/Leonardo_Phoenix_10_Lifestyle_product_shot_of_a_detox_yoga_pac_1.jpg",
  },
  {
    slug: "mindful-meditation",
    title: "Mindful Meditation Series",
    description: "A calming series of guided meditations to restore peace and clarity.",
    priceEth: 0.015,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/07ddb2a5-ffda-4567-bcde-902c7efc188d/Leonardo_Phoenix_10_Lifestyle_product_shot_of_a_detox_yoga_pac_1.jpg",
  },
  {
    slug: "power-vinyasa",
    title: "Power Vinyasa Challenge",
    description: "Challenge yourself with dynamic sequences designed to increase stamina and control.",
    priceEth: 0.03,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/07ddb2a5-ffda-4567-bcde-902c7efc188d/Leonardo_Phoenix_10_Lifestyle_product_shot_of_a_detox_yoga_pac_1.jpg",
  },
  {
    slug: "yin-deep-release",
    title: "Yin Deep Release",
    description: "Stretch, relax and go deep with this restorative yin yoga program.",
    priceEth: 0.02,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/07ddb2a5-ffda-4567-bcde-902c7efc188d/Leonardo_Phoenix_10_Lifestyle_product_shot_of_a_detox_yoga_pac_1.jpg",
  },
  {
    slug: "full-access-bundle",
    title: "Full Access Bundle",
    description: "Get lifetime access to all current and future yoga content in one bundle.",
    priceEth: 0.07,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/07ddb2a5-ffda-4567-bcde-902c7efc188d/Leonardo_Phoenix_10_Lifestyle_product_shot_of_a_detox_yoga_pac_1.jpg",
  },
]

export default products
