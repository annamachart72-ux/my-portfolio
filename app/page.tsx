"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function Home() {
  const skills = [
    "Biomaterials & Tissue Eng.",
    "Process Dynamics & Control",
    "MATLAB / Python Data Analysis",
    "Fluid Mechanics & Heat Transfer",
    "CAD / SolidWorks",
    "Lab Protocol & Assays",
  ];

  return (
    <main className="min-h-screen bg-stone-950 text-emerald-50 flex flex-col justify-between selection:bg-emerald-500 selection:text-stone-950 relative overflow-hidden">
      {/* Subtle Forest Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b15_1px,transparent_1px),linear-gradient(to_bottom,#064e3b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Section */}
      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to Biomedical & Chemical Engineering Opportunities
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 mb-4">
            Anna Machart
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-emerald-400 mb-6 font-mono">
            Biomedical & Chemical Engineering Student
          </h2>

          {/* Bio / Summary */}
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            I am a dual-major Biomedical and Chemical Engineering student with a passion for process optimization, biomaterial innovation, and continuous technical learning.
          </p>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-emerald-950/40 border border-emerald-900/60 text-emerald-200 rounded-md text-xs font-mono hover:border-emerald-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Anna_Machart_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            {/* Social / Contact Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-stone-900 border border-emerald-900/50 text-stone-400 hover:text-emerald-300 hover:border-emerald-700 transition-all active:scale-95"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-stone-900 border border-emerald-900/50 text-stone-400 hover:text-emerald-300 hover:border-emerald-700 transition-all active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-lg bg-stone-900 border border-emerald-900/50 text-stone-400 hover:text-emerald-300 hover:border-emerald-700 transition-all active:scale-95"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-emerald-950 py-6 text-center text-stone-500 text-xs font-mono">
        © {new Date().getFullYear()} Anna Machart. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}