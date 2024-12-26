import React, { useState } from "react";
import * as signupFunc from "./SignupFunctions";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import "./signup.css";
export default function Signup({ history }) {
    let [newUser, setnewUser] = useState({});
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value;
        setnewUser({...newUser, [field]: fieldValue });
        // if (field === 'email') {
        //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //     if (fieldValue.match(mailformat)) {
        //         setnewUser({ ...newUser, [field]: fieldValue })
        //         return true
        //     } else {
        //         alert("You have entered an invalid email address!");
        //         return false
        //     }
        // } else if (field === 'password') {
        //     var passwordFormat = /^[A-Za-z]\w{7,14}$/;
        //     if (fieldValue.match(passwordFormat)) {
        //         setnewUser({ ...newUser, [field]: fieldValue })
        //         return true
        //     }else{
        //         alert("Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]")
        //     }
    };

    // sign in
    const getToSignIn = (e) => {
        e.preventDefault();
        history.push("/login");
    };

    // submiting data to backend
    const submitData = (e) => {
        e.preventDefault();
        signupFunc.registerUser(newUser).then((response) => response.data);
        console.log(newUser);
        history.push("/login");
    };

    return ( <
        div className = "container" >
        <
        div className = "flex-container" >
        <
        div className = "row full" >
        <
        div className = "col-md-12" >
        <
        div className = "form-container" >
        <
        div className = "form-container-in" > < /div> <
        div className = "row sgnUp " >
        <
        div className = "col-md-6 right-divider padding" >
        <
        h3 className = "lead-text2 mn-txt" > Welcome to Zippy_Zebra! < /h3> 
        <h4 className = "lead-text2 mn-txt" >Please Fill in Your Details Carefully! < /h4>
        
        <
        /div> 
        <
        div className = "left-divider" >
        <
        div className = "col-md-6" >
        <
        form onSubmit = {
            (e) => submitData(e) } >
        <
        div className = "form-group2" >
        <
        label htmlFor = "name" ><i class="fa fa-user" aria-hidden="true"></i> Name : < /label> <
        input id = "name"
        type = "text"
        className = "form-control sgnUp"
        onChange = {
            (e) => handleChangeEvent(e, "name") }
        /> <
        /div> <
        div class = "form-group2" >
        <
        label htmlFor = "email" ><i class="fa fa-envelope" aria-hidden="true"></i> Email - ID : < /label> <
        input required id = "email"
        type = "email"
        className = "form-control sgnUp"
        onChange = {
            (e) => handleChangeEvent(e, "email") }
        /> <
        /div> <
        div class = "form-group2" >
        <
        label htmlFor = "mob-number" ><i class="fa fa-phone" aria-hidden="true"></i> Mobile - No.: < /label> <
        input required id = "mob-number"
        type = "text"
        className = "form-control sgnUp"
        onChange = {
            (e) => handleChangeEvent(e, "mobile") }
        /> <
        /div>
        <
        div class = "form-group3" >
        <
        label htmlFor = "gender" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-male" aria-hidden="true"></i>/<i class="fa fa-female" aria-hidden="true"></i> Gender :  </label></div> <
        div class = "form-check form-check-inline rd" >
        <
        input required class = "form-check-input"
        type = "radio"
        id = "Male"
        name = "gender"
        value = "Male"
        onChange = {
            (e) => handleChangeEvent(e, "gender") }
        /> <
        label class = "form-check-label"
        htmlFor = "Male" >
        Male &nbsp;<i class="fa fa-mars" aria-hidden="true"></i> <
        /label> <
        /div> <
        div class = "form-check form-check-inline rd" >
        <
        input required class = "form-check-input"
        type = "radio"
        id = "Female"
        name = "gender"
        value = "Female"
        onChange = {
            (e) => handleChangeEvent(e, "gender") }
        /> <
        label class = "form-check-label"
        htmlFor = "Female" >
        Female &nbsp;<i class="fa fa-venus" aria-hidden="true"></i><
        /label> <
        /div> <
        div class = "form-group2" >
        <
        label htmlFor = "password" ><i class="fa fa-key" aria-hidden="true"></i> Password : < /label> <
        input required id = "password"
        type = "password"
        className = "form-control sgnUp"
        onChange = {
            (e) => handleChangeEvent(e, "password") }
        /> <
        /div> <
        div class = "form-group2" >
        <
        input required type = "submit"
        value = "submit"
        className = "btn-primary btnn form-submit sub-btn sgnUp" /
        >
        <
        /div> <
        div >
        <
        small className = "form-text text-muted link-text" >
        Existing Account?
        <
        /small> <
        span className = "signuptext" >
        <
        a href = "/#"
        onClick = {
            (e) => getToSignIn(e) } >
        Sign - In <
        /a> <
        /span> <
        /div> <
        /form> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}