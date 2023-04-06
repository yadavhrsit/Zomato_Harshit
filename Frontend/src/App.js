import './App.css';
import './Pages/Commons/Page.css'
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import DeliveryPage from './Pages/Delivery/DeliveryPage';
import DiningOutPage from './Pages/DiningOut/DiningOutPage';
import NightLifePage from './Pages/NightLife/NightLifePage';
import RestaurantMenu from './Pages/Commons/RestaurantMenu';
import Error from './routes/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <SubHeader />
        <Routes>
          <Route path='/' element={<DeliveryPage />} />
          <Route path='/Delivery'>
            <Route index element={<DeliveryPage />} />
            <Route path=':id' element={<RestaurantMenu />} />
          </Route>
          <Route path='/Dining' element={<DiningOutPage />} />
          <Route path='/Nightlife' element={<NightLifePage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
