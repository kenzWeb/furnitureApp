import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../components/3d/Scene';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn more about our mission and vision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid gap-12"
        >
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800"
                alt="Office space"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="relative">
            <Scene />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;