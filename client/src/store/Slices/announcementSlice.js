import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Anyware from "../../API/config";

export const fetchAnnouncement = createAsyncThunk("announcement/fetchAnnouncement", async () => {
    try{
        const { data } = await Anyware.get(`announcements`);
        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
});

const initialState = {
    announcement: []
};

const announcementSlice = createSlice({
    name: "announcement",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAnnouncement.fulfilled]: (state, action) => {
            state.loading = false;
            state.announcement =action.payload ;
        }
    },
});
export default announcementSlice.reducer;
