import React, { useState } from "react";
import ButtonGreen from "./ButtonGreen";
const Form = () => {
    const [input, setInput] = useState({
        fname:'',
        email:'',
        password:'',
        tel:''
    });
    const [inputList, setInputList] = useState([]);
    const getInput=(e)=>{
        const {name,value} =e.target;
        setInput((oldItem)=>{
            return {...oldItem,
                    [name] : value,
                    }
        })
    }
    
    const submit=(e)=>{
        e.preventDefault();
        setInputList(input);
        setInput({
            fname:'',
            email:'',
            password:'',
            tel:''
        })
    }
    return (
        <>
        <section className="formSection">
            <form action="" onSubmit={submit}>
            <div id="form">
            <p>request a quote</p>
                    <h2>booking for knowing estimate</h2>
                <input type="text" value={input.fname} name="fname" id="" onChange={getInput} placeholder="First Name" />
                <input type="email" value={input.email}  name="email" id="" onChange={getInput}  placeholder="Enter your Email"/>
                <input type="password" value={input.password}  name="password" id="" onChange={getInput}  placeholder="Enter your Password"/>
                <input type="tel" value={input.tel}  name="tel" id="tel" onChange={getInput} placeholder="Enter your phone"/>
                <button className="btn" type="submit" ><ButtonGreen text='click me'/></button>
                </div>
            </form>
            <p>{inputList.fname}</p>
            <p>{inputList.email}</p>
            <p>{inputList.password}</p>
            <p>{inputList.tel}</p>
            </section>
        </>
    );
};

export default Form;
