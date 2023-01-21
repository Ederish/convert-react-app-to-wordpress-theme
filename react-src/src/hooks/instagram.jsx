import axios from "axios";
import React from "react";

const token =`IGQVJYRWVjQlZAublZA3SzRTWTlPZA3VlRXZAORW1OXzdCVlcxRlllbC1OeWI1Qk0xN3VTWDZAvZAWxISHB5R2hiaFRMYVdzXzlRbjBZAQXZA2bzlIenZAFWXBVUGE4anlhUFFLNW5rUEFXMTRPY09DUkFJUmRVZAQZDZD`;
const InstApi=`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`;

instagram = ()=>{
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(InstApi).then((response) => {
       setPost(response.data.data);
    });
  }, []);

  return (console.log('!! INSTAGRAM !! ',post));
}
export default instagram();