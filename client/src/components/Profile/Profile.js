import React, { useState, useEffect } from 'react'
import './profile.css'
import jwt_decode from 'jwt-decode'

export default function Profile({ history }) {
    const [token, setToken] = useState({})

    

    useEffect(() => {
        const tok = sessionStorage.getItem('authToken')
        const decoded = jwt_decode(tok)
        setToken(decoded.user)
    }, [])

    const goBackToRoutes = e => {
        e.preventDefault()
        history.push('/routes')
    }

    return ( <
        div className = 'container' >
        <
        section className = 'profile' >
        <
        header className = 'header' >
        
        <
        div className = 'details' >
        <
        img src = 'https://static.vecteezy.com/system/resources/previews/013/368/276/original/developer-3d-render-icon-illustration-png.png'
        alt = 'John Doe'
        className = 'profile-pic' /
        >
        <
        h1 className = 'heading' ><i class="fa fa-lock" aria-hidden="true"></i> Welcome to ADMIN Page! <i class="fa fa-lock" aria-hidden="true"></i>{ token?.name } < /h1>{' '} <
        div className = 'stats' >
        <
        div className = 'col-4' >
        <
        h5 >This Project was made by Ankan Ghosh. < /h5>  <
        /div>{' '} <
        /div>{' '} <
        div className = 'stat2' >
        <
        div className = 'col-12' >
        <
        button className = 'btn btn-dark bck'
        onClick = { e =>  window.location.href = 'https://github.com/AnkanGhosh56' } >
        Github&nbsp;&nbsp;<i class="fa fa-github-alt" aria-hidden="true"></i> { ' ' } <
        /button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <
        button className = 'btn btn-dark bck'
        onClick = { e => goBackToRoutes(e) } >
        <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>&nbsp;&nbsp;Return { ' ' } <
        /button>{' '} <
        /div>{' '} <
        /div>{' '} <
        /div>{' '} <
        /header>{' '} <
        /section>{' '} <
        /div>
    )
}