import React, { useState } from 'react'
import './contact.css';


function Contact() {
    const [user, setUser]=useState({
        First_name:'',
        Last_name:'',
        Email:'',
        Mobile:'',
        Address:'',
        Message:'',

    });

    let name,value;
const getUserData=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value })
    console.log(user)

};

    const postData=async(event)=>{
event.preventDefault();
const { First_name,
    Last_name,
    Email,
    Mobile,
    Address,
    Message}=user;

const Option= await fetch('https://reactform-5d3e7-default-rtdb.firebaseio.com/Reactform.json',{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
          },
          body:JSON.stringify({
              First_name,
        Last_name,
        Email,
        Mobile,
        Address,
        Message,

          }) 
})
if(Option){
    setUser({
        First_name:'',
        Last_name:'',
        Email:'',
        Mobile:'',
        Address:'',
        Message:'',
    })
    alert("Your Submission is Successful")

}
    }

    return (
         <div className='Form_container'>
                   <div className='Form_container_body'>
                             <form className='Contact_body' method='POST'>     
                                           <span className='Contact_body_title'><strong>Contact US</strong></span>
            <div className='Contact_name'>
            <span className='contact_name_title'>Your Name</span>
            <input className='contact_input' type='text'
                 name='First Name' 
                 placeholder='Enter your first name' 
                 defaultValue={user.First_name} onChange={getUserData} 
                 autoComplete='off' ></input>

                  <input className='contact_input' 
                  type='text' name='Last Name' 
                  placeholder='Enter your Last name' 
                  defaultValue={user.Last_name} 
                  onChange={getUserData} 
                  autoComplete='off' ></input>
          </div>
                    <div className='Contact_name'>
                              <span className='contact_input'>Email</span>
                              <input type="email" id="email" defaultValue={user.Email}
        placeholder='Enter your Email' 
                                    
                                    onChange={getUserData} 
                                    autoComplete='off' 
                                    required ></input>
                                                                              
                                     </div>
          <div className='Contact_name'>
                    <span className='contact_name_title'>Mobile number</span>
                              <input className='contact_input' 
                              type='text' name='Mobile' 
                              placeholder='Your number' 
                              value={user.Mobile} 
                              onChange={getUserData} 
                              autoComplete='off' 
                              required></input>
          </div>
          <div className='Contact_name'>
                    <span className='contact_name_title'>Address</span>
                              <input className='contact_input' 
                              type='text' name='Address' 
                              placeholder='Your Address' 
                              value={user.Address} 
                              onChange={getUserData} 
                              autoComplete='off' 
                              required></input>
          </div>
          <div className='Contact_name'>
                    <span className='contact_name_title'>Your Message here....</span>
                              <textarea  className='contact_input' 
                              name='Message' placeholder='Type here..' 
                              value={user.Message} 
                              onChange={getUserData}
                            autoComplete='off' required></textarea>
          </div>
          
                    <div className='Contact_name_button'>
                              <button onClick={postData} >Submit</button>
          
          </div>

           </form>


          </div>




          </div>
    )
}

export default Contact;
