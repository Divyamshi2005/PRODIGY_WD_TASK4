import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import profilePic from '../assets/your-photo.jpg';

function Home() {
  return (
    <section className="home bg-gradient-to-br from-blue-400 to-purple-600 text-white flex flex-col items-center justify-center h-screen px-4">
      <motion.div
        className="photo-frame border-8 border-white rounded-full overflow-hidden shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profilePic} alt="Your Photo" className="w-48 h-48 object-cover" />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mt-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        CHALLA PADMAJA DIVYAMSHI
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mt-4 max-w-lg text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Web Developer with a passion for creating interactive and dynamic user experiences.
      </motion.p>
      <motion.a
        href="/about"
        className="mt-8 px-6 py-3 bg-white text-blue-500 rounded-full shadow-md hover:bg-blue-100 transition duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Learn More
      </motion.a>
    </section>
  );
}

export default Home;
