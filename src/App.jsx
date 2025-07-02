
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
 const [amount,setAmount] = useState(0)
 const [rate,setRate] = useState(0)
 const [year,setYear] = useState(0)
 const [interest,setInterest] = useState(0)


 const [vprinciple,setVprinciple]=useState(false)
 const [vrate,setVrate]=useState(false)
 const [vyear,setVyear]=useState(false)

 const inputvalidation=(a)=>{
  const {name,value}=a;
  console.log(name,value);
  console.log(!!value.match(/^\d+(\.\d+)?$/));
      if(name=='principle'){
        setAmount(value)
        if(!!value.match(/^\d+(\.\d+)?$/)){
            setVprinciple(false)
        }else{
            setVprinciple(true)
        }

      }else if(name=='rate'){
        setRate(value)
         if(!!value.match(/^\d+(\.\d+)?$/)){
          setVrate(false)

         }else{
          setVrate(true)
         }

      }else{
        setYear(value)
       if(!!value.match(/^\d+(\.\d+)?$/)){
            setVyear(false)

       }else{
            setVyear(true)
       }

       }
 }
const handleCalculate=(e)=>{
    e.preventDefault()

   if(amount && rate && year){
        setInterest(amount*year*rate/100);
   }else{
    alert("please enter complete details")
   }
 
  }
  const handleReset=()=>{
    setInterest(0)
    setAmount(0)
    setRate(0)
    setYear(0)
    setVprinciple(false)
    setVrate(false)
    setVyear(false)
  }



  return (
    <>
      <div style={{width:'100%',minheight:'100vh'}} className='d-flex justify-content-center  bg-dark p-5 '>
         <div className='bg-white rounded border p-5 fit-content-sm'> 
             <h2 className='text-center'>Simple Interest</h2>
              <p className='text-center'>Calculate your simple interest Easily</p>
            <div className='bg-warning text-light text-center rounded p-2'>
                  <h1 className='fw-bolder'>{interest}</h1>
                  <p className='fw-bolder' style={{fontSize:'25px'}}>Simple Interest</p>
            </div>
            <form className='mt-5' >
                 <div className='my-2'>
                     <TextField value={amount || ""} name='principle' onChange={e=>inputvalidation(e.target)} className='w-100 fs-2' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
                 </div>
               { vprinciple&&  <div className='text-danger fw-bolder'>Invalid Principle Amount</div>}
               <div className='my-3'>
                    <TextField value={rate || ""} name='rate' onChange={e=>inputvalidation(e.target)} className='w-100 fs-2' id="outlined-rate" label="Rate of Interest(%)" variant="outlined" />
                  </div>
                  { vrate&&  <div className='text-danger fw-bolder '>Invalid Rate</div>}

                  <div className='my-3'>
                      <TextField value={year || ""} name='year' onChange={e=>inputvalidation(e.target)} className='w-100 fs-2 ' id="outlined-year" label="Time Period(Yr)" variant="outlined" />
                   </div>
                   { vyear&&  <div className='text-danger fw-bolder mb-3'>Invalid Year</div>}

                 <div>
                    <Stack direction="row" spacing={2}>
                        <Button type='submit' onClick={handleCalculate} disabled={vprinciple || vrate || vyear } style={{width:'55%',height:'50px'}} className='bg-dark p-2' variant="contained">Calculate</Button>
                       <Button onClick={handleReset} style={{width:'40%',height:'50px'}} className='border border-black p-2' variant="outlined">Reset</Button>
                    </Stack>
              </div>
            </form>
        </div>
      </div>
      
    </>
  )
} 

export default App
