import React, { useState } from "react";
import ButtonGreen from "./ButtonGreen";
// import './Form.css'


const Form = () => {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''
    })
    const [fullName1, setFullName1] = useState('')
    const inputEvent = (e) => {
        const { name, value } = e.target;
        setFullName((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const clickBtn = (e) => {
        e.preventDefault();

    }

    return (
        <>
        <section className="formSection">
            <form action="" onSubmit={clickBtn}>
                <div id="form">
                    <p>request a quote</p>
                    <h2>booking for knowing estimate</h2>
                    {/* <h1>F-name {fullName.fname}</h1>
                    <h1>L-name {fullName.lname}</h1>
                    <h1>email {fullName.email}</h1>
                    <h1>phone {fullName.phone}</h1> */}
                    <input onChange={inputEvent} name="fname" value={fullName.fname} type="text" placeholder="First Name" id="formInput" />
                    <input onChange={inputEvent} name="lname" value={fullName.lname} id="formInput" type="text" placeholder="Second Name" />
                    <input onChange={inputEvent} id="formInput" type="email" name="email" value={fullName.email} placeholder="Enter your Email" />
                    <input onChange={inputEvent} id="formInput" type="tel" name="phone" value={fullName.phone} placeholder="Enter your phone" />
                    <button className="btn" type="submit" ><ButtonGreen text='click me'/></button>
                </div>
            </form>
        </section>
        </>
    )
}

export default Form;