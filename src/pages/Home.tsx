import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import BannerHome from '../components/BannerHome';
import HorizontalScollCard from '../components/HorizontalScrollCard';
import useFetch from '../hooks/useFetch';
const Home = () => { 
  const trendData = useSelector(
    (state: RootState) => state.movieoData.bannerData
  );
const { data : nowPlayingData } = useFetch('/movie/now_playing')
const { data : topRatedData } = useFetch('/movie/top_rated')
const { data : popularTvShowData } = useFetch('/tv/popular')
const { data : onTheAirShowData } = useFetch('/tv/on_the_air')

  return (
    <div>
      <BannerHome/>
      {/* Add conditional rendering for HorizontalScollCard */}
      <HorizontalScollCard data={trendData} heading={"Trending"} trending={true}/>
      <HorizontalScollCard data={nowPlayingData} heading={"Now Playing"} trending={false} media_type={"movie"}/>
      <HorizontalScollCard data={topRatedData} heading={"Top Rated Movies"} trending={false} media_type={"movie"}/>
        <HorizontalScollCard data={popularTvShowData} heading={"Popular TV Show"} trending={false} media_type={"tv"}/>
        <HorizontalScollCard data={onTheAirShowData} heading={"On The Air"} trending={false} media_type={"tv"}/>
    </div>
  )
}

export default Home