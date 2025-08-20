import React, { useEffect, useState } from "react";
import { Mail, Linkedin, Github, FileText, Sun, Moon, Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "your_service_id",
      "your_template_id",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "pkhatti17@gmail.com"
      },
      "your_user_id"
    ).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      () => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-gray-100" : "min-h-screen bg-gray-50 text-gray-900"}>
      <header className={darkMode ? "bg-gray-800 shadow-md sticky top-0 z-10" : "bg-white shadow-md sticky top-0 z-10"}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pankaj Khatti</h1>
          <nav className="space-x-4 hidden md:flex">
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
            <a href="#education" onClick={(e) => handleScroll(e, "education")}>Education</a>
            <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>Experience</a>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a>
            <a href="#achievements" onClick={(e) => handleScroll(e, "achievements")}>Achievements</a>
            <a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")}>Testimonials</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
            <a href="/Pankaj_Khatti_Resume.pdf" download="Pankaj_Khatti_Resume.pdf" className="ml-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-1">
              <FileText size={16}/> Download Resume
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
            </button>
            <button className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22}/> : <Menu size={22}/>} 
            </button>
          </div>
        </div>
      </header>

      <motion.section id="contact" className="max-w-4xl mx-auto py-16 px-6 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 rounded border" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 rounded border" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full p-2 rounded border h-32"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
        <div className="mt-6">
          <p>Email: <a href="mailto:pkhatti17@gmail.com" className="text-blue-600">pkhatti17@gmail.com</a></p>
          <p>Phone: +91 9460177451</p>
          <p>
            <a href="https://www.linkedin.com/in/pankaj-khatti-967233150" target="_blank" className="text-blue-600">LinkedIn</a> | {" "}
            <a href="https://github.com/Pankajkhatti" target="_blank" className="text-blue-600">GitHub</a> | {" "}
            <a href="/Pankaj_Khatti_Resume.pdf" download="Pankaj_Khatti_Resume.pdf" className="text-blue-600">Resume</a>
          </p>
        </div>
      </motion.section>

      <footer className={darkMode ? "bg-gray-800 text-gray-300 py-6" : "bg-gray-200 text-gray-700 py-6"}>
        <div className="max-w-4xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Pankaj Khatti. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="mailto:pkhatti17@gmail.com"><Mail size={20}/></a>
            <a href="https://www.linkedin.com/in/pankaj-khatti-967233150" target="_blank"><Linkedin size={20}/></a>
            <a href="https://github.com/Pankajkhatti" target="_blank"><Github size={20}/></a>
            <a href="/Pankaj_Khatti_Resume.pdf" download="Pankaj_Khatti_Resume.pdf"><FileText size={20}/></a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button 
            onClick={scrollToTop} 
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 hover:bg-indigo-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [1, 1.1, 1] }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
