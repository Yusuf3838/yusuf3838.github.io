import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-neon-blue mb-4">Get In Touch</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations.
          Feel free to reach out!
        </p>
      </motion.div>

      <div className="flex justify-center space-x-8 mt-8">
        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.1 }}
          className="text-neon-pink hover:text-neon-blue transition-colors"
        >
          <Mail size={32} />
        </motion.a>
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="text-neon-pink hover:text-neon-blue transition-colors"
        >
          <Github size={32} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="text-neon-pink hover:text-neon-blue transition-colors"
        >
          <Linkedin size={32} />
        </motion.a>
      </div>
    </section>
  )
}

export default Contact