import Link from "next/link";
import Image from "next/image";
import { FiUser, FiCode, FiMail, FiDownload, FiEye, FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="mb-6">
              <Image 
                src="https://images.unsplash.com/photo-1553484771-11998c592b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAyNDY2NTh8&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Professional headshot" 
                width={150} 
                height={150} 
                className="rounded-full border-4 border-white shadow-lg mx-auto transition-transform duration-300 hover:scale-105" 
                priority 
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Creative Developer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl leading-relaxed">
                Crafting digital experiences through clean code and innovative design solutions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <FiEye className="mr-2 h-4 w-4" />
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
              >
                <FiMail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 md:py-20 bg-white" id="about">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                  About Me
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm a passionate developer who loves creating meaningful digital experiences. 
                  With a focus on clean code and user-centered design, I bring ideas to life 
                  through modern web technologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community.
                </p>
                <Link
                  href="/resume"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-300"
                >
                  <FiDownload className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </div>
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAyNDY2NTl8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="About me workspace" 
                  width={500} 
                  height={400} 
                  className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-600 text-lg">
              Technologies and tools I work with to bring projects to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-3 rounded-full bg-indigo-100 w-fit mx-auto mb-4">
                <FiCode className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Frontend</h3>
              <p className="text-gray-600 text-center">
                React, Next.js, TypeScript, Tailwind CSS, and modern JavaScript frameworks
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-3 rounded-full bg-purple-100 w-fit mx-auto mb-4">
                <FiUser className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Backend</h3>
              <p className="text-gray-600 text-center">
                Node.js, Python, FastAPI, databases, and server-side development
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-3 rounded-full bg-green-100 w-fit mx-auto mb-4">
                <FiGithub className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Tools</h3>
              <p className="text-gray-600 text-center">
                Git, Docker, AWS, testing frameworks, and development workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="w-full py-16 md:py-20 bg-white" id="portfolio">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg">
              A selection of my recent work showcasing different skills and technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1553830591-d8632a99e6ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAyNDY2NjB8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Project screenshot" 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Application</h3>
                <p className="text-gray-600 mb-4">
                  A modern web application built with React and Node.js featuring responsive design
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-600 font-medium">React • Node.js</span>
                  <Link 
                    href="/portfolio/project1" 
                    className="text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/portfolionew003/800/600" 
                  alt="Project screenshot" 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App</h3>
                <p className="text-gray-600 mb-4">
                  Cross-platform mobile application with intuitive user interface and smooth animations
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-600 font-medium">React Native</span>
                  <Link 
                    href="/portfolio/project2" 
                    className="text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-indigo-600 bg-white px-8 text-sm font-medium text-indigo-600 shadow-md transition-all duration-300 hover:bg-indigo-50 hover:shadow-lg hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-gray-600 text-lg">
              Feedback from clients and colleagues I've had the pleasure to work with
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "Exceptional work quality and attention to detail. The project was delivered 
                on time and exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <FiUser className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "Great communication throughout the project and delivered exactly what we needed. 
                Highly recommend for any web development work."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <FiUser className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Chen</p>
                  <p className="text-sm text-gray-600">Startup Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-16 md:py-20 bg-white" id="contact">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1"
              >
                <FiMail className="mr-2 h-4 w-4" />
                Start a Conversation
              </Link>
              <Link
                href="mailto:hello@portfolio.com"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1"
              >
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}