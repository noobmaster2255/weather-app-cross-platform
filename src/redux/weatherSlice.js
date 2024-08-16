import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        bookmarkedLocations: [],
        homeLocation: null,
        foreCasts: []
    },
    reducers: {
        setBookmarks: (state, action) => {
            console.log(" set bookamrks");
            state.bookmarkedLocations = action.payload;
        },

        addBookmark: (state, action) => {
            console.log(" add bookmark");

            state.bookmarkedLocations.push(action.payload);

        },

        deleteBookmark: (state, action) => {
            console.log(" delete bookmark:" + action.payload);
            const id = action.payload;
            const updatedBookmerkedLocations = state.lcoa.filter((loc) => loc.location.name != id);
            state.bookmarkedLocations = updatedBookmerkedLocations;
        },

        setHomeLocation: (state, action) => {
            console.log('set home location ', action.payload);
            state.homeLocation =  action.payload;
            state.foreCast = action.payload.forecast.forecastday
        }
    }
});

export const { setLocations, addBookmarks, deleteBookmark, setHomeLocation } = weatherSlice.actions;
export default weatherSlice.reducer;
