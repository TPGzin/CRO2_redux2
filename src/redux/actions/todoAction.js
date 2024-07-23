import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTodo } from '../reducers/todoReducer';
// địa chỉ API bạn nên cho vào 1 biến, để sau có chỉnh sửa sẽ không phải chỉnh nhiều lần
const api_url = 'http://192.168.82.97:3000/users';
export const fetchTodos = () => {
 return async dispatch => {
   try {
     const response = await fetch(api_url);
     const data = await response.json();
     // dữ liệu lấy được từ api về, duyệt mảng và lưu vào store của redux
      // console.log(data);
     data.forEach(row => {
       //    dữ liệu server trả về dạng: {
       //     title: "title 1",
       //     status: false,
       //     id: "1"
       //     },
      
       dispatch(addTodo( row));  // trong ví dụ trước ở screen khi thêm sẽ sử dụng dispatch, ở ví dụ này cũng dùng lại cách đó
     });
   } catch (error) {
     console.error('Error fetching todos:', error);
   }
 };
};
  