import React, { useState } from "react";
import ButtonGreen from "../Component/ButtonGreen";

const UserForm = () => {
    const [input, setInput] = useState({
        fname: '',
        email: '',
        date: '',
        password: '',
        tel: '',
        pets: '',
        address: '',
        longitude: '',
        latitude: '',
    });
    const [inputList, setInputList] = useState([]);
    const getInput = (e) => {
        const { name, value } = e.target;
        setInput((oldItem) => {
            return {
                ...oldItem,
                [name]: value,
            }
        })
    }

    const submit = (e) => {
        e.preventDefault();
        setInputList(input);
        setInput({
            fname: '',
            email: '',
            date: '',
            password: '',
            tel: '',
            pets: '',
            address: '',
            longitude: '',
            latitude: '',
        })
    }
    return (
        <>
            <section className="formSection">
                <form action="" onSubmit={submit}>
                    <div id="form">
                        <p>request a quote</p>
                        <h2>user form</h2>
                        <input type="text" value={input.fname} name="fname" id="" onChange={getInput} placeholder="First Name" />
                        <input type="tel" value={input.tel} name="tel" id="tel" onChange={getInput} placeholder="Enter your phone" />
                        <input type="password" value={input.password}  name="password" id="" onChange={getInput}  placeholder="Enter your Password"/>
                        {/* <input type="email" value={input.email} name="email" id="" onChange={getInput} placeholder="Enter your Email" /> */}
                        {/* <input type="datetime-local" value={input.date} onChange={getInput} id="birthday" name="date"></input> */}
                        <select value={input.pets} onChange={getInput} name="pets" id="pet-select">
                            <option value="">--Please choose an option--</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                        <textarea value={input.address} onChange={getInput} rows="4" cols="50" name="address" ></textarea>
                        
                        {/* <input value={input.longitude} onChange={getInput} type="number" name="longitude" id="" /> */}
                        {/* <input value={input.latitude} onChange={getInput} type="number" name="latitude" id="" /> */}
                        <button className="btn" type="submit" ><ButtonGreen text='click me' /></button>
                    </div>
                </form>
                <p>{inputList.fname}</p>
                <p>{inputList.email}</p>
                <p>{inputList.date}</p>
                <p>{inputList.password}</p>
                <p>{inputList.tel}</p>
                <p>{inputList.pets}</p>
                <p>{inputList.address}</p>
                <p>{inputList.longitude}</p>
                <p>{inputList.latitude}</p>
            </section>
        </>
    );
};

export default UserForm;
