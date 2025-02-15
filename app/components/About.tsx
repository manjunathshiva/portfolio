"use client"

import { motion } from "framer-motion"
import { Code,  Wrench, Brain , Globe, Terminal, Server } from "lucide-react"

import Image from "next/image"

export default function About() {
  //https://lucide.dev/icons/
  const skills = [
      {
        icon: <Code className="w-8 h-8 text-blue-500" />,
        title: "Programming Languages",
        description: "C, C++, Java (core), Python, Perl, Microservices"
      },
      {
        icon: <Brain className="w-8 h-8 text-purple-500" />,
        title: "AI & Technologies",
        description: "Gen AI, LLMs, Langchain, Llama-index, RAG, Agentic Frameworks (CrewAI, AutoGen, Agno)"
      },
      {
        icon: <Terminal className="w-8 h-8 text-green-500" />,
        title: "Development Environments",
        description: "Replit, VS Code, IntelliJ IDEA, Cursor IDE"
      },
      {
        icon: <Wrench className="w-8 h-8 text-orange-500" />,
        title: "Tools & Frameworks",
        description: "Git, GitLab, Jenkins, JIRA, Docker, Kubernetes, Streamlit, ChainLit, panel"
      },
      {
        icon: <Globe className="w-8 h-8 text-indigo-500" />,
        title: "Web & Design",
        description: "JavaScript, Node.js, NGINX, Helm, Ansible"
      },
      {
        icon: <Server className="w-8 h-8 text-red-500" />,
        title: "Infrastructure",
        description: "AWS, Docker, Kubernetes, Elasticsearch, Kibana, Prometheus, Grafana"
      }
    ];


  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            With over two decades of experience in software engineering, I am a passionate technologist and innovator in the healthcare technology sector. As a Senior Software Engineer at GE Healthcare, I've been at the forefront of implementing cutting-edge Generative AI solutions that are transforming how we develop and deliver healthcare technology.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I hold a US patent and have consistently pushed the boundaries of what's possible in healthcare software development. My expertise spans from developing microservices architectures to creating innovative AI applications that enhance developer productivity across global teams.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            In my current role, I've pioneered several Gen AI applications that are now being implemented across healthcare platforms worldwide. These solutions include intelligent service platforms, automated testing tools, and sophisticated knowledge retrieval systems that are making a real difference in how healthcare technology is developed and maintained.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My technical journey began at Dell EMC, where I spent nearly eight years developing storage management solutions. This foundation in complex systems architecture has proved invaluable in my current work with healthcare technologies.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Beyond my professional work, I'm an active contributor to the tech community. I've developed several personal projects, including Bhagavad Gita GPT and Bible GPT using Hybrid-RAG technology, and I contribute to open-source projects like LangChain. I'm also passionate about creating educational technology solutions, as demonstrated by my Grade 3 GPT project.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            In my free time, I channel my creativity into graphic design and mobile app development, having published apps like Bangalore Auto Fare and SB Interest Calculator on the Google Play Store. I also maintain a YouTube channel showcasing my son's achievements, combining my technical skills with my personal interests.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I believe in continuous learning and staying at the cutting edge of technology. Whether it's exploring new AI frameworks, mastering cloud technologies, or developing innovative solutions for healthcare challenges, I'm always eager to push the boundaries of what's possible in software engineering.
            </p>
            
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

