import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userData: IState[];
}
export interface IState {
    title: string,
    firstName: string,
    lastName: string,
    birhdate: string,
    citizenNo?: string,
    nation: string,
    gender: string,
    phone: string,
    passport?: string,
    salary: string,
}
const initialState: UserState = {
    userData: []
}
const userData = createSlice({
    name: 'userData',
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<IState[]>) => {
        state.userData = action.payload;
      },
    },
  });
  

export const { setUserData } = userData.actions;

export default userData.reducer;
