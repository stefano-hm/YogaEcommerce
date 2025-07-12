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
    slug: "basic-yoga-pack",
    title: "Basic Yoga Pack",
    description: "Perfect for beginners. Includes 3 foundational classes to kickstart your yoga journey.",
    priceEth: 0.00001,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/8a8a3ead-4dd9-4523-8266-3b38539898e0/Leonardo_Phoenix_10_A_serene_beginner_yoga_scene_in_a_bright_m_1.jpg",
    fullText: `The Basic Yoga Pack is the perfect starting point for anyone new to yoga. With three foundational classes, you'll learn essential postures, breathing techniques, and the basic principles of movement and alignment. Each session is designed to be accessible, clear, and supportive—helping you build strength, flexibility, and confidence on the mat. Whether you're looking to improve your physical wellbeing or simply create a mindful routine, this pack will guide you step by step into your yoga journey.`,

  },
  {
    slug: "intermediate-flow",
    title: "Intermediate Flow",
    description: "Build strength and flexibility with our 5-session intermediate vinyasa course.",
    priceEth: 0.025,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/5e7962be-d4cc-462f-a59c-54f533463f66/Leonardo_Phoenix_10_A_dynamic_intermediate_yoga_scene_in_a_mod_1.jpg",
    fullText: `Intermediate Flow is designed for practitioners who already know the basics and are ready to take their practice to the next level. This 5-session vinyasa course focuses on building strength, improving flexibility, and deepening your connection between breath and movement. Each class offers dynamic sequences, more advanced postures, and mindful transitions to challenge both body and mind. It’s ideal if you're looking to refine your technique and expand your yoga practice with confidence.`,
  },
  {
    slug: "mindful-meditation",
    title: "Mindful Meditation Series",
    description: "A calming series of guided meditations to restore peace and clarity.",
    priceEth: 0.015,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/8556f1c9-612b-4529-9fd3-cae30499312d/Leonardo_Phoenix_10_A_serene_meditation_scene_at_sunrise_A_cal_2.jpg",
    fullText: `The Mindful Meditation Series is a calming journey inward, perfect for anyone seeking peace and clarity in their daily life. This guided series includes a variety of sessions focused on breath awareness, body scanning, and present-moment focus. Each meditation is designed to help reduce stress, improve mental clarity, and promote emotional well-being. Whether you're new to meditation or looking to deepen your mindfulness practice, this series offers a gentle yet powerful path to inner balance.`,
  },
  {
    slug: "power-vinyasa",
    title: "Power Vinyasa Challenge",
    description: "Challenge yourself with dynamic sequences designed to increase stamina and control.",
    priceEth: 0.03,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/8a8a3ead-4dd9-4523-8266-3b38539898e0/Leonardo_Phoenix_10_A_serene_beginner_yoga_scene_in_a_bright_m_1.jpg",
    fullText: `The Power Vinyasa Challenge is an energizing program crafted for those ready to push their physical and mental limits. Featuring dynamic, sweat-inducing sequences, this course builds stamina, control, and body awareness through intense flows. It's ideal for intermediate to advanced practitioners looking to boost strength, enhance flexibility, and improve coordination. Prepare to move, breathe, and grow stronger with every session.`,
  },
  {
    slug: "yin-deep-release",
    title: "Yin Deep Release",
    description: "Stretch, relax and go deep with this restorative yin yoga program.",
    priceEth: 0.02,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/245dc6ab-9f28-4be0-9328-4d2f1ad9c618/Leonardo_Phoenix_10_A_serene_yoga_scene_featuring_a_woman_in_a_2.jpg",
    fullText: `Yin Deep Release is a restorative yoga program designed to help you slow down, release tension, and connect deeply with your body. Through long-held passive poses, this series targets the connective tissues—ligaments, joints, and fascia—to improve mobility and encourage deep relaxation. Ideal for winding down after a busy day or balancing an active lifestyle, each session offers a quiet space for introspection, healing, and stillness.`,
  },
  {
    slug: "full-access-bundle",
    title: "Full Access Bundle",
    description: "Get lifetime access to all current and future yoga content in one bundle.",
    priceEth: 0.07,
    imageUrl: "https://cdn.leonardo.ai/users/e788e1ef-57cd-49bc-b46c-9bed2d234802/generations/8a8a3ead-4dd9-4523-8266-3b38539898e0/Leonardo_Phoenix_10_A_serene_beginner_yoga_scene_in_a_bright_m_1.jpg",
    fullText: `The Full Access Bundle is your all-in-one ticket to a complete yoga journey. With lifetime access to all current and future courses, you’ll never miss out on new content, updates, or exclusive sessions. Whether you're a beginner, intermediate, or advanced practitioner, this bundle offers unmatched flexibility and value—empowering you to grow, explore, and deepen your practice at your own pace, anytime, anywhere.`,
  },
]

export default products
