import React from "react";
import {Link} from "react-router-dom";
import {useLocation, Outlet} from "react-router";


export function Home() {
    return (
        <div>
            <h1>[Company website]</h1>
            <nav>
                <Link to="about">about</Link>

                <Link to="events">events</Link>

                <Link to="contact">contact</Link>
            </nav>
        </div>
    )
}

export function About() {
    return (
        <div>
            <h1>[About page]</h1>
            <Outlet/>
        </div>
    )
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

export function Contacts() {
    return (
        <div>
            <h1>[Contacts]</h1>
        </div>
    )
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Resource not found at {location.pathname}!</h1>
        </div>
    )
}

export function Services(){
    return (
        <div>
            <h1>our services</h1>
        </div>
    )
}


export function CompanyHistory(){
    return (
        <div>
            <h1>our Company History</h1>
        </div>
    )
}

export function Location(){
    return (
        <div>
            <h1>our Location</h1>
        </div>
    )
}