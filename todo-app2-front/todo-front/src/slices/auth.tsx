import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  display_name: string,
  email: string,
};

//初期値
export const initialState: UserState = {
  display_name: '名無し',
  email: "",
};

//スライス
const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeDisplayName(state, action: PayloadAction<string>) {
      state.display_name = action.payload;
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  }
})

export const { changeDisplayName, changeEmail } = UserSlice.actions
export const UserReducer = UserSlice.reducer