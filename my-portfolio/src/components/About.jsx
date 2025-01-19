import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-neon-blue mb-4">About Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I'm a passionate full-stack developer with expertise in modern web technologies.
          I love creating beautiful and functional applications that solve real-world problems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-neon-pink mb-4">Skills</h3>
          <ul className="space-y-2">
            <li className="text-gray-300">• Frontend: React, Next.js, Tailwind CSS</li>
            <li className="text-gray-300">• Backend: Node.js, Express, MongoDB</li>
            <li className="text-gray-300">• Tools: Git, Docker, AWS</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-neon-pink mb-4">Experience</h3>
          <ul className="space-y-2">
            <li className="text-gray-300">• Full Stack Developer at Company X</li>
            <li className="text-gray-300">• Freelance Web Developer</li>
            <li className="text-gray-300">• Open Source Contributor</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About