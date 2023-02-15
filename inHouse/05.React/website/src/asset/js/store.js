import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name : 'state이름',
    initialState : '값'
});

export default configureStore({
  reducer: { 
    user : user.reducer
   }
}) 