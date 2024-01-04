import React from 'react'

const TeamCard = ({ TeamData, index }) => {
    const backgroundImageUrl = `url('${TeamData.img}'`
  return (
    <div className='team-card-container' key={index}>
        <div className='team-card-info'>
            <h2>{TeamData.name}</h2>
            <div className='team-card-image' style={{backgroundImage: backgroundImageUrl}}></div>
            <p>{TeamData.bio}</p>
        </div>
    </div>
  )
}


export default TeamCard
