"use client";

import React, { useState } from "react";
import SettingsPanel from "./SettingsPanel";
import ContentArea from "./ContentArea";

export default function Dashboard() {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [learningData, setLearningData] = useState<any>(null);

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    // Simulate API call to generate AI materials
    setTimeout(() => {
      setLearningData({
        topic,
        explanation: `Here is a comprehensive explanation of ${topic}.`,
        quiz: [
          { question: "What is the main concept?", options: ["A", "B", "C"], answer: 0 }
        ]
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row min-h-[90vh]">
        <SettingsPanel 
          topic={topic} 
          setTopic={setTopic} 
          onGenerate={handleGenerate} 
          isGenerating={isGenerating} 
        />
        <ContentArea 
          isGenerating={isGenerating} 
          data={learningData} 
        />
      </div>
    </div>
  );
}
