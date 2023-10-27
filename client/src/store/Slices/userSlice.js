import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Anyware from "../../API/config";

export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const { data } = await Anyware.get(`users/${userId}`);
  return data.data;
});

const initialState = {
  user: {
    name:'',
    age:'',
    image:{
      url:'',
      publicId:''
    }
  },
  loading: false,
  error: null,
  isLogin:false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.loading = false;
      state.user = { ...action.payload };
    },
    ResetRedux: () => initialState,
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = { ...action.payload };
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

  }
});

export const { addInfo, ResetRedux, setUnseen, addUnseen, removeUnseen } =
  userSlice.actions;
export default userSlice.reducer;
