"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "GE Healthcare",
      location: "Bangalore",
      period: "2012-06 - Present",
      role: "Senior Software Engineer",
      responsibilities: [
        "Architecting and managing on-premises Gen AI infrastructure for enterprise-wide deployment across global sites",
        "Leading development of intelligent GPT applications (MICT GPT, CODE GPT, Service GPT) enhancing developer productivity",
        "Developing and maintaining Gen AI applications using latest Llama-index, RAG, and Qdrant vector databases",
        "Spearheading UI/Workflow development for CT Systems using C/C++/Python on SUSE Linux platforms",
        "Leading modernization efforts from monolithic to microservices architecture using Spring Boot and Kubernetes",
        "Serving as Host Lead System Designer for QMS Process and conducting code reviews",
        "Mentoring team members and contractors on scanner desktop and CT workflow implementations",
        "Filed Patent for Intelligent Service Platform using LLM Agents",
      ],
    },
    {
      company: "Dell EMC",
      location: "Bangalore",
      period: "2004-07 - 2012-04",
      role: "Senior Software Engineer",
      responsibilities: [
        "Designed and developed Solutions Enabler APIs for EMC Storage Arrays",
        "Led development of SMI-S Provider including Indicator LED Profile and Block Server Performance",
        "Created new build system and web-based automation tools using Perl and PHP/Apache",
        "Developed robust storage management solutions for Clariion and Symmetrix arrays",
        "Trained junior developers in Clariion and Symmetrix Storage APIs",
        "Collaborated with QA teams to design and implement comprehensive test solutions",
        "Earned Silver Award for efficient implementation of VASA Provider APIs for VPLEX Product",
      ],
    }
];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

