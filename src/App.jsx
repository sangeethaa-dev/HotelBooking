import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetails from './Pages/RoomDetails';
import MyBookings from './Pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './Pages/hotelOwner/Layout';
import Dashboard from './Pages/hotelOwner/Dashboard';
import AddRoom from './Pages/hotelOwner/AddRoom';
import ListRoom from './Pages/hotelOwner/ListRoom';

const App = () => {
  const location = useLocation();
  const isOwnerpath = location.pathname.includes("owner");

  return (
    <div>
      {!isOwnerpath && <Navbar />}
      {false && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='rooms/:id' element={<RoomDetails />} />
          <Route path='my-bookings' element={<MyBookings />} />
          
          <Route path='owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
          
          {/* Optional: 404 fallback */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;