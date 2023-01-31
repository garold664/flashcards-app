import FlashCards from './components/FlashCards';
// import FlashCardsForm from './components/FlashCardsForm';

import { Routes, Route, NavLink } from 'react-router-dom';
import FlashCardsView from './components/FlashCardsView';

const App = (props) => {
  return (
    <>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/flashcards">FlashCards</NavLink>
      <Routes>
        {/* <FlashCardsForm /> */}
        <Route path="/" element={<FlashCards />} />
        <Route path="/flashcards" element={<FlashCardsView />} />
      </Routes>
    </>
  );
};

export default App;
