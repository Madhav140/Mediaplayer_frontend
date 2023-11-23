import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
         <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center flex-column mt-5 w-100'>

            <div className='footer d-flex justify-content-evenly align-items-evenly w-100'>

              <div className="website" style={{width:'400px'}}>
                <h4><i class="fa-solid fa-video fa-beat text-warning me-4"></i>{' '}
              Video Player</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis totam quaerat enim adipisci? Voluptatem voluptatibus enim fugit delectus aliquam obcaecati quod vel facilis dolorem omnis. Ex error rem ipsum dolor, sit amet consectetur adipis</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing e</p>
              </div>

              <div className="links d-flex flex-column">
                <h4>Links</h4>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                <Link to={'home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                <Link to={'watch-history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>

              </div>
              <div className="guides d-flex flex-column">
              <h4>Guides</h4>
              <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
              </div>
              <div className="contact">
                  <h4 className='mb-3'>Contact Us</h4>
                  <div className='d-flex mb-4'>
                    <input type="text" className='form-control' placeholder='Enter your Email id'/>
                    <button className='btn btn-warning text-white ms-2'>Subscribe</button>
                  </div>
                  <div className='icons d-flex justify-content-evenly'>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github fa-2x"></i></Link>
                  </div>

              </div>
            </div>
            <p>Copyright © 2023 Media Player. Built with React</p>
         </div>
    </>
  )
}

export default Footer