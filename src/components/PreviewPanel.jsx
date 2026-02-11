"use client";

import { motion } from "framer-motion";

export default function PreviewPanel({
  device,
  setDevice,
  client,
  setClient,
  previewText,
  limits,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
    >
      {/* Device Toggle */}
      <div className="flex gap-2 mb-6">
        {["desktop", "mobile"].map((d) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={d}
            onClick={() => setDevice(d)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              device === d
                ? "bg-blue-600 text-white shadow-md"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {d === "desktop" ? "Desktop" : "Mobile"}
          </motion.button>
        ))}
      </div>

      {/* Client Tabs */}
      <div className="flex gap-5 border-b border-slate-300 mb-6">
        {Object.keys(limits).map((c) => (
          <button
            key={c}
            onClick={() => setClient(c)}
            className={`pb-2 font-semibold transition ${
              client === c
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-black hover:text-blue-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Preview */}
      <motion.div
        key={previewText}
        className="border border-slate-300 rounded-lg p-4 shadow-inner"
      >
        <div className="text-sm text-black mb-2 font-semibold">
          {client} • {device === "desktop" ? "Desktop" : "Mobile"}
        </div>

        <div className="font-bold text-gray-500 text-lg break-words">
          {previewText}
        </div>
      </motion.div>
    </motion.div>
  );
}
