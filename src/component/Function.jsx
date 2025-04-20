import React from 'react';

const Function = () => {
  // Data for the boxes
  const data = [
    {
      id: 1,
      logo: '🌟', // Replace with your desired logo (emoji or image URL)
      lines: ['Line 1 Text', 'Line 2 Text', 'Line 3 Text'],
    },
    {
      id: 2,
      logo: '🔥',
      lines: ['Another Line 1', 'Another Line 2', 'Another Line 3'],
    },
    {
      id: 3,
      logo: '🚀',
      lines: ['Rocket Line 1', 'Rocket Line 2', 'Rocket Line 3'],
    },
    {id: 4,
    logo: '🚀',
    lines: ['Rocket Line 1', 'Rocket Line 2', 'Rocket Line 3'],
  },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 mt-9">
      {data.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg shadow-lg p-4 w-64 h-60 text-center"
        >
          {/* Logo */}
          <div className="text-4xl mb-4">{item.logo}</div>
          {/* Lines of Text */}
          {item.lines.map((line, index) => (
            <p key={index} className="text-gray-700">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Function;