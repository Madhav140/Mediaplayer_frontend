import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Row, Col } from 'react-bootstrap'
import {getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {
  const [allvideo,setallvideo] = useState([])

  const[deletevideostatus,setdeletevideostatus] = useState(false)

  const getAllUploadedVideo = async() =>{
      const response = await getAllVideos()
      const {data} = response
      console.log(data);
      setallvideo(data)
  }

   
  useEffect(()=>{              //to render data when loading the home page we use useffect and set its dependency to empty array
    getAllUploadedVideo()
    setdeletevideostatus(false)
  },[uploadVideoStatus,deletevideostatus])


  
  return (
    <>

        <Row>
           { allvideo.length>0? 
             allvideo.map((video)=><Col sm={12} md={6} lg={4} xl={3} >
             <Videocard displayvideo = {video} setdeletevideostatus={setdeletevideostatus}/>
            
           </Col>):
             <p>Nothing to display</p>
          }
        </Row>
    
    </>
  )
}

export default View