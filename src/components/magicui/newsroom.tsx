"use client";
import React, { useState } from 'react';

type Newsletter = {
  id: number;
  title: string;
  content: string;
  fullContent: string;
  date: string;
};

const newsletters: Newsletter[] = [
  {
    id: 1,
    title: 'AI Trends in 2025',
    content: 'AI is rapidly evolving. Let’s look at what the future holds...',
    fullContent:
      'AI is rapidly evolving. Let’s look at what the future holds: advanced assistants, ethical AI, and stronger enterprise adoption. Businesses must prepare for the shift.',
    date: 'May 20, 2025',
  },
  {
    id: 2,
    title: 'Climate Innovations This Year',
    content: 'Breakthroughs in renewable energy and green tech are shaping the year...',
    fullContent:
      'Breakthroughs in renewable energy and green tech are shaping the year. Innovations in solar storage, sustainable farming, and smart grids are gaining traction globally.',
    date: 'May 18, 2025',
  },
  {
    id: 3,
    title: 'Global Economy in Focus',
    content: 'The economic forecast for 2025 remains cautiously optimistic...',
    fullContent:
      'The economic forecast for 2025 remains cautiously optimistic, with tech, healthcare, and AI driving growth amid geopolitical uncertainties.',
    date: 'May 15, 2025',
  },
];

const recommendedNewsletters: string[] = [
  'April 2025 Newsletter',
  'Special Edition: Earth Day 2025',
  'Tech in Healthcare: March 2025',
  '2025 Investment Trends',
];

const NewsletterItem: React.FC<Newsletter> = ({ title, content, fullContent, date }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-6 mb-6 relative z-20">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-neutral-500">{date}</p>
      <p className="mt-2 text-white">
        {expanded ? fullContent : content}
      </p>
      <button
        className="mt-2 bg-white rounded-2xl px-3 flex font-medium"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

const Newsroom: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Newsroom</h1>

      <div className="space-y-6">
        {newsletters.map((newsletter) => (
          <NewsletterItem key={newsletter.id} {...newsletter} />
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-gray-300">
        <h3 className="text-xl font-semibold text-neutral-400 mb-4">Recommended Newsletters</h3>
        <ul className="list-disc list-inside text-white space-y-2">
          {recommendedNewsletters.map((item, index) => (
            <li key={index} className="hover:text-blue-600 cursor-pointer transition-colors">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Newsroom;
