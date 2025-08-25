import React from "react";

const LoopList: React.FC = () => {
  // Generate letters A to J using char codes
  const items = Array.from({ length: 10 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div>
      <h2>List of Items (A–J)</h2>
      <ul>
        {items.map((letter, index) => (
          <li key={index}>{letter}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoopList;
