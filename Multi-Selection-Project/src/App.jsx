import { useState } from 'react';

const famousPeople = [
  { name: 'Albert Einstein', fact: 'Developed the theory of relativity.' },
  {
    name: 'Marie Curie',
    fact: 'Pioneered research on radioactivity and won two Nobel Prizes.',
  },
  {
    name: 'Nelson Mandela',
    fact: "Fought against apartheid and became South Africa's first Black president.",
  },
  {
    name: 'Steve Jobs',
    fact: 'Co-founded Apple and revolutionized the smartphone industry.',
  },
  {
    name: 'Malala Yousafzai',
    fact: "Youngest Nobel Prize laureate and advocate for girls' education.",
  },
];

export default function App() {
  const [truth, setTruth] = useState(true);
  const [expandedFacts, setExpandedFacts] = useState([]);

  const toggleMultiSelection = () => {
    setTruth((prev) => !prev);
    setExpandedFacts([]);
  };

  const showFact = (index) => {
    if (!truth) {
      setExpandedFacts((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      onClick={showFact}
    >
      <button
        className="p-2 text-2xl border-2 cursor-pointer rounded-2xl"
        onClick={toggleMultiSelection}
      >
        {truth ? 'Disable Multi Selection' : 'Enable Multi Selection'}
      </button>
      {famousPeople.map((data, i) => (
        <div
          key={i}
          className="w-[500px]  bg-red-600 p-2 rounded-2xl cursor-pointer m-1"
        >
          <h4 className="text-2xl text-white p-2">{data.name}</h4>
          <p className="text-white hidden ">{data.fact}</p>
        </div>
      ))}
    </div>
  );
}
