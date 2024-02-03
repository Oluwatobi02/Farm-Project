import React from 'react'
import Nav from '../components/Nav'
import BottomPage from '../components/BottomPage'

const Contact = () => {
  return ( <>
    <Nav />
    <div className='contact-container'>
      <div className='contact-image'>
        <div className='contact-box'>
          <div className='contact-items'>
            
          <div className='contact-box-header'>
           <h1 className='contact-header-text'>Feel free to contact us. We are here to answer all your questions</h1>
          </div>
          <div className='contact-box-time'>
            <ul className='items-time-list'>
              <li>
              <label>Monday - Saturday
              <hr className='contact-hr'/>
              </label>
              <span>8am - 4pm</span>
              </li>

              <li>
              <label>Sunday
              <hr className='contact-hr'/>
              </label>
              <span>9am - 3pm</span>
              </li>
            </ul>
          </div>
          <div className='contact-box-contacts'>
            <div className='box-contacts-container'>
              <div className='contact-type call'>
                <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-contact-icon1.png' alt='contact-image'/>
                <h2>Call us</h2>
                <span>
                  +123456789
                </span>
              </div>
              <div className='contact-type address'>
                <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-contact-icon2.png' />
                <h2>Address</h2>
                <span>
                Level 13, 2 Elizabeth St, Epe, Lagos, Nigeria
                </span>
              </div>
              <div className='contact-type email'>
                <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-contact-icon3.png' />
                <h2>Email</h2>
                <span>
                  oldwhisper98@icloud.com
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div>
      <BottomPage />
      </div>
      </div>
    </div>
    </>
  )
}




export default Contact