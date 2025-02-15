"use client"

import { motion } from "framer-motion"
import { Brain, Code, Server, Database, Layout, Terminal, Globe, Wrench } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "Gen AI Solutions",
      description: "Specialized in developing Gen AI applications using LLMs, Langchain, and RAG. Created multiple GPT applications for healthcare and knowledge management.",
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Software Development",
      description: "20+ years of expertise in C, C++, Java, and Python. Patent holder (7011605-US-1) with extensive experience in healthcare technology.",
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: "Cloud & Infrastructure",
      description: "Implementation of microservices architecture using Docker, Kubernetes, and AWS. Experience with Elasticsearch, Kibana, Prometheus, and Grafana.",
    },
    {
      icon: <Terminal className="w-12 h-12 text-yellow-500" />,
      title: "AI Development Tools",
      description: "Expertise in UI frameworks like Streamlit and ChainLit. Proficient with modern AI-assisted development using Cursor IDE, GitHub Copilot, and other AI tools.",
    },
    {
      icon: <Globe className="w-12 h-12 text-red-500" />,
      title: "Web Development",
      description: "Full-stack development using JavaScript, Node.js, NGINX. Experience in creating responsive and user-friendly applications.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-indigo-500" />,
      title: "DevOps & Automation",
      description: "Skilled in Git, GitLab, Jenkins, and various CI/CD tools. Experience in build automation and deployment optimization.",
    }
  ]


  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

