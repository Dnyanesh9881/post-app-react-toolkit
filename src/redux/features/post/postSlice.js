import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



let initialstate={
    loading:true,
    success:[],
    error:""
};

const postSlice=createSlice({
   name:"post",
   initialState:initialstate,
   reducers:{
       pending: (state)=>{state.loading=true},
    fulfilled: (state,action)=>{ 
        //   return {...state, loading: false, sucess: action.payload, error: ''}
        state.loading = false 
        state.success = action.payload
        state.error = ''  },
       rejected: (state, action)=> {
         //   return {...state, loading: false, sucess: [], error: action.payload}
         state.loading = false
         state.success = []
         state.error = action.payload
        }
   }
})

const {pending, fulfilled, rejected}=postSlice.actions;

export function fetchPost(){
     return async (dispatch)=>{
         dispatch(pending());
        try{
            const response=await axios.get("https://gauravgitacc.github.io/postAppData/posts.json");
            const posts=response.data;
             dispatch(fulfilled(posts));
        }catch(error){
            dispatch(rejected(error.message));
        }
     }
    
}

export default postSlice.reducer;