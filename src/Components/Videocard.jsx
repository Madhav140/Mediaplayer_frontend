import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addtoHistory, deleteVideo,getACategory,getAllCategory,updatecategory } from '../services/allAPI';

function Videocard({displayvideo,setdeletevideostatus,ispresent,cat}) {

  const [show, setShow] = useState(false);
  const[category,setcategory] = useState([])
  


  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true)
  const {caption , embedlink} = displayvideo
  const today = new Date()
/*   console.log(today);
 */
  let timestamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
/*   console.log(timestamp);
 */
     let videodetails = {
      caption,embedlink,timestamp
     }   
     
    await addtoHistory(videodetails)

  }

  const removevideo = async(id)=>{
    const response = await deleteVideo(id)
    setdeletevideostatus(true)
  }

  //function to drag videocard
  const carddrag = (e,id)=>{
 /* console.log(`the id of the video is ${id}`);  */
     
 //to send the data to category
     e.dataTransfer.setData("videoID",id)
  }

  const allcategory = async()=>{
    const {data} = await getAllCategory()
    setcategory(data)
   }

  
   useEffect(()=>{
    allcategory()
  },[])

  

 const removecatvideo = async(id,catid)=>{
  
   
   const selectedcategory = category.find(item=>item.id===catid)
   const selectedarray = selectedcategory.allvideos
   const index = selectedarray.find((item)=>item.id===id)
   const indexvalue = selectedarray.indexOf(index)
                    
              
   selectedcategory.allvideos.splice(indexvalue,1)

   await updatecategory(catid,selectedcategory)
   allcategory()
   console.log(selectedcategory);
     
 }

 
 
  
 

  return (
    <>
          <Card style={{ width:'100%rem',height:'300px'}} className='ms-5 mb-3' draggable onDragStart={(e)=>carddrag(e,displayvideo?.id)}>
      <Card.Img onClick={handleShow} height={'280px'}  variant="top" src={displayvideo.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center' >
            <h6>{displayvideo.caption}</h6>
            {  !ispresent ?
            <button onClick={()=>removevideo(displayvideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
               :
             <button onClick={()=>removecatvideo(displayvideo?.id,cat?.id)}  className='btn btn-warning'><i class="fa-solid fa-trash-can"></i></button>
               }       
 </Card.Title>
      </Card.Body>
    </Card>

    
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayvideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <iframe width="100%" height="400" src={`${displayvideo.embedlink}?autoplay=1`} title={displayvideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Videocard
