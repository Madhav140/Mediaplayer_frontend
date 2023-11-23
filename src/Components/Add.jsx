import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setuploadVideoStatus}) {
   const[video,setvideo] = useState({
    id:'',
    caption:"",
    url:'',
    embedlink:''
   })
   ;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function embedvideolink(e){
    const {value} = e.target
    const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setvideo({...video,embedlink:link})
  }
  console.log(video)

  const handleupload = async()=>{
       const {id,caption,url,embedlink} = video
       if(!id || !caption || !url || !embedlink){
        toast.warning('please fill the form completely')
       }
       else{
     const response =  await uploadVideo(video)
        if(response.status>=200 && response.status<=300){
          setuploadVideoStatus(response.data)
          toast.success('Uploaded Successfully')
          handleClose()
        }
        else{
          console.log(response);
          toast.error('Something went wrong.Try again')
        }
       }
  }
   
  return (
    <>
            <div className='d-flex align-items-center'>
              <h5>Upload New Videos</h5>
              <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
            </div>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
            >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>
           
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>setvideo({...video,id:e.target.value})} type="text" placeholder="Enter Video ID" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>setvideo({...video,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>setvideo({...video,url:e.target.value})} type="text" placeholder="Enter Video Image URL" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>{embedvideolink(e)}} type="text" placeholder="Enter Youtube Video Link" />
           </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleupload} variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
    <ToastContainer position='top-center' theme='coloured' autoClose={2000}/>
    
    </>
  )
}

export default Add

