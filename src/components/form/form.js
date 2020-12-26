import React from "react";
import {useState} from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {insert} from "../../actions/action"
import "./form.css"

function Form(){

    const {contacts,currentIndex} = useSelector(state => ({
        contacts:state.contacts,
        currentIndex:state.currentIndex
    }),shallowEqual);
    const dispatch = useDispatch();
    

    const returnObj=()=>{
        
        if (currentIndex === -1)
        return {
            id: "",
         firstName: "",
         lastName: "",
         city: "",
         country: "",
         phoneNumber: "",
         email: "",
         website: "",
         img: "",

        }
    else
        return contacts[currentIndex]
    
       }
    const [list,setList] = useState({...returnObj()})

   
   
   
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (currentIndex === -1)
            dispatch(insert(list))
        else
            dispatch({type:"UPDATE",list})
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setList({
          ...list,
          [evt.target.name]: value
        });
      }

    return (
        <form className="main-form" onSubmit={handleSubmit} autoComplete="off">
               
        <input id = "img" name="image" placeholder= "Image url" value={list.image} onChange={handleChange} ></input>
        <input name="firstName" placeholder="Firstname" value={list.firstName} onChange={handleChange}  /><br />
        < input name="lastName" placeholder="Lastname" value = {list.lastName} onChange={handleChange}  /><br />
        < input name="city" placeholder="city" value = {list.city} onChange={handleChange}  /><br />
        < input name="country" placeholder="country" value={list.country} onChange={handleChange}  /><br />
        < input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
         required name="phoneNumber" placeholder="phone number" value ={list.phoneNumber} onChange={handleChange}  /><br />
        < input type="email" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required value={list.email} onChange={handleChange}  /><br />
        < input  type="url"  name="website" placeholder="website" value ={list.website} onChange={handleChange}  /><br />
        <button id ="button_form" type="submit">Save Contact</button>
    </form>

    )

}
export default Form;