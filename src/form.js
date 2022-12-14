import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Form() {
        const data = {name:"", email:"", password:""};
        const [inputData, setInputData] = useState(data)
        console.log(inputData)
        function handleData(e){
            setInputData({...inputData, [e.target.name]: 
                e.target.value})
        }
        const [flag, setFlag] = useState(false)
        useEffect(() =>{
            console.log("Registered")
        }, [flag])
        function handleSubmit(e){
            e.preventDefault();
            if(!inputData.name || !inputData.email || !inputData.password){
                alert("All Input Fields are Mandatory")
            }
            else{
                setFlag(true)
            }
        }
return (
    <>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
        <input type="text" placeholder='Enter Your Name' name='name' value={inputData.name} onChange=
             {handleData} ></input>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Email' name='email' value={inputData.email} onChange=
             {handleData} ></input>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Password' name='password' value={inputData.password} onChange=
             {handleData} ></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
    </>
    </>


)
}