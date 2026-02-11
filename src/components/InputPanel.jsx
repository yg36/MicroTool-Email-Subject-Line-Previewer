"use client";

import { motion } from "framer-motion";

export default function InputPanel({ subject, setSubject, count }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
    >
      <label className="block font-semibold mb-3 text-gray-700">
        Email Subject Line
      </label>

      <input
        type="text"
        value={subject}
        placeholder="Type your subject line…"
        onChange={(e) =>
          setSubject(e.target.value.slice(0, 120).trimStart())
        }
        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
      />

      <p
        className={`text-sm mt-3 ${
          count >= 70
            ? "text-red-600"
            : count >= 50
            ? "text-orange-500"
            : "text-slate-700"
        }`}
      >
        {count} / 120 characters
      </p>
    </motion.div>
  );
}
