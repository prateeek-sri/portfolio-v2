# 🌟 Portfolio v2 — by Prateek Kumar Srivatsav

Welcome to my personal **Portfolio v2**, a modern, animated, and responsive portfolio website built using the **Next.js App Router** and **Tailwind CSS**.  
This portfolio showcases my journey, skills, projects, and a bit of my personality — from design and development to my love for anime and psychology 🌀  

---

## 🚀 Tech Stack

**Frontend Framework:**  
- [Next.js 14+ (App Router)](https://nextjs.org/)  
- [React 18+](https://react.dev/)  

**Styling & Animations:**  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Framer Motion](https://www.framer.com/motion/) for smooth animations  
- [Lucide React](https://lucide.dev/) icons  
- [Shadcn/UI](https://ui.shadcn.com/) for beautiful reusable components  

**Special Effects:**  
- Custom gradient SVG headers and footers  
- Draggable anime-themed cards using motion API  
- Smooth transitions and parallax-like motion  

**Deployment:**  
- [Vercel](https://vercel.com/) (recommended for easiest setup)

---

## ✨ Features

✅ Fully responsive modern UI  
✅ Animated page transitions  
✅ Gradient header and footer SVGs  
✅ Draggable anime-themed cards  
✅ About, Projects, and Contact sections  
✅ Dynamic metadata and favicon  
✅ Clean folder structure and reusable components  
✅ SEO optimized with Next.js metadata  
✅ Lightning-fast loading and routing  

---

## 🧠 Inspiration

The portfolio is a reflection of who I am — a mix of creativity, logic, and passion.  
From coding and problem-solving to design and anime, this site represents my world.  

> *"A person grows up when they're able to overcome hardships. Protection is important, but there are some things a person must learn on their own."*  
> — **Jiraiya**

---

## 🧩 Folder Structure

```
portfolio-v2/
│
├── app/
│   ├── about/
│   │   └── page.js          # About page (includes draggable cards)
│   ├── layout.js            # Root layout with Header/Footer
│   ├── globals.css          # Global styles (Tailwind + custom)
│   └── page.js              # Home page
│
├── components/
│   ├── ui/
│   │   └── draggable-card.jsx  # Reusable draggable card component
│   ├── header-gradient.svg
│   └── footer-gradient.svg
│
├── public/
│   ├── favicon.png          # Custom favicon
│   ├── images/              # Project & anime images
│
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🧰 Installation & Setup Guide

Follow these steps to run the project locally 👇

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/portfolio-v2.git
```

### 2️⃣ Navigate into the project
```bash
cd portfolio-v2
```

### 3️⃣ Install dependencies
```bash
npm install
```

*(Make sure you have Node.js 18+ installed)*

### 4️⃣ Run the development server
```bash
npm run dev
```

Then open **http://localhost:3000** in your browser 🎉  

### 5️⃣ Build for production
```bash
npm run build
npm start
```

---

## 🖼️ Favicon Setup (if not working)

Make sure you have your custom favicon inside `/public` and named as:
```
/public/favicon.png
```

Then in `app/layout.js`, ensure:
```jsx
export const metadata = {
  title: "Prateek Kumar Srivatsav",
  description: "Personal portfolio showcasing my work, skills, and interests.",
  icons: {
    icon: "/favicon.png",
  },
};
```

---

## 🧑‍💻 Contributing

If you’d like to contribute or suggest improvements:
1. Fork the repo  
2. Create a new branch (`feature/your-feature`)  
3. Commit your changes  
4. Push to your branch  
5. Create a pull request  

---

## 🌐 Deployment

To deploy easily using **Vercel**:
1. Push your project to GitHub  
2. Go to [vercel.com](https://vercel.com)  
3. Import your repository  
4. Click *Deploy* — and done 🚀  

---

## 📬 Contact Me

Feel free to reach out for collaborations or discussions:  
📧 **Email:** [your-email@example.com]  
💼 **LinkedIn:** [your-linkedin-link]  
🐙 **GitHub:** [your-github-link]  

---

## 💫 Credits

- Design & Development: **Prateek Kumar Srivatsav**  
- Framework: **Next.js**  
- Icons: **Lucide React**  
- Components: **Shadcn/UI**  
- Animations: **Framer Motion**

---

## 🧡 Acknowledgements

Thanks to everyone who supported and inspired me throughout this journey —  
especially to my mentors, friends, and the anime characters who kept me motivated to **“believe in myself”**.

> *"When people are protecting something truly special to them, they truly can become... as strong as they can be."*  
> — **Naruto Uzumaki**
