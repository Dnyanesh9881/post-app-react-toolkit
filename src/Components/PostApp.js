import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchPost } from "../redux/features/post/postSlice";


const PostApp=()=>{
   
  let dispatch=useDispatch();

    let {loading, success, error}=useSelector(state=>state.post);
    console.log(success);
    useEffect(()=>{
        dispatch(fetchPost())
   },[dispatch])
    return (
        <div>
    {
    success && success.map(item=>(
        <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
        </div>
    ))}
        </div>
    )}

    export default PostApp;