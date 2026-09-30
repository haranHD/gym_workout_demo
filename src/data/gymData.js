// Centralized data for UN-BEATEN FITNESS STUDIO demo website
// Strictly follows the business requirements: no fake certifications, no fake stats, no fake pricing.

export const BUSINESS_INFO = {
  name: "UN-BEATEN FITNESS STUDIO",
  type: "Unisex Fitness Studio",
  tagline: "Train Hard. Stay Consistent. Become Un-Beaten.",
  subheading: "Train harder. Move stronger. Become Un-Beaten.",
  heroSupport: "Professional fitness training in a motivating environment designed to help you build strength, confidence and consistency.",
  phone: "7338981221",
  phoneFormatted: "+91 73389 81221",
  whatsappNumber: "917338981221",
  instagram: "@un_beatenfitnessstudio",
  instagramUrl: "https://www.instagram.com/un_beatenfitnessstudio",
  location: {
    road: "60 Ft Road",
    area: "Kannagi Nagar area",
    note: "Exact location details will be updated by the business.",
  },
  whatsappJoinMessage: "Hi, I'm interested in joining Un-Beaten Fitness Studio. I would like to know about your membership plans and timings.",
  whatsappCareersMessage: "Hi, I'm interested in the Fitness Trainer position at Un-Beaten Fitness Studio. I would like to know more about the opportunity.",
};

export const PROGRAMS = [
  {
    id: "01",
    title: "STRENGTH TRAINING",
    description: "Build strength and improve overall fitness through structured resistance training and progressive overload.",
    icon: "Dumbbell",
    focus: ["Free Weights & Barbells", "Functional Compound Lifts", "Core Stability"],
    badge: "Core Pillar",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "02",
    title: "FITNESS TRAINING",
    description: "Structured workouts designed to improve fitness and conditioning for everyday energy and athletic performance.",
    icon: "Zap",
    focus: ["High-Intensity Conditioning", "Agility & Mobility", "Endurance Building"],
    badge: "Conditioning",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "03",
    title: "PERSONAL TRAINING",
    description: "Individual guidance based on personal fitness goals, tailored technique coaching, and scheduled accountability.",
    icon: "UserCheck",
    focus: ["1-on-1 Dedicated Attention", "Customized Routine", "Technique & Form Correction"],
    badge: "Personalized",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "04",
    title: "WEIGHT MANAGEMENT",
    description: "Training support for people working toward healthier body composition in a supportive, consistent environment.",
    icon: "Activity",
    focus: ["Caloric Burn Conditioning", "Body Composition Focus", "Sustainable Lifestyle Support"],
    badge: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: "TRAIN WITH PURPOSE",
    description: "Structured and focused training designed around progressive fitness principles, not guesswork.",
    icon: "Target",
  },
  {
    id: 2,
    title: "PROFESSIONAL GUIDANCE",
    description: "Support from fitness trainers who help maintain proper form and disciplined execution.",
    icon: "Award",
  },
  {
    id: 3,
    title: "UNISEX ENVIRONMENT",
    description: "A welcoming, respectful, and motivating training environment open to all fitness enthusiasts.",
    icon: "Users",
  },
  {
    id: 4,
    title: "CONSISTENCY & DISCIPLINE",
    description: "Build sustainable fitness habits that integrate seamlessly into your day-to-day lifestyle.",
    icon: "Flame",
  },
  {
    id: 5,
    title: "FITNESS COMMUNITY",
    description: "Train in an energetic, encouraging community where everyone pushes each other to improve.",
    icon: "HeartHandshake",
  },
];

export const TRAINERS = [
  {
    id: 1,
    role: "Fitness Trainer",
    specialty: "Functional Conditioning & General Fitness",
    tag: "Core Team",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    description: "Guides members through structured movement drills, functional endurance, and daily training consistency.",
    status: "Placeholder Profile — Details to be updated by business",
  },
  {
    id: 2,
    role: "Strength Trainer",
    specialty: "Resistance Training & Power Development",
    tag: "Strength Specialist",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80",
    description: "Specializes in progressive resistance training, barbell technique, and muscle conditioning.",
    status: "Placeholder Profile — Details to be updated by business",
  },
  {
    id: 3,
    role: "Women's Fitness Trainer",
    specialty: "Tailored Coaching & Dedicated Female Guidance",
    tag: "Women's Shift Coach",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    description: "Dedicated trainer providing targeted fitness instruction and encouraging support during specialized hours.",
    status: "Placeholder Profile — Details to be updated by business",
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "GYM",
    title: "Strength & Free Weights Zone",
    subtitle: "Dumbbell racks, barbells and adjustable benches",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    category: "TRAINING",
    title: "Heavy Barbell Execution",
    subtitle: "Dedicated space for deadlifts and compound lifts",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    category: "FITNESS",
    title: "Dynamic Battle Ropes",
    subtitle: "High-intensity conditioning and stamina work",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    category: "GYM",
    title: "Precision Dumbbell Rack",
    subtitle: "Calibrated weights for progressive overload",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    category: "TRAINING",
    title: "Calisthenics & Pull-Up Bar",
    subtitle: "Bodyweight control and upper-body strength",
    image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    category: "COMMUNITY",
    title: "Partner Motivation",
    subtitle: "Pushing limits together in a unisex studio",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    category: "FITNESS",
    title: "Agility & Core Training",
    subtitle: "Functional movement for all fitness levels",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    category: "COMMUNITY",
    title: "Supportive Training Atmosphere",
    subtitle: "Encouraging environment built on consistency",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80",
  },
];

export const CAREERS_DATA = {
  badge: "ACTUAL HIRING NOTICE",
  heading: "JOIN OUR TEAM",
  subheading: "WE ARE HIRING — FITNESS TRAINER",
  intro: "Un-Beaten Fitness Studio is expanding its training roster. We are looking for passionate, committed fitness trainers to guide our members with discipline and positive energy.",
  requirements: [
    "2 years experience preferred / required as stated by the business",
    "Any recognized fitness certification",
    "Tamil & English communication",
  ],
  offers: [
    "Accommodation Provided",
    "Food Provided",
    "Permanent Position",
    "Good Salary",
    "Growth & Career Opportunity",
  ],
  workingHours: [
    {
      shift: "Morning Trainer",
      time: "5:00 AM – 10:00 AM",
      description: "Guide early morning members and open studio workouts.",
      icon: "Sunrise",
    },
    {
      shift: "Evening Trainer",
      time: "5:00 PM – 9:00 PM",
      description: "Coach high-energy post-work fitness and strength sessions.",
      icon: "Sunset",
    },
    {
      shift: "Women's Trainer",
      time: "10:00 AM – 8:00 PM",
      description: "Dedicated coaching for women's fitness and targeted training sessions.",
      icon: "Clock",
    },
  ],
};
