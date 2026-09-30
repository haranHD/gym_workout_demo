# UN-BEATEN FITNESS STUDIO — Premium Website Demo

A premium, modern, fully responsive demo website designed and built for **UN-BEATEN FITNESS STUDIO** (Unisex Gym & Fitness Studio).

---

## 🏋️‍♂️ Brand Profile & Aesthetic

- **Brand Style**: Powerful, bold, balanced masculine/feminine, modern fitness brand.
- **Palette**: Pitch Black (`#070709`), Deep Charcoal (`#0d0e13`), Metallic Gold/Yellow (`#EAB308`, `#F59E0B`, `#FDE047`), Crisp White typography.
- **Typography**: Athletic Bold Condensed Display (`Oswald`) paired with Geometric Modern Body (`Montserrat`).
- **Core Philosophy**: "Train Hard. Stay Consistent. Become Un-Beaten."
- **Integrity Guarantee**: Zero invented reviews, zero fake statistics, zero fabricated certifications, zero made-up pricing.

---

## 📱 Features & Website Architecture

1. **Top Notice Bar**: Displays real-time studio hiring notice and proposal badge with quick navigation to Careers.
2. **Navbar**:
   - Metallic gold emblem logo with bold typography.
   - Smooth navigation links with active scroll highlights (Home, About, Programs, Trainers, Gallery, Careers, Contact).
   - "HIRING" badge on Careers link.
   - Quick phone link (`7338981221`).
   - "JOIN NOW" CTA.
   - Mobile-responsive hamburger menu with animated drawer and backdrop blur.
3. **Hero Section**:
   - Atmospheric full-screen fitness imagery with dark vignette overlay and subtle radial gold glow.
   - Headline: *"BUILD YOUR STRONGEST SELF."*
   - Subheading: *"Train harder. Move stronger. Become Un-Beaten."*
   - Supporting text: *"Professional fitness training in a motivating environment designed to help you build strength, confidence and consistency."*
   - Dual action buttons: "JOIN NOW", "CONTACT US", plus direct "WHATSAPP" button.
   - Secondary identifier: `UNISEX FITNESS STUDIO`.
   - Feature highlight cards: Strength, Fitness Conditioning, Personal Guidance, Unisex Culture.
4. **About Section**:
   - Heading: *"MORE THAN A GYM. IT'S A FITNESS FAMILY."*
   - Unisex gym focus emphasizing consistency, supportive environment, and goal attainment.
   - 4 Pillars: Strength Training, Fitness Training, Personal Guidance, Supportive Environment.
   - Framed high-contrast studio photography with gold border accent.
5. **Programs Section ("Train with Purpose")**:
   - 4 Track Cards:
     - `01 — STRENGTH TRAINING`: Build strength and improve overall fitness.
     - `02 — FITNESS TRAINING`: Structured workouts designed to improve fitness and conditioning.
     - `03 — PERSONAL TRAINING`: Individual guidance based on personal fitness goals.
     - `04 — WEIGHT MANAGEMENT`: Training support for people working toward healthier body composition.
   - Hover animations, track details, and honest disclaimers (no medical or guaranteed weight loss claims).
6. **Why Choose Us ("Why Un-Beaten?")**:
   - 5 Feature Cards:
     1. Train with Purpose
     2. Professional Guidance
     3. Unisex Environment
     4. Consistency & Discipline
     5. Fitness Community
   - Strictly no fake statistics.
7. **Trainers Section ("Train with the Right Guidance")**:
   - 3 Generic Trainer Cards:
     - Fitness Trainer (Functional Conditioning & General Fitness)
     - Strength Trainer (Resistance Training & Power Development)
     - Women's Fitness Trainer (Tailored Coaching & Dedicated Female Guidance)
   - Marked clearly as placeholder profiles without fake names or certs.
   - Banner callout: *"Interested in joining our team?"* linking directly to the Careers section.
8. **Membership / Join Section ("Ready to Become Un-Beaten?")**:
   - High-conversion CTA section.
   - Direct pre-filled WhatsApp button opening:
     `https://wa.me/917338981221?text=Hi,%20I'm%20interested%20in%20joining%20Un-Beaten%20Fitness%20Studio.%20I%20would%20like%20to%20know%20about%20your%20membership%20plans%20and%20timings.`
   - Strictly no fake pricing shown.
9. **Gallery Section**:
   - Categories: `ALL`, `GYM`, `TRAINING`, `FITNESS`, `COMMUNITY`.
   - Interactive category filter tabs.
   - Hover zoom effect with title overlays.
   - Fullscreen **Lightbox Modal** with previous/next keyboard navigation and image preview.
   - Note for simple sync with the official Instagram feed (`@un_beatenfitnessstudio`).
10. **Careers Section (Priority Hiring Notice)**:
    - Dedicated section based entirely on the business promotional poster:
      - **Heading**: "JOIN OUR TEAM"
      - **Subheading**: "WE ARE HIRING — FITNESS TRAINER"
      - **Requirements**:
        - 2 years experience preferred/required as stated by the business
        - Any recognized fitness certification
        - Tamil & English communication
      - **What We Offer**:
        - Accommodation Provided
        - Food Provided
        - Permanent Position
        - Good Salary
        - Growth & Career Opportunity
      - **Working Hours**:
        - Morning Trainer: 5:00 AM – 10:00 AM
        - Evening Trainer: 5:00 PM – 9:00 PM
        - Women's Trainer: 10:00 AM – 8:00 PM
      - Direct "APPLY NOW" button opening WhatsApp with pre-filled message:
        `"Hi, I'm interested in the Fitness Trainer position at Un-Beaten Fitness Studio. I would like to know more about the opportunity."`
      - "Call to Inquire" button: `7338981221`.
11. **Location Section ("Find Us")**:
    - Address details: `60 Ft Road, Kannagi Nagar area`.
    - Clear note: *"Exact location details will be updated by the business."*
    - Interactive dark-styled Google Maps preview card.
    - Quick phone and Instagram action cards.
12. **Contact Section ("Let's Get Started")**:
    - Contact cards: Call Us (`7338981221`), WhatsApp (Chat with us), Instagram (`@un_beatenfitnessstudio`).
    - Interactive Enquiry Form (Name, Phone, Message) with instant UI success state and direct option to forward message to WhatsApp.
13. **Footer**:
    - Logo, brand tagline, quick links, visit & connect details, copyright © 2026.
14. **Interactive Extras**:
    - **Floating WhatsApp Button**: High-conversion floating action button with live chat tooltip.
    - **Join Now Interactive Modal**: Allows prospective members to choose their goal and shift timing, immediately preparing a customized WhatsApp inquiry.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 (with custom `@theme` configuration, custom gold gradients, metallic glows, and sleek dark scrollbars)
- **Icons**: Lucide React + custom SVG brand icons
- **Fonts**: Google Fonts (`Oswald` & `Montserrat`)
- **Responsive**: Fully optimized for Mobile, Tablet, Laptop, and Desktop screens.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Run Linter
```bash
npm run lint
```

---

## ⚙️ Customization & Updating Content

All business details, phone numbers, shift timings, requirements, and gallery items are stored in one single configuration file:
- [`src/data/gymData.js`](file:///home/haran/SolveXaTech/gym_workout/src/data/gymData.js)

To update the phone number, Instagram handle, gallery photos, or address once confirmed by the owner, simply edit `src/data/gymData.js`.
