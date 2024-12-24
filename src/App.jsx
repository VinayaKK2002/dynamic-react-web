import { Stack,Button } from '@mui/material'
import { useState,useRef } from 'react'
import './App.css'
function App() {
   const [name,setName]=useState('')
   const [address,setAddress]=useState('')
   const [mobile,setMobile]=useState(0)
   const [email,setEmail]=useState('')
   const [gender,setGender]=useState('')
   const [birth,setBirth]=useState('')
   const [course,setCourse]=useState('')

   const [invalidName,setinvalidName]=useState(false)
   const [invalidMobile,setinvalidMobile]=useState(false)
   const [invalidEmail,setinvalidEmail]=useState(false)
   const [invalidDob,setinvalidDob]=useState(false)

   const radioInput=(gen)=>{
      
     setGender(gen.value)

   }
   const addressInput=(add)=>{
      
    setAddress(add.value)

  }
  const boxInput=(drop)=>{
    if(drop.value !== "") {
      setCourse(drop.value)

    } 

  }

  const validateInput=(inputTag)=>{
    console.log(inputTag,typeof inputTag);
    const {name,value}=inputTag
    console.log(name,value);
    console.log(value.match(/^[a-zA-Z]+(\ [a-zA-Z]+)*$/));
    if(name=='name'){
      setName(value)
      if(!!value.match(/^[a-zA-Z]+(\ [a-zA-Z]+)*$/)){
        setinvalidName(false)

      }else{
        setinvalidName(true)
      }

    }
    else if(name=='mobile'){
      setMobile(value)
      if(!!value.match(/^[0-9]{10}$/)){
        setinvalidMobile(false)

      }else{
        setinvalidMobile(true)
      }
    }
      else if(name=='email'){
        setEmail(value)
        if(!!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
          setinvalidEmail(false)
  
        }else{
          setinvalidEmail(true)
        }

    }
    else if(name=='birth'){
      setBirth(value)
      if(!!value.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/)){
        setinvalidDob(false)

      }else{
        setinvalidDob(true)
      }

  }
}
const submitForm=(e)=>{
  e.preventDefault()
  if(name && mobile && email && birth && gender && address && course ){
    alert(`Successfully submitted 
  Details
  Name:  ${name}
  Address:  ${address}
  Email:  ${email}
  Phone Numer:  ${mobile}
  Gender:  ${gender}
  Date of Birth:  ${birth}
  Course:  ${course}
  `)

  }
  else{
    alert("please fill all details")
  }
}


const formRef = useRef(null);

  const clearForm = () => {
    formRef.current.reset();
  };


  return (
    <>
    <div className='container '>
      <form ref={formRef}   action="" className='container  border border-black mt-3  w-50'>
      <h1 className=' text-center mb-4 '>Registration Form</h1>

        {/* Name */}
      <div class="row">
            <div class="col">
              <label className='fw-bolder'  htmlFor="">Name</label>
                 <input onChange={(e)=>validateInput(e.target)} type="text" class="form-control" placeholder="name" name="name"/>
            </div>
            {/* <div class="col">
              <label htmlFor="">Last name</label>
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
            </div> */}
      </div>
      {/* invalid name */}
      {
        invalidName && <div className='text-danger fw-bolder mb-3'>
          Invalid name
        </div>
      }
      <div>

      </div>



        {/* Address */}
        <div class="mb-3">
             <label className='fw-bolder' for="exampleFormControlTextarea1" class="form-label">Address</label>
              <textarea name='address' onChange={(e)=>addressInput(e.target)} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter address'></textarea>
         </div>



         {/* MObile */}
         <div class="mb-3">
              <label className='fw-bolder' for="" class="form-label">Mobile Number</label>
              <input onChange={(e)=>validateInput(e.target)} name='mobile' type="text" class="form-control" id="Inputmobile" />
         </div>
          {/* invalid mobile */}
      {
        invalidMobile && <div className='text-danger fw-bolder mb-3'>
          Invalid mobile(Number contain 10 digit)
        </div>
      }




         {/* email */}
         <div class="mb-3">
              <label className='fw-bolder' for="exampleInputEmail1" class="form-label">Email </label>
              <input onChange={(e)=>validateInput(e.target)}  name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         </div>
           {/* invalid email */}
      {
        invalidEmail && <div className='text-danger fw-bolder mb-3'>
          Invalid Email
        </div>
      }




         {/* Gender */}
          <label  className='me-3 fw-bolder' htmlFor="">Gender</label><br />
         <div class="form-check form-check-inline">
             <input onChange={(e)=>radioInput(e.target)}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
            <label class="form-check-label" for="inlineRadio1">Male</label>
          </div>
          <div class="form-check form-check-inline">
               <input onChange={(e)=>radioInput(e.target)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
               <label class="form-check-label" for="inlineRadio2">Female</label>
           </div>
           <div class="form-check form-check-inline">
               <input onChange={(e)=>radioInput(e.target)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Other"/>
               <label class="form-check-label" for="inlineRadio2">Other</label>
           </div>
           <br/> <br/>



           {/* date of birth */}
           <div class="col">
              <label className='fw-bolder' htmlFor="">Date Of Birth</label>
              <input onChange={(e)=>validateInput(e.target)} type="text" class="form-control" placeholder='dd/mm/yyyy' name="birth"/>
            </div>
               {/* invalid date of birth */}
               {
                    invalidDob && <div className='text-danger fw-bolder mb-3'>
                    Invalid Date of Birth
            </div>
             }



         {/* Courses */}
        <div  class="col-md-7">
             <label className='fw-bolder' for="inputState" class="form-label">Courses</label>
             <select id="inputState" placeholder='select' class="form-select" name='course' onChange={(e)=>boxInput(e.target)}>
                 <option value="" selected>Choose</option> 
                 <option>Biology</option>
                  <option>Computer Science</option>
                  <option>Commerce</option>
                  <option> Humanities </option>
              </select>
        </div> <br/>  

         {/*buttons  */}

        <Stack direction="row" spacing={2}>
             <Button onClick={clearForm} variant="outlined">Cancel</Button>
             <Button  onClick={submitForm} disabled={invalidDob || invalidEmail || invalidMobile || invalidName } variant="contained">Register</Button>

         
        </Stack>
         <br />

      </form>
    </div>
      
    </>
  )
}

export default App
