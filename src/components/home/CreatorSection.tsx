import React from "react";
import { Github, Globe, Linkedin } from "lucide-react";

export default function CreatorSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Creator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The mind behind BlackCode - Building tools to help developers
            succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <div className="aspect-w-1 aspect-h-1 mb-6">
                <img
                  src="@/profile.jpeg"
                  alt="Vector"
                  loading="lazy"
                  decoding="async"
                  className="w-48 h-48 rounded-3xl mx-auto object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Victor Umaru
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Web Developer & DSA Enthusiast
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="github.com/veck404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    // href="https://www.linkedin.com/in/veck404/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://vector404.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors space-x-2"
                  >
                    <Globe className="w-6 h-6" />
                    <span>Read My Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  A software developer committed to delivering high-quality
                  product , always learning new technologies to improve my
                  skills Love collaborating with designers and developers and
                  Committed to delivering high-quality software solutions.
                </p>
                <div className="space-y-7">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    My Mission
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To empower developers with the knowledge and tools they need
                    to excel in their technical interviews and become better
                    problem solvers. BlackCode is built with the vision of
                    making DSA learning more intuitive and less intimidating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
