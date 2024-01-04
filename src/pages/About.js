import React from 'react'
import Nav from '../components/Nav'
import TeamCard from '../components/TeamCard'
import TeamData from '../lib/TeamData'

const About = () => {
  return (<>
  <Nav />
    <div>
      <div className='about-page-heading'>
        <div className='about-page-heading-text'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et im ad minim veniam quis nostrud exercit atiooris.</h1>
    <button className='read-more-button'>Read more</button>
     </div>
     <img src='https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-about-pic1.jpg' alt='about page heading' />
      </div>
      <div className='second-about-header'>
      <div className='before-team-card'>
        <h2>Meet Our Team</h2>

      </div>
      <div className='all-team-card-container'>
      
      {TeamData?.map((person, index) => (
        <TeamCard TeamData={person} index={index}/>
      ))}
      
    </div>
    </div>
    </div>
    </>
  )
}




export default About