import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Star,
  Users,
  BookOpen,
  Target,
  Award,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const Landing = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const videoRef = useRef(null);

  // Theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Features data
  const features = [
    {
      id: 0,
      title: "AI-Powered Practice",
      description:
        "Get personalized practice questions powered by advanced AI algorithms.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      id: 1,
      title: "Interactive Learning",
      description:
        "Engage with interactive content that adapts to your learning style.",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Progress Tracking",
      description:
        "Monitor your improvement with detailed analytics and insights.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Community Support",
      description: "Connect with fellow learners and share your journey.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Expert Guidance",
      description: "Learn from industry experts with years of experience.",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  // Steps data for "How It Works"
  const steps = [
    {
      number: 1,
      title: "Sign Up & Assess",
      description: "Create your account and take our initial assessment",
    },
    {
      number: 2,
      title: "Get Personalized Plan",
      description: "Receive a customized learning path based on your goals",
    },
    {
      number: 3,
      title: "Practice & Learn",
      description: "Engage with interactive content and AI-powered questions",
    },
    {
      number: 4,
      title: "Track Progress",
      description: "Monitor your improvement and achieve your goals",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 0,
      name: "Sarah Johnson",
      role: "Software Engineer",
      text: "PrepSmartly helped me land my dream job at a top tech company. The AI-powered practice was incredibly effective!",
      avatar: "SJ",
    },
    {
      id: 1,
      name: "Michael Chen",
      role: "Data Scientist",
      text: "The personalized learning path and progress tracking features made all the difference in my preparation.",
      avatar: "MC",
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Product Manager",
      text: "I loved the interactive content and community support. It made learning enjoyable and effective.",
      avatar: "ER",
    },
  ];

  // Auto-play steps
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigateFeatures = (direction) => {
    if (direction === "prev") {
      setCurrentFeature(
        (prev) => (prev - 1 + features.length) % features.length
      );
    } else {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }
  };

  const getFeaturePosition = (index) => {
    const diff = index - currentFeature;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(features.length - 1)) return "right";
    if (diff === -1 || diff === features.length - 1) return "left";
    return "hidden";
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-background text-light" : "bg-background text-dark"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isDark
            ? "bg-gray-900/80 backdrop-blur-md border-gray-700"
            : "bg-white/80 backdrop-blur-md border-gray-200"
        } border-b shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 rounded-lg ${
                  isDark ? "bg-primary-start" : "bg-primary-start"
                } flex items-center justify-center`}
              >
                <span className="text-light font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-primary">
                PrepSmartly
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-primary transition-colors"
              >
                How It Works
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Auth Buttons */}
              <button
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Sign In
              </button>
              <button className="px-4 py-2 bg-primary text-light rounded-lg hover:bg-primary-hover transition-all transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Master Your <span className="text-primary">Future</span> with
                AI-Powered Learning
              </h1>

              <p
                className={`text-xl leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Transform your career with personalized practice, expert
                guidance, and cutting-edge AI technology. Join thousands of
                successful learners who achieved their dreams with PrepSmartly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-light rounded-lg font-semibold hover:bg-primary-hover transition-all transform hover:scale-105 shadow-lg">
                  Get Started
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
                <button
                  className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                    isDark
                      ? "border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
                      : "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Right Column - 3D Model Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div
                className={`w-96 h-96 rounded-2xl border-4 border-dashed flex items-center justify-center ${
                  isDark
                    ? "border-gray-600 bg-gray-800/50"
                    : "border-gray-300 bg-white/50"
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <Target className="w-8 h-8 text-light" />
                  </div>
                  <p
                    className={`text-lg font-medium ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    3D Robo Model Placeholder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`py-20 ${isDark ? "bg-gray-800/30" : "bg-white/30"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Features</h2>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Discover what makes PrepSmartly the perfect learning companion
            </p>
          </motion.div>

          {/* Feature Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex justify-center items-center space-x-8 py-8">
              {features.map((feature, index) => {
                const position = getFeaturePosition(index);
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity:
                        position === "hidden"
                          ? 0
                          : position === "center"
                          ? 1
                          : 0.6,
                      scale: position === "center" ? 1 : 0.8,
                      x:
                        position === "left"
                          ? -100
                          : position === "right"
                          ? 100
                          : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`${
                      position === "hidden" ? "hidden" : "block"
                    } w-80 h-64 p-6 rounded-2xl shadow-lg ${
                      isDark
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-white border border-gray-200"
                    } ${position === "center" ? "ring-2 ring-rose-400" : ""}`}
                  >
                    <div className="text-center space-y-4">
                      <div
                        className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                          position === "center"
                            ? "bg-primary text-light"
                            : isDark
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateFeatures("prev")}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-50 text-gray-900"
              } shadow-lg transition-all`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateFeatures("next")}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-50 text-gray-900"
              } shadow-lg transition-all`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Get started in just four simple steps
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setCurrentStep(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    currentStep === index
                      ? isDark
                        ? "bg-primary-start/20 border-2 border-primary-start"
                        : "bg-primary-start/30 border-2 border-primary-start"
                      : isDark
                      ? "bg-gray-800/50 hover:bg-gray-800 border border-gray-700"
                      : "bg-white/50 hover:bg-white border border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        currentStep === index
                          ? "bg-primary text-light"
                          : isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          currentStep === index ? "text-primary" : ""
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Play/Pause Control */}
              <div className="flex items-center space-x-3 pt-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <span
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {isPlaying ? "Auto-playing" : "Paused"}
                </span>
              </div>
            </div>

            {/* Right Column - Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div
                className={`w-full max-w-md h-80 rounded-2xl border-4 border-dashed flex items-center justify-center ${
                  isDark
                    ? "border-gray-600 bg-gray-800/50"
                    : "border-gray-300 bg-white/50"
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-8 h-8 text-light ml-1" />
                  </div>
                  <p
                    className={`text-lg font-medium ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Step {currentStep + 1} Video
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    Video placeholder for {steps[currentStep].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDark ? "bg-gray-800/30" : "bg-white/30"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Success stories from our amazing community
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className={`p-8 rounded-2xl shadow-lg text-center ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-light font-bold text-xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                </div>
                <blockquote
                  className={`text-lg italic mb-6 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index
                      ? "bg-primary-start"
                      : isDark
                      ? "bg-gray-600 hover:bg-gray-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-light">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-light/90 max-w-2xl mx-auto">
              Join thousands of successful learners who have achieved their
              dreams with PrepSmartly. Start your journey today with our free
              trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-light text-primary-start rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Start Your Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-light text-light rounded-lg font-semibold hover:bg-light hover:text-primary-start transition-all">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 ${
          isDark
            ? "bg-gray-900 border-t border-gray-800"
            : "bg-gray-50 border-t border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Left - Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-light font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-primary">
                  PrepSmartly
                </span>
              </div>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } max-w-xs`}
              >
                Empowering learners worldwide with AI-powered education and
                personalized learning experiences.
              </p>
            </div>

            {/* Middle - Navigation */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#features"
                  className={`block text-sm transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className={`block text-sm transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  How It Works
                </a>
                <a
                  href="#about"
                  className={`block text-sm transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className={`block text-sm transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Right - Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                  { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    label: "Instagram",
                  },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                  { icon: <Mail className="w-5 h-5" />, label: "Email" },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900"
                    }`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            className={`pt-8 border-t text-center text-sm ${
              isDark
                ? "border-gray-800 text-gray-400"
                : "border-gray-200 text-gray-600"
            }`}
          >
            <p>© PrepSmartly 2025 — All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
