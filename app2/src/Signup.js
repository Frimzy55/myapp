import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Signup() {
  return (
    <div className=' d-flex w-100 vh-100 bg-primary justisfy-content-center'> 
       <div className='bg-white p-3 rounded w-25'>
          <h1>Sign up</h1>
        <form>
            <div className='mb-3'>
                <label htmlFor='name'><strong>Name</strong></label>
                <input type='text' placeholder='Enter name' name='name'></input>

            </div>

        </form>
        
        </div> 


    </div>
  )
}

export default Signup