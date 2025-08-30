"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Menu, X, ExternalLink, Calendar, Briefcase, GraduationCap, Code, Database, Cloud, Wrench, Trophy, Eye, Star, MapPin, Award, Monitor, Server, Layers, Globe, Palette, Cpu } from 'lucide-react';

const resume = {
  name: "Kalai Nithi Guhan M",
  email: "kalaiguhan98@gmail.com",
  phone: "+91 9659119924",
  linkedin: "https://www.linkedin.com/in/kalai-nithi-guhan-m?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/Kalai-nithi-guhan",
  leetcode: "https://leetcode.com/u/kalainithiguhan/",
  tagline: "Aspiring Software Engineer | AI-powered Web Apps | Cloud & Full-Stack",
  objective: "Aspiring software engineer with a strong foundation in Computer Science and hands-on experience in building AI-powered web applications, integrating cloud services, and solving algorithmic problems. Passionate about developing scalable solutions using modern frameworks and tools. Eager to contribute innovative features to product development teams at forward-thinking tech companies.",
  interests: [
    "Web Development (React, Next.js, Firebase, Tailwind CSS, REST APIs)",
    "Computer Vision (OpenCV, MediaPipe, YOLO)",
    "Machine Learning & AI (Deep Learning, Model Deployment, Image Analysis)",
    "Cloud Integration (Firebase, Google Cloud, Real-time DB, Vercel Analytics)",
    "NLP (Text Classification)"
  ],
  education: [
    {
      degree: "B.E. (Computer Science & Engineering)",
      institute: "Dr. Mahalingam College of Engineering and Technology (MCET)",
      location: "Pollachi, Coimbatore",
      year: "July 2027 (expected)",
      cgpa: "8.67 / 10",
      highlights: ["Dean's List", "Academic Excellence Award", "Active in Tech Clubs"]
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institute: "Srinivasa Vidhyalaya Matriculation Higher Secondary School",
      location: "Udumalaipet",
      year: "Mar 2023",
      marks: "539 / 600 (89.3%)",
      highlights: ["Mathematics Topper", "Science Excellence"]
    }
  ],
  skills: {
    frontend: [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 90 },
      { name: "JavaScript", percentage: 88 },
      { name: "React", percentage: 90 },
      { name: "Next.js", percentage: 85 },
      { name: "Tailwind CSS", percentage: 95 }
    ],
    backend: [
      { name: "Node.js", percentage: 80 },
      { name: "Python", percentage: 90 },
      { name: "Java", percentage: 85 },
      { name: "REST APIs", percentage: 85 },
      { name: "Express.js", percentage: 78 }
    ],
    databases: [
      { name: "Firebase Firestore", percentage: 88 },
      { name: "MySQL", percentage: 82 },
      { name: "MongoDB", percentage: 75 },
      { name: "SQLite", percentage: 70 }
    ],
    programming: [
      { name: "Python", percentage: 90 },
      { name: "JavaScript", percentage: 88 },
      { name: "Java", percentage: 85 },
      { name: "C", percentage: 75 },
      { name: "TypeScript", percentage: 80 }
    ],
    tools: [
      { name: "Git", percentage: 90 },
      { name: "VS Code", percentage: 95 },
      { name: "Firebase", percentage: 85 },
      { name: "Vercel", percentage: 90 },
      { name: "Docker", percentage: 65 }
    ],
    aiml: [
      { name: "OpenCV", percentage: 85 },
      { name: "MediaPipe", percentage: 80 },
      { name: "TensorFlow", percentage: 70 },
      { name: "Scikit-learn", percentage: 75 },
      { name: "YOLO", percentage: 78 }
    ]
  },
  projects: [
    {
      title: "Fertilizer Recommendation Web Application",
      period: "May 2025 – Jul 2025",
      description: "Full-stack app that recommends fertilizers based on user input. AI logic lives in a custom /api/analyze route, images are stored in Firebase, and the UI is built with Next.js, React & Tailwind.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Firebase", "Vercel"],
      liveLink: "https://fertilizer-recommendation.vercel.app/",
      githubLink: "https://github.com/Kalai-nithi-guhan",
      featured: true
    },
    {
      title: "Curl Counter using OpenCV",
      period: "2024",
      description: "Computer-vision solution that counts push-ups, squats & biceps curls via webcam using OpenCV + MediaPipe.",
      techStack: ["OpenCV", "MediaPipe", "JavaScript"],
      githubLink: "https://github.com/Kalai-nithi-guhan",
      featured: true
    },
    {
      title: "Traffic Management System",
      period: "2024",
      description: "Detects opposite-lane violations and mobile-phone-while-driving using CCTV footage and OpenCV.",
      techStack: ["OpenCV", "Python"],
      githubLink: "https://github.com/Kalai-nithi-guhant",
      featured: false
    },
    {
      title: "Crime Rate Prediction",
      period: "2024 (ongoing)",
      description: "Predicts crime hot-spots using XGBoost, CatBoost & LightGBM classifiers; sends alerts to police department.",
      techStack: ["Python", "XGBoost", "CatBoost", "LightGBM"],
      githubLink: "https://github.com/Kalai-nithi-guhan",
      featured: true
    }
  ],
  internships: [
    {
      company: "Boredom LLP Technology",
      location: "Bangalore",
      period: "May 2025 – Jul 2025",
      description: "Designed responsive webpages with HTML/CSS/JS, built React components, and integrated Firebase for real-time DB & authentication.",
      achievements: ["Built 5+ responsive web components", "Improved page load time by 40%", "Integrated real-time authentication system"]
    }
  ]
};

