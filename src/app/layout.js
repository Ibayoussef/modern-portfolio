import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Ismail Bayoussef's Portfolio",
  description: "I am a front-end developer with 5+ years of experience specializing in React. I have a strong foundation in HTML, CSS, and JavaScript and have worked on numerous projects, leveraging React to create dynamic and responsive user interfaces.\n\nI excel in building modular and scalable code structures, implementing efficient state management, and optimizing application performance. My expertise extends to other front-end technologies such as Redux, Angular, and Vue.js.\n\nCollaboration and effective communication are essential to my work. I enjoy working in cross-functional teams, collaborating with designers, back-end developers, and stakeholders to deliver high-quality solutions.\n\nI am a lifelong learner, staying updated with industry trends through conferences and online courses. I also contribute to the developer community through technical blog posts and open-source projects.\n\nLet's connect and create exceptional web experiences together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
