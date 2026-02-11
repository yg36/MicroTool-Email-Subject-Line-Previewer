"use client";

import { motion } from "framer-motion";
import { PenLine, Settings, Globe } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "How to Use",
      desc: "Enter your subject line and preview it instantly.",
      icon: PenLine,
    },
    {
      title: "How it Works",
      desc: "Simulates real character limits of major email platforms.",
      icon: Settings,
    },
    {
      title: "Where to Use",
      desc: "Perfect for marketers, founders, students, and professionals.",
      icon: Globe,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-20">
      {features.map((Feature, i) => {
        const Icon = Feature.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-4">
              <Icon
                size={40}
                className="text-blue-600 bg-blue-100 p-2 rounded-xl"
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg mb-3 text-black">
              {Feature.title}
            </h3>

            {/* Description */}
            <p className="text-black text-sm">
              {Feature.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
