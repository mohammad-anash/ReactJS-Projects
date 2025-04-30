import { useState } from 'react';

export default function App() {
  const [currentColor, setCurrentColor] = useState('');
  const letters = 'abcdef0123456789'; // Full hex range

  const generateHexColorCode = () => {
    let hash = '#';
    for (let i = 0; i < 6; i++) {
      hash += letters[Math.floor(Math.random() * letters.length)]; // Use full range
    }
    setCurrentColor(hash);
  };

  const generateRGBColorCode = () => {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setCurrentColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div
      style={{
        backgroundColor: currentColor,
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <button onClick={generateHexColorCode} className="hexCode">
        Generate Hex Color
      </button>
      <button onClick={generateRGBColorCode} className="RGBCode">
        Generate RGB Color
      </button>
      {currentColor && (
        <div style={{ marginTop: '20px' }}>
          Current Color: <strong>{currentColor}</strong>
        </div>
      )}
    </div>
  );
}
