import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addAllCategory, deleteCategory, getAVideo, getAllCategory, updatecategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row , Col } from 'react-bootstrap'
import Videocard from './Videocard';

function Category() {

  const[category,setcategory] = useState([])
  const[categoryname,setcategoryname] = useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //api function to add category
  const addCategory = async()=>{
    if(categoryname){
    let body = {
      categoryname,
      allvideos:[]
    }
   const response =   await addAllCategory(body)
   console.log(response);
   if(response.status>=200 && response.status<300){
    toast.success('Category added successfully')
    //state value is made null
    setcategoryname('')
    //close the modal
    handleClose()
    //to get the remaining category
    allcategory()
   }
   else{
    toast.error('Something went wrong')
   }
  }
  else{
    toast.warning('Please enter a Category name')
  }
  }

  //function to get all categories
  const allcategory = async()=>{
   const {data} = await getAllCategory()
   setcategory(data)
  }

  useEffect(()=>{
    allcategory()
  },[])

  //function to delete category
  const deleteAcategory = async(id) =>{
    await deleteCategory(id)
    //to get the remaining categories without refresh
    allcategory()
  }

  //function to prevent reload so that the data we send wont be lost
  const dragover = (e)=>{
    e.preventDefault()
  }

  const videodrop = async(e,categoryID)=>{
    console.log(`dropped on the category id is ${categoryID}`);
    //to get the data send from videocard
   let videoID =  e.dataTransfer.getData("videoID")
   console.log(videoID);
   const {data} = await getAVideo(videoID)
   console.log(data);
   const selectedcategory = category.find(item=>item.id===categoryID)
   selectedcategory.allvideos.push(data)
   console.log(selectedcategory);
 
   await updatecategory(categoryID,selectedcategory)
   allcategory()

  }
 
 

  return (
    <>
           <div className='d-grid ms-3'>
            <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
           </div>

          { category.length>0?
          category.map((item)=>(
          <div className='m-5 border border-secondary p-3 rounded'>
            <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videodrop(e,item?.id)}>
              <h6>{item.categoryname}</h6>
              <button onClick={()=>deleteAcategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <Row>
              <Col>
              {
              item?.allvideos?.length>0?
              item?.allvideos?.map((card)=>(<Videocard displayvideo={card} ispresent={true}  cat={item}/>))
              :<p>Nothing to display</p>
              }
              </Col>
            </Row>
           </div>)):
           <p className='m-3 fw-bolder fs-5 text-danger'>No category added</p>
           }

           <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
            >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil me-2 text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>
           
        

           <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
              <Form.Control onChange={(e)=>setcategoryname(e.target.value)} type="text" placeholder="Enter Category Name" />
           </Form.Group>
          
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' them='coloured' autoclose={2000}/>

    </>
  )
}

export default Category