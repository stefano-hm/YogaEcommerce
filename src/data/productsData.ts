export interface Product {
  title: string
  description: string
  priceEth: number
  imageUrl: string
}

const products: Product[] = [
  {
    title: 'Basic Yoga Package',
    description: 'Gentle workouts for beginners. 3 sessions per week.',
    priceEth: 0.01,
    imageUrl:
      'https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/a94e203f-4674-4c71-a78e-f93db8b52dab/Leonardo_Phoenix_10_Studioquality_product_photo_of_a_premium_y_0.jpg',
  },
  {
    title: 'Intense Yoga Package',
    description: 'Advanced sequences for experienced users. Includes breathing exercises.',
    priceEth: 0.03,
    imageUrl:
      'https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/7fc945f7-e966-49a1-8d15-f922f219bb04/Leonardo_Phoenix_10_Highend_product_display_of_an_advanced_yog_2.jpg',
  },
  {
    title: 'Detox Yoga Package',
    description: 'Regain balance. Focus on twists and relaxation.',
    priceEth: 0.02,
    imageUrl:
      'https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/07ddb2a5-ffda-4567-bcde-902c7efc188d/Leonardo_Phoenix_10_Lifestyle_product_shot_of_a_detox_yoga_pac_1.jpg',
  },
]

export default products
