import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name : 'state이름',
    initialState : '값'
});

const goods = createSlice({
    name : 'goods',
    initialState : [10, 11, 12]
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    goods : goods.reducer
   }
}) 