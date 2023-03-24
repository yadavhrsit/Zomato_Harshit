import './App.css';
import Header from './components/Header.jsx';
import SubHeader from './components/SubHeader.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import DeliveryPage from './components/DeliveryPage';
import DiningOutPage from './components/DiningOutPage';
import NightLifePage from './components/NightLifePage';
import Error from './routes/Error';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <SubHeader />
        <Routes>
          <Route path='/' element={<DeliveryPage />} />
          <Route path='/Delivery' element={<DeliveryPage />} />
          <Route path='/Dining' element={<DiningOutPage />} />
          <Route path='/Nightlife' element={<NightLifePage />} />
          <Route path='/menu' element={<Restaurant />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
