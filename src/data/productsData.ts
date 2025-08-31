export interface Product {
  slug: string
  title: string
  description: string
  priceEth: number
  imageUrl: string
  fullText: string
}

export const products = [
  {
    slug: 'basic-yoga-pack',
    title: 'Basic Yoga Pack',
    description:
      'Perfect for beginners. Includes 3 foundational classes to kickstart your yoga journey.',
    priceEth: 0.01,
    imageUrl: 'https://cdn.openart.ai/uploads/image_bW6gWU2r_1754912041671_512.webp',
    fullText: `The Basic Yoga Pack is the perfect starting point for anyone new to yoga. With three foundational classes, you'll learn essential postures, breathing techniques, and the basic principles of movement and alignment. Each session is designed to be accessible, clear, and supportive—helping you build strength, flexibility, and confidence on the mat. Whether you're looking to improve your physical wellbeing or simply create a mindful routine, this pack will guide you step by step into your yoga journey.`,
  },
  {
    slug: 'intermediate-flow',
    title: 'Intermediate Flow',
    description: 'Build strength and flexibility with our 5-session intermediate vinyasa course.',
    priceEth: 0.01,
    imageUrl: 'https://cdn.openart.ai/uploads/image_id941sBt_1754912171815_512.webp',
    fullText: `Intermediate Flow is designed for practitioners who already know the basics and are ready to take their practice to the next level. This 5-session vinyasa course focuses on building strength, improving flexibility, and deepening your connection between breath and movement. Each class offers dynamic sequences, more advanced postures, and mindful transitions to challenge both body and mind. It’s ideal if you're looking to refine your technique and expand your yoga practice with confidence.`,
  },
  {
    slug: 'mindful-meditation',
    title: 'Mindful Meditation Series',
    description: 'A calming series of guided meditations to restore peace and clarity.',
    priceEth: 0.015,
    imageUrl: 'https://cdn.openart.ai/uploads/image_faR7AxHL_1754912303847_512.webp',
    fullText: `The Mindful Meditation Series is a calming journey inward, perfect for anyone seeking peace and clarity in their daily life. This guided series includes a variety of sessions focused on breath awareness, body scanning, and present-moment focus. Each meditation is designed to help reduce stress, improve mental clarity, and promote emotional well-being. Whether you're new to meditation or looking to deepen your mindfulness practice, this series offers a gentle yet powerful path to inner balance.`,
  },
  {
    slug: 'power-vinyasa',
    title: 'Power Vinyasa Challenge',
    description:
      'Challenge yourself with dynamic sequences designed to increase stamina and control.',
    priceEth: 0.03,
    imageUrl: 'https://cdn.openart.ai/uploads/image_PaV5edaF_1754912364346_512.webp',
    fullText: `The Power Vinyasa Challenge is an energizing program crafted for those ready to push their physical and mental limits. Featuring dynamic, sweat-inducing sequences, this course builds stamina, control, and body awareness through intense flows. It's ideal for intermediate to advanced practitioners looking to boost strength, enhance flexibility, and improve coordination. Prepare to move, breathe, and grow stronger with every session.`,
  },
  {
    slug: 'yin-deep-release',
    title: 'Yin Deep Release',
    description: 'Stretch, relax and go deep with this restorative yin yoga program.',
    priceEth: 0.02,
    imageUrl: 'https://cdn.openart.ai/uploads/image_dVsHHFyz_1754912040307_512.webp',
    fullText: `Yin Deep Release is a restorative yoga program designed to help you slow down, release tension, and connect deeply with your body. Through long-held passive poses, this series targets the connective tissues—ligaments, joints, and fascia—to improve mobility and encourage deep relaxation. Ideal for winding down after a busy day or balancing an active lifestyle, each session offers a quiet space for introspection, healing, and stillness.`,
  },
  {
    slug: 'full-access-bundle',
    title: 'Full Access Bundle',
    description: 'Get lifetime access to all current and future yoga content in one bundle.',
    priceEth: 0.07,
    imageUrl: 'https://cdn.openart.ai/uploads/image_kly6JucJ_1754912303961_512.webp',
    fullText: `The Full Access Bundle is your all-in-one ticket to a complete yoga journey. With lifetime access to all current and future courses, you’ll never miss out on new content, updates, or exclusive sessions. Whether you're a beginner, intermediate, or advanced practitioner, this bundle offers unmatched flexibility and value—empowering you to grow, explore, and deepen your practice at your own pace, anytime, anywhere.`,
  },
]

export default products
