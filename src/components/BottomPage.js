import React from 'react'
import CreateForm from './CreateForm';

const BottomPage = () => {

  return (
    <>
    <div className='bottom-page-container'>
        <div className='natural-flavor-img'>

        </div>
        <div className='bottom-second-div'>
            <div className='bottom-contact'>
                <h1>
                Contact us
                </h1>
                <p>Thank you for visiting our website</p>
               
                <button className='read-more-button'>
                    Contact Us
                </button>
                            <CreateForm />
                <div className='contact-faq'>
                    <ul className='faqs-list'>
                        <li><a>FAQ</a></li>
                        <li><a>Support</a></li>
                        <li><a>Useful info</a></li>
                    </ul>
                </div>

            </div>
            </div>
         
        <div className='bottom-last-div'>
        © 2023 UPGS | All Rights Reserved | Powered by <a href='https://oluwatobiolajideportfolio.vercel.app' target='_blank'>Tobi</a>
        </div>
    </div>
    </>
  )
}



export default BottomPage