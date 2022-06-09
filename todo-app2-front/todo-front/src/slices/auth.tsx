import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  display_name: string,
};

//初期値
export const initialState: UserState = {
  display_name: '名無し',
};

//スライス
const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeDisplayName(state, action: PayloadAction<string>) {
      state.display_name = action.payload;
    },
  }
})

//アクションの切り出し
export const { changeDisplayName } = UserSlice.actions

//リデューサの切り出し
export const UserReducer = UserSlice.reducer