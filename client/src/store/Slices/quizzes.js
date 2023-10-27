import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Anyware from "../../API/config";

export const fetchQuizzes = createAsyncThunk("quizzes/fetchQuizzes", async () => {
    const { data } = await Anyware.get(`quizzes`);
    // console.log(data);
    return data;
});

const initialState = {
    quizzes:[]
};

const quizzestSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchQuizzes.fulfilled]: (state, action) => {
            state.loading = false;
            state.quizzes = { ...action.payload };
        }
    },
});
export default quizzestSlice.reducer;
