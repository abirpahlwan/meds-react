import React, { useState } from 'react';
import { Search, Compass, Book, Briefcase, Camera, Coffee, Music } from 'lucide-react';

interface Card {
  icon: React.ReactNode;
  title: string;
}

const cards: Card[] = [
  { icon: <Compass className="w-8 h-8" />, title: "Explore" },
  { icon: <Book className="w-8 h-8" />, title: "Learn" },
  { icon: <Briefcase className="w-8 h-8" />, title: "Work" },
  { icon: <Camera className="w-8 h-8" />, title: "Capture" },
  { icon: <Coffee className="w-8 h-8" />, title: "Relax" },
  { icon: <Music className="w-8 h-8" />, title: "Listen" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">MEDS</h1>
      
      {/* Search Input */}
      <div className="max-w-lg mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      
      {/* Grid View */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-6 max-w- mx-auto">
          {filteredCards.map((card, index) => (
            // Cards
            <button
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center space-y-4 cursor-pointer  w-48 h-48"
            >
              {card.icon}
              <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;