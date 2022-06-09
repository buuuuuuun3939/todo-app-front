import { configureStore } from '@reduxjs/toolkit'
import { initialState as UserState, UserReducer } from '../slices/auth';

export class RootState {
  user = UserState;
};

const reducer = {
  user: UserReducer,
};

export const store = configureStore({
  reducer
});

//export default store;