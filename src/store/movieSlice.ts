import { createSlice } from "@reduxjs/toolkit";
export type Bdata = {
    backdrop_path : string,
    id : number | string,
    original_title : string,
    overview : string,
    release_date : string,
    title : string,
    vote_average : number,
    poster_path : string,
    media_type : string,
    original_name : string,
    name : string,
    popularity : number,
    vote_count : number,
    first_air_date : string,
    genre_ids : number[],
    mediaType : string,

}
interface InitialStateTypes {
    bannerData : Bdata[],
    imageURL : string
}
const initialState : InitialStateTypes = {
    bannerData : [],
    imageURL : ""
}

export const movieoSlice = createSlice({
    name : 'moviepm',
    initialState,
    reducers : {
        setBannerData : (state,action)=>{
            state.bannerData = action.payload
        },
        setImageURL : (state,action) =>{
            state.imageURL = action.payload
        }
    }
})

export const { setBannerData, setImageURL } = movieoSlice.actions


export default movieoSlice.reducer