const SkillCircle = ({ skill, delay }: { skill: { name: string; percentage: number }, delay: number }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(skill.percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.percentage, delay]);

  const circumference = 2 * Math.PI * 40;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-20 h-20 mb-3">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 90 90">
          <circle
            cx="45"
            cy="45"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            cx="45"
            cy="45"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="text-blue-500 transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">{animatedPercentage}%</span>
        </div>
      </div>
      <span className="text-xs text-gray-300 text-center font-medium group-hover:text-blue-400 transition-colors duration-200">
        {skill.name}
      </span>
    </div>
  );
};

const SkillsCategory = ({ title, skills, icon, color, delay }: { 
  title: string; 
  skills: Array<{ name: string; percentage: number }>; 
  icon: React.ReactNode; 
  color: string;
  delay: number;
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-blue-400">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCircle key={index} skill={skill} delay={delay + index * 100} />
        ))}
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Fix hydration error by using client-only state
  const [dots, setDots] = useState<Array<{
    left: string;
    top: string;
    width: string;
    height: string;
    animationDelay: string;
    animationDuration: string;
    className: string;
  }>>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Add form ref for better form handling
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate dots only on client side
  useEffect(() => {
    const generatedDots = [...Array(60)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 8 + 3}px`,
      height: `${Math.random() * 8 + 3}px`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${Math.random() * 4 + 3}s`,
      className: `absolute rounded-full animate-pulse ${
        i % 3 === 0 ? 'bg-blue-500/10' : i % 3 === 1 ? 'bg-purple-500/10' : 'bg-pink-500/10'
      }`
    }));
    setDots(generatedDots);
  }, []);

  // Fixed email submission with better Formspree handling
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xovnjgda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact - Message from ${formData.name}`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Formspree error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  const skillsCategories = [
    {
      title: "Frontend Development",
      skills: resume.skills.frontend,
      icon: <Monitor size={24} className="text-white" />,
      color: "blue",
      delay: 0
    },
    {
      title: "Backend Development", 
      skills: resume.skills.backend,
      icon: <Server size={24} className="text-white" />,
      color: "green",
      delay: 200
    },
    {
      title: "Databases",
      skills: resume.skills.databases,
      icon: <Database size={24} className="text-white" />,
      color: "purple",
      delay: 400
    },
    {
      title: "Programming Languages",
      skills: resume.skills.programming,
      icon: <Code size={24} className="text-white" />,
      color: "orange",
      delay: 600
    },
    {
      title: "Tools & Technologies",
      skills: resume.skills.tools,
      icon: <Wrench size={24} className="text-white" />,
      color: "cyan",
      delay: 800
    },
    {
      title: "AI & Machine Learning",
      skills: resume.skills.aiml,
      icon: <Cpu size={24} className="text-white" />,
      color: "pink",
      delay: 1000
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              KNG
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button 
              className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Fixed Animations */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Fixed Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30">
          <div className="absolute inset-0">
            {dots.map((dot, i) => (
              <div
                key={i}
                className={dot.className}
                style={{
                  left: dot.left,
                  top: dot.top,
                  width: dot.width,
                  height: dot.height,
                  animationDelay: dot.animationDelay,
                  animationDuration: dot.animationDuration
                }}
              />
            ))}
          </div>
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Profile Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 group-hover:scale-105 transition-transform duration-300 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://i.ibb.co/VW4Lvr5x/kalaiimg.jpg" 
                      alt="Kalai Nithi Guhan M"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl -z-10 group-hover:blur-3xl transition-all duration-300 animate-pulse"></div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl animate-bounce shadow-lg shadow-blue-500/50" style={{animationDelay: '0s'}}>
                  <Code size={24} className="text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl animate-bounce shadow-lg shadow-purple-500/50" style={{animationDelay: '1s'}}>
                  <Database size={24} className="text-white" />
                </div>
                <div className="absolute top-1/2 -left-10 bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-2xl animate-bounce shadow-lg shadow-pink-500/50" style={{animationDelay: '2s'}}>
                  <Cloud size={24} className="text-white" />
                </div>
                <div className="absolute top-10 -right-2 bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-2xl animate-bounce shadow-lg shadow-green-500/50" style={{animationDelay: '3s'}}>
                  <Globe size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="text-sm text-blue-400 font-medium mb-2 animate-pulse">👋 Hello, I&apos;m</div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    {resume.name}
                  </span>
                </h1>
                <div className="h-8 overflow-hidden">
                  <div className="animate-pulse">
                    <p className="text-xl md:text-2xl text-gray-300 font-medium">
                      {resume.tagline}
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg lg:max-w-none">
                {resume.objective}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 animate-pulse"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-gray-900 hover:shadow-lg hover:shadow-blue-400/25 transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </a>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {[
                  { href: resume.github, icon: <Github size={24} />, label: "GitHub", color: "hover:text-gray-300", bg: "hover:bg-gray-700" },
                  { href: resume.linkedin, icon: <Linkedin size={24} />, label: "LinkedIn", color: "hover:text-blue-400", bg: "hover:bg-blue-900/50" },
                  { href: resume.leetcode, icon: <Trophy size={24} />, label: "LeetCode", color: "hover:text-yellow-400", bg: "hover:bg-yellow-900/50" },
                  { href: `mailto:${resume.email}`, icon: <Mail size={24} />, label: "Email", color: "hover:text-green-400", bg: "hover:bg-green-900/50" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className={`text-gray-400 ${social.color} ${social.bg} p-3 rounded-xl transition-all duration-200 transform hover:scale-110 hover:-translate-y-1`} 
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 max-w-sm mx-auto lg:mx-0">
                <div className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-400 mb-1">8.67</div>
                  <div className="text-xs text-gray-400">CGPA</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-400 mb-1">4+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-xl border border-pink-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-pink-400 mb-1">1+</div>
                  <div className="text-xs text-gray-400">Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate software engineering student with a strong foundation in computer science and hands-on experience building AI-powered web applications. Currently pursuing my B.E. in Computer Science at MCET with a CGPA of 8.67/10.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech has led me to explore various domains including web development, computer vision, and machine learning. I love creating solutions that combine cutting-edge technology with practical applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">8.67</div>
                  <div className="text-gray-400">Current CGPA</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">Areas of Interest</h3>
              {resume.interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border-l-4 border-blue-400 hover:border-purple-400 transition-colors duration-300 transform hover:translate-x-2"
                >
                  <p className="text-gray-300">{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section with Categories */}
      <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 50% 80%, #EC4899 0%, transparent 50%)`,
            backgroundSize: '40% 40%'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              My comprehensive skill set spans across multiple domains of software development, from frontend design to backend architecture, databases, and emerging technologies like AI/ML.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsCategories.map((category, index) => (
              <SkillsCategory
                key={index}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                color={category.color}
                delay={category.delay}
              />
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skill Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                <div className="text-sm text-gray-400">Frontend Technologies</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/20">
                <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">Backend Technologies</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                <div className="text-sm text-gray-400">Database Systems</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-xl border border-pink-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">AI/ML Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Here are some of my recent projects that showcase my skills in web development, AI, computer vision, and full-stack development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {resume.projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-500/40 backdrop-blur-sm group"
              >
                {/* Project Header with Enhanced Design */}
                <div className="h-56 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <div key={i} className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-bold">{tech.charAt(0)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl">
                      <Code size={32} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-300 font-medium bg-gray-800/50 px-3 py-1 rounded-full">{project.period}</p>
                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold mt-3 shadow-lg">
                      ⭐ Featured Project
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-900/40 text-blue-300 px-3 py-2 rounded-full text-sm border border-blue-500/30 hover:bg-blue-800/60 hover:scale-105 transition-all duration-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-green-500/25"
                      >
                        <Eye size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-gray-500/25"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resume.projects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/40 rounded-xl shadow-xl overflow-hidden hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-purple-500/30 backdrop-blur-sm group"
              >
                <div className="h-40 bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code size={24} className="text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded-lg text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {resume.internships.map((internship, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 border border-gray-700/50 rounded-2xl shadow-2xl p-8 mb-8 hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30 backdrop-blur-sm ml-16 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-200 mb-1">{internship.company}</h3>
                          <div className="flex items-center text-gray-400 text-sm mb-2">
                            <MapPin size={14} className="mr-1" />
                            {internship.location}
                          </div>
                        </div>
                        <span className="text-sm text-gray-400 flex items-center bg-gray-800/50 px-3 py-1 rounded-full">
                          <Calendar size={14} className="mr-1" />
                          {internship.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed mb-4">{internship.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {internship.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center text-sm text-gray-300">
                              <Star size={12} className="text-yellow-400 mr-2 flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            My academic background and achievements that shaped my technical foundation.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              
              {resume.education.map((edu, index) => (
                <div key={index} className="relative mb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  <div className="ml-20">
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-2xl shadow-2xl p-8 hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30 backdrop-blur-sm transform hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <GraduationCap size={28} className="text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-200 mb-2">{edu.degree}</h3>
                              <p className="text-lg text-gray-300 mb-2">{edu.institute}</p>
                              <div className="flex items-center text-gray-400 mb-3">
                                <MapPin size={16} className="mr-2" />
                                {edu.location}
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="inline-block bg-blue-900/40 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium border border-blue-500/30 mb-2">
                                {edu.year}
                              </span>
                              <div>
                                {edu.cgpa && (
                                  <div className="text-2xl font-bold text-green-400 mb-1">CGPA: {edu.cgpa}</div>
                                )}
                                {edu.marks && (
                                  <div className="text-xl font-semibold text-green-400">{edu.marks}</div>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Highlights & Achievements:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {edu.highlights.map((highlight, hlIndex) => (
                                <div key={hlIndex} className="flex items-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 px-4 py-2 rounded-lg border border-purple-500/20">
                                  <Award size={16} className="text-yellow-400 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-gray-300">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Ready to discuss your next project? I&apos;m always open to new opportunities and interesting conversations about technology.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-200">Get In Touch</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Whether you&apos;re looking to hire, collaborate, or just want to say hello, I&apos;d love to hear from you. Let&apos;s create something extraordinary together!
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail size={20} />,
                    title: "Email",
                    value: resume.email,
                    href: `mailto:${resume.email}`,
                    color: "blue",
                    bg: "bg-blue-900/40",
                    border: "border-blue-500/30",
                    text: "text-blue-400"
                  },
                  {
                    icon: <Phone size={20} />,
                    title: "Phone",
                    value: resume.phone,
                    href: `tel:${resume.phone}`,
                    color: "green",
                    bg: "bg-green-900/40",
                    border: "border-green-500/30",
                    text: "text-green-400"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className={`w-12 h-12 ${contact.bg} ${contact.border} border rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <span className={contact.text}>{contact.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200">{contact.title}</p>
                      <a href={contact.href} className={`${contact.text} hover:underline transition-colors duration-200`}>
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
                
                <div className="flex space-x-4 pt-4">
                  {[
                    { href: resume.github, icon: <Github size={20} />, title: "GitHub", color: "hover:bg-gray-600 hover:text-white", bg: "bg-gray-700 border-gray-600 text-gray-300" },
                    { href: resume.linkedin, icon: <Linkedin size={20} />, title: "LinkedIn", color: "hover:bg-blue-800 hover:text-white", bg: "bg-blue-900/40 border-blue-500/30 text-blue-400" },
                    { href: resume.leetcode, icon: <Trophy size={20} />, title: "LeetCode", color: "hover:bg-yellow-800 hover:text-white", bg: "bg-yellow-900/40 border-yellow-500/30 text-yellow-400" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.bg} border rounded-xl flex items-center justify-center ${social.color} transition-all duration-200 transform hover:scale-110 hover:-translate-y-1`} 
                      title={social.title}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 border border-gray-700/50 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-200">Send me a message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/40 border border-green-500/30 rounded-xl text-green-300">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Thank you for your message! I&apos;ll get back to you soon.
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/40 border border-red-500/30 rounded-xl text-red-300">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">!</span>
                    </div>
                    Please fill in all fields or try again later.
                  </div>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-950 to-gray-900 border-t border-gray-800 text-white py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #3B82F6 0%, transparent 70%), linear-gradient(-45deg, #8B5CF6 0%, transparent 70%)`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {resume.name}
            </h3>
            <p className="text-gray-400 mb-6 text-lg">{resume.tagline}</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { href: resume.github, icon: <Github size={24} />, title: "GitHub" },
                { href: resume.linkedin, icon: <Linkedin size={24} />, title: "LinkedIn" },
                { href: resume.leetcode, icon: <Trophy size={24} />, title: "LeetCode" },
                { href: `mailto:${resume.email}`, icon: <Mail size={24} />, title: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-125 hover:-translate-y-1" 
                  title={social.title}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 {resume.name}. Crafted with React & Tailwind CSS.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                &ldquo;Building the future, one line of code at a time.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
