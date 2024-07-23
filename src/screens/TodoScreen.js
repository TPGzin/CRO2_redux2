import { useDispatch, useSelector } from "react-redux";
import {  Text, View } from "react-native";
import { useEffect, useState } from "react";
import { fetchTodos} from '../redux/actions/todoAction';
const TodoScreen  =()=>{
 
   //lấy  danh sách dữ liệu từ store của redux
   const  listTodo =  useSelector(state=>state.listTodoStore.listTodo);
   // lấy đối tượng để điều khiển các action
   const dispatch = useDispatch();// của redux
   // khi vào ứng dụng sẽ gọi action fetchTodos để kéo dữ liệu từ API về store của redux
   useEffect(() => {
       dispatch(fetchTodos());
     }, [dispatch]);
  
   return (
       <View>
            
           {/* in danh sách todo: */}
           {
               listTodo.map(row =>(
                 <View key={row.id}
                  style={{margin:10,padding:10, borderColor:'blue', borderWidth:1}}>
                    
                   <Text>{row.title}  -  {row.id}</Text>
                    
                 </View> 
               ))
           }
       </View>
   );
}
export default TodoScreen;