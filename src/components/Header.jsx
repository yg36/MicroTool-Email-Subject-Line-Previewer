"use client";

import { motion } from "framer-motion";
import { MailOpenIcon } from "lucide-react";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
    <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-4 rounded-2xl shadow-md">
            <MailOpenIcon size={40} className="text-blue-600" />
        </div>
    </div>
      <h1 className="text-4xl font-extrabold text-black mb-4">
        Preview Your Email Subject Line Instantly
      </h1>

      <p className="text-lg text-slate-800 max-w-3xl mx-auto">
        See exactly how your subject line appears across devices and email
        clients before you hit send.
      </p>
    </motion.div>
  );
}
