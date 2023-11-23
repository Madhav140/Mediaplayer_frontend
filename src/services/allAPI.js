import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

/* const { commonAPI } = require("./commonAPI");
const { serverURL } = require("./serverURL"); */


//upload video
export const uploadVideo = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all uploaded videos
export const getAllVideos = async()=>{
   return await commonAPI('GET',`${serverURL}/videos`,"")
}

//to delete a video
export const deleteVideo = async(id)=>{
return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//add to history API
export const addtoHistory = async(videodetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videodetails)
   }

//api to get history from json-server   
export const getAllHistory = async()=>{
   return await commonAPI('GET',`${serverURL}/history`,"")
   }

//api call to delte history
   export const deleteVideoHistory = async(id)=>{
      return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
      }

//api to add category  
 export const addAllCategory = async(body)=>{
   return await commonAPI('POST',`${serverURL}/categories`,body)
   }

//api to get all category from json server
 export const getAllCategory = async()=>{
   return await commonAPI('GET',`${serverURL}/categories`,"")
   }

//api to delete categories
   export const deleteCategory = async(id)=>{
      return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
      }

//api call to geta particular video from backend videos
export const getAVideo = async(id)=>{
   return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
   }

//api to update the category with new videos
export const updatecategory = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}


//api call to geta particular category from backend 
export const getACategory = async(id)=>{
   return await commonAPI('GET',`${serverURL}/categories/${id}`,"")
   }

