import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'location',
    initialState: {
        locations: {}
    },
    reducers: {
        setLocations: (state, action) => {
            console.log(" set locationss");
            state.tasks = action.payload;
        },

        addBookmarks: (state, action) => {
            console.log(" add location");

            state.locations.push(action.payload);

        },

        

        deleteBookmark: (state, action) => {
            console.log(" delete task:" + action.payload);
            const id = action.payload
            const updatedTasks = state.tasks.filter((location) => location.id != id);
            state.tasks = updatedTasks;
        }
    }
});

export const { setLocations, addBookmarks, deleteBookmark } = weatherSlice.actions;
export default weatherSlice.reducer;
