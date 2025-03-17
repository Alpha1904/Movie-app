import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setBannerData, setImageURL } from './store/movieSlice';
import BannerHome from './components/BannerHome';
function App() {
  const dispatch = useDispatch()

  const fetchTrendingData = async()=>{
    try {
        const response = await axios.get('/trending/all/week')

        dispatch(setBannerData(response.data.results))
        
    } catch (error) {
        console.log("error",error)
    }
  }

  const fetchConfiguration = async()=>{
    try {
        const response = await axios.get("/configuration")

        dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchTrendingData()
    fetchConfiguration()
  },[])
  return (
    <>
    <main className='pb-14 lg:pb-0'>
        <Header/>
        <div className='pt-16'>
          <Outlet />
        </div>
        <Footer/>
        <MobileNav/>
    </main>
    </>
  );
}

export default App;
