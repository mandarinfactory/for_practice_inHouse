import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name : 'state이름',
    initialState : '값'
});

const goods = createSlice({
    name : 'goods',
    initialState : [10, 11, 12]
})

const list = createSlice({
    name : 'list',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ]
})


export default configureStore({
  reducer: { 
    user : user.reducer,
    goods : goods.reducer,
    list : list.reducer
   }
}) 