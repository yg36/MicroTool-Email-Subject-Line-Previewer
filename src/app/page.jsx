"use client";

import { useState } from "react";
import Header from "../components/Header";
import InputPanel from "../components/InputPanel";
import PreviewPanel from "../components/PreviewPanel";
import FeaturesSection from "../components/Features";

const LIMITS = {
  Gmail: { desktop: 70, mobile: 36 },
  Outlook: { desktop: 60, mobile: 33 },
  "Apple Mail": { desktop: 78, mobile: 40 },
};

function truncateSubject(text, limit) {
  if (!text) return "";
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "…";
}

export default function Home() {
  const [subject, setSubject] = useState("");
  const [device, setDevice] = useState("desktop");
  const [client, setClient] = useState("Gmail");

  const count = subject.length;
  const limit = LIMITS[client][device];
  const previewText = truncateSubject(
    subject || "Your subject line preview",
    limit
  );

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="grid md:grid-cols-2 gap-10">
          <InputPanel
            subject={subject}
            setSubject={setSubject}
            count={count}
          />

          <PreviewPanel
            device={device}
            setDevice={setDevice}
            client={client}
            setClient={setClient}
            previewText={previewText}
            limits={LIMITS}
          />
        </div>

        <FeaturesSection />
      </div>
    </div>
  );
}
