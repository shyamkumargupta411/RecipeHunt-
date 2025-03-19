import { Routes, Route } from 'react-router-dom';
import MainSeach from './component/mainSeach';
import MainInfo from './component/mainInfo';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('/bg.png')`, // Use backgroundImage for images
        backgroundSize: 'cover',          // Ensures the image covers the entire container
        backgroundPosition: 'center',     // Centers the image
        minHeight: '100vh',               // Makes sure it takes the full viewport height
      }}
    >
      <Routes>
        <Route path="/" element={<MainSeach />} />
        <Route path="/:mealid" element={<MainInfo />} />
      </Routes>
    </div>
  );
}

export default App;

