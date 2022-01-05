import React, { useState } from 'react'
import './contact.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
   

}
    }

    return (
         <div className='Form_container'>
                   <div className='Form_container_body'>
                   <span className='Contact_body_title'><strong>Contact Us</strong></span>
            <form className='Contact_body' method='POST'>     
                                           
            <div className='Contact_name'>
            <span className='contact_name_title'>Please Enter Your Name</span>
            <TextField className='contact_input'  onChange={getUserData} 
                 autoComplete='off'id="filled-error" label="First_Name" defaultValue={user.First_name} variant="outlined" required />    
                 <TextField className='contact_input'  onChange={getUserData} 
                 autoComplete='off' id="filled-error" label="Middle & Last_Name" defaultValue={user.Last_name} variant="outlined"  required/>          
                
          </div>
                    <div className='Contact_name'>
                              <span className='contact_name_title'>Email</span>
                              <TextField className='contact_input'  onChange={getUserData} 
                 autoComplete='off' id="filled-error" label="Email" defaultValue={user.Email} variant="outlined" required /> 
                </div>
          <div className='Contact_name'>
                    <span className='contact_name_title'>Mobile number</span>
                    <TextField className='contact_input'  onChange={getUserData} 
                 autoComplete='off' id="filled-error" label="Mobile Number" defaultValue={user.Mobile} variant="outlined" required/> 
          </div>
          <div className='Contact_name'>
                    <span className='contact_name_title'>Address</span>
                              <TextField  className='contact_input'  label="Address Here"      defaultValue={user.Address}   variant="outlined" required />
                                        </div>
          <div className='Contact_name'>
                    <span className='contact_name_title'>Your Message here....</span>
                    <TextField className='contact_input'
                   label="Type your Message" required
                  multiline/>
          </div>
          
                    <div className='Contact_name_button'>
                              <Button variant="contained" color="success" onClick={postData} >Submit</Button>
          
          </div>

           </form>


          </div>




          </div>
    )
}

export default Contact;
