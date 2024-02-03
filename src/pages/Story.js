import React from 'react'
import Nav from '../components/Nav'
import BottomPage from '../components/BottomPage';
import TeamCard from '../components/TeamCard'
import TeamData from '../lib/TeamData'


const Story = () => {
  return (
    <>
    <Nav />
    <div className='story-container'>
      <div className='story-image'>
 </div>

        <div className='story-second-container1'>
        <h2>Embarking on a Pioneering Journey: UPGS Foundation, Poised at the Threshold of Agricultural Eminence, Breaking Barriers and Cultivating Excellence</h2>
      <div className='story-second-container'>
        <p className='left'>From the luscious cashew orchards that sway in the Epe breeze to the vibrant array of crops that paint our fields, UPGS Foundation is a canvas of agricultural diversity. Our commitment to quality extends from the selection of seeds to the meticulous care given during growth, ensuring a kaleidoscope of premium produce.</p>
        <p className='right'>Beyond the fields, UPGS Foundation stands as a pillar of community empowerment. We believe in sharing prosperity, offering training, and creating employment opportunities to uplift the local community. Together, we grow not just crops but a sustainable and resilient community.</p>
          
      </div>
      </div>
 
  
    {/* <div className='all-team-card-container'>
      
      {TeamData?.map((person, index) => (
        <TeamCard TeamData={person} index={index}/>
      ))}
      
    </div> */}

   <BottomPage />
      
    </div>
    </>
  )
}


export default Story
