import React from "react";
import {useState,useEffect} from "react";
import { useSelector,shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import {updateIndex,deleteIndex} from "../../actions/action"
import {Link} from "react-router-dom";

import "./list.css";
import Location from "../../images/location.png"
import Number from "../../images/smartphone.png"
import WebSite from "../../images/internet.png"
import Email from "../../images/email.png"

function List(){
    const {contacts} = useSelector(state=>({
        contacts:state.contacts
    }),shallowEqual)
    const dispatch = useDispatch();

    function handleEdit(index){
        dispatch(updateIndex(index))
    }
    function handleDelete(index){
        dispatch(deleteIndex(index))
    }

    return(
        <div className = "contact-list">
            {contacts.map((item,index)=>{
                return <div className ="contact-list__card">
                    <ul key={index}>
                        <li><img src={item.image} id = "image" alt="avatarka.png"/></li>
                        <li><h1>{item.firstName} {item.lastName}</h1></li>
                        <li><div className="contact-list__card__info">
                            <div className ="info-element"><img src={Location} alt = "el.png"></img>
                                <p>{item.city}, {item.country}</p>
                            </div>
                            <div className ="info-element"><img src={Number} alt = "el.png"></img>
                                <p>{item.phoneNumber}</p>
                            </div>
                            <div className ="info-element"><img src={WebSite} alt = "el.png"></img>
                                <p>{item.website}</p>
                            </div>
                            <div className ="info-element"><img src={Email} alt = "el.png"></img>
                                <p>{item.email}</p>
                            </div>
                        </div></li>
                        <Link to = "/"> 
                            <li><button onClick={handleEdit(index)}>Edit</button></li>
                        </Link>
                           <li><button onClick={handleDelete(index)}>Delete</button></li>   
                               
                    </ul>
                </div>
            })}
        </div>
    )
}
export default List;
