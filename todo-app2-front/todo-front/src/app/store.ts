import { configureStore } from '@reduxjs/toolkit'
import { initialState as UserState, UserReducer } from '../slices/auth';

export class RootState {
  display_name = UserState;
};

const reducer = {
  display_name: UserReducer,
};

export const store = configureStore({
  reducer
});

//export default store;