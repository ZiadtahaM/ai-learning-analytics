import React from "react";

interface ContentAreaProps {
  isGenerating: boolean;
  data: any;
}

export default function ContentArea({ isGenerating, data }: ContentAreaProps) {
  if (isGenerating) {
    return (
      <div className="flex-grow p-6 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-l-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Generating your learning materials...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex-grow p-6 flex flex-col items-center justify-center text-center">
        <h2 className="mt-4 text-xl font-medium text-gray-700">Your Study Materials Will Appear Here</h2>
        <p className="mt-1 text-gray-500">Enter a topic and set your preferences to begin.</p>
      </div>
    );
  }

  return (
    <div className="flex-grow p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.topic}</h2>
      
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex space-x-4">
          <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-lg">Read</button>
          <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-lg">Quiz</button>
        </nav>
      </div>

      <div className="prose max-w-none">
        <p>{data.explanation}</p>
      </div>
    </div>
  );
}
