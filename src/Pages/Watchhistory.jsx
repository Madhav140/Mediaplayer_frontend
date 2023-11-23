import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistory, getAllHistory } from '../services/allAPI'

function Watchhistory() {

  const[history,sethistory] = useState([])


  const allhistory = async() =>{
   const response =  await getAllHistory()
   const {data} = response
/*    console.log(data);
 */   sethistory(data)
  }

  console.log(history);

    
   useEffect(()=>{
    allhistory()
   },[])

   //finction to remove watch history
   const removehistory = async(id)=>{
    await deleteVideoHistory(id)
    //to get the remaining history
    allhistory()
   }

  return (
    <>
         <div className='container mt-5 d-flex justify-content-between'>
          <h3>Watch History</h3>
          <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</Link>
         </div>

       <table className='table mt-5 mb-5 container'>
         <thead>
          <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
          </tr>
         </thead>
         <tbody>
         { history.length>0?
           history.map((item,index)=>(
         <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td><a href={`${item.embedlink}?autoplay=1`} target='_blank'>{item.embedlink}</a></td>
            <td>{item.timestamp}</td>
            <td><button onClick={()=>removehistory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>)):
          <p className='mt-5 fw-bolder fs-4 text-danger text-center'>No Watch-History</p>
          }
         </tbody>

       </table>
    </>
  )
}

export default Watchhistory