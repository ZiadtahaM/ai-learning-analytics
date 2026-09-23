import React from "react";

interface SettingsPanelProps {
  topic: string;
  setTopic: (t: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function SettingsPanel({ topic, setTopic, onGenerate, isGenerating }: SettingsPanelProps) {
  return (
    <div className="w-full lg:w-[450px] p-6 border-b lg:border-r border-gray-200 flex flex-col">
      <h1 className="text-3xl font-bold text-gray-900">AI Learning Dashboard</h1>
      <p className="text-gray-600 mt-2 mb-6">Your dynamic research and content generation tool.</p>
      
      <div className="mb-4">
        <label htmlFor="topic" className="block text-sm font-bold text-gray-700 mb-1">Enter any Topic</label>
        <input 
          id="topic"
          type="text" 
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 text-lg" 
          placeholder="e.g., SOLID Design Principles"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Complexity</label>
          <select className="mt-1 block w-full rounded-md border border-gray-300 p-2">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>

      <button 
        onClick={onGenerate}
        disabled={isGenerating || !topic}
        className="w-full mt-auto py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isGenerating ? "Generating..." : "Generate Materials"}
      </button>
    </div>
  );
}
