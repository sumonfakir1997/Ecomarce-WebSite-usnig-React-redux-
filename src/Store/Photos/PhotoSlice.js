 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


 export const getPhotos = createAsyncThunk (
    'photos/getPhotos',
    async () => {
        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=8");  
        const formattedResponse = response.json(); //await response.json();
        console.log(formattedResponse);
        return formattedResponse;
       
    }
 );

 export const photoSlice = createSlice({
    name:"photosState",
    initialState: {
    isLoading: false,
    photos:[],
    },
    extraReducers:{
        [getPhotos.pending]: (state) => {
           state.isLoading = true ;
        },
        [getPhotos.fulfilled]: (state, action) => {
            state.photos = action.payload;
            state.isLoading = false; 
        },
        [getPhotos.rejected]: (state) => {
            state.isLoading = false;
        }

    }
 }); 
 export default photoSlice.reducer;