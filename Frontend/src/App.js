import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './Pages/Commons/Page.css'
import Header from './Header/Header';
import Error from './routes/Error';
const SubHeader = React.lazy(() => import('./SubHeader/SubHeader'));
const DeliveryPage = React.lazy(() => import('./Pages/Delivery/DeliveryPage'));
const RestaurantMenu = React.lazy(() => import('./Pages/Commons/RestaurantMenu'));
const DiningOutPage = React.lazy(() => import('./Pages/DiningOut/DiningOutPage'));
const NightLifePage = React.lazy(() => import('./Pages/NightLife/NightLifePage'));

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
