import React, { useState } from 'react'

const CreateForm = () => {
    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ message, setMessage ] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();
  };

  return (
    
    <div className='create'>
        
        <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
               value={fullName}
               type="text"
               required
               onChange={(e)=> setFullName(e.target.value)}
               />

                  <label>Email</label>
            <input
               type="email"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
                  <label>Phone Number</label>
            <input
               type="text"
               required
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               />
                  <label>Message</label>
                  <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}>

                  </textarea>

                  <button>Submit</button>
            
        </form>
    </div>
  )
}


export default CreateForm