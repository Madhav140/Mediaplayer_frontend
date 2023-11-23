import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom';


function Home() {
 const [uploadVideoStatus,setuploadVideoStatus] = useState({})
 
  
  return (
    <>
           <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
             <div className="add-videos">
              <Add setuploadVideoStatus = {setuploadVideoStatus}/>
             </div>
             <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>Watch History</Link>
           </div>

           <div className='container-fluid mt-5 mb-5 d-flex justify-content-between w-100'>
                 <div className='all videos col-lg-9'>
                  <h4 className='mb-5 ms-5'>All Videos</h4>
                  <View uploadVideoStatus={uploadVideoStatus}/>
                  </div> 
                  <div className='category col-lg-3'>
                    <Category />
                  </div>   
           </div>
    </>
  )
}

export default Home