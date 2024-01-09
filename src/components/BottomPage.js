import React, { useState } from 'react'
import CreateForm from './CreateForm';

const BottomPage = () => {
    const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(true);
  };

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
               
                <button className='read-more-button'
                onClick={toggleForm}>
                    Contact Us
                </button>
                {showForm && (
                    <div className='box-active'>
                            <CreateForm setShowForm={setShowForm}/>
                    </div>
                )}
                <div className='contact-faq'>
                    <ul className='faqs-list'>
                        <li><a>FAQ</a></li>
                        <li><a>Support</a></li>
                        <li><a>Useful info</a></li>
                    </ul>
                </div>

            </div>
            <div className='bottom-middle'>
                <h1>
                Core Values
                </h1>
                <ul>
                    <li>Sustainable Practices, Positive Impact.</li>
                    <li>Upholding Trust and Transparency.</li>
                    <li>Customer-Centric</li>
                    <li>Teamwork</li>
                </ul>
            </div>
            <div className='bottom-last'>
                <h1>
                Our mission
                </h1>
                <p className='bullet-points'>
                At UPGS, we are driven by a steadfast commitment to Upholding Trust and Transparency. Our mission is to concisely describe the purpose and primary objectives of your business. We believe in Teamwork and strive to describe the positive impact or change you aim to bring.
                </p>
                <span><a href=''>Read more...</a></span>
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