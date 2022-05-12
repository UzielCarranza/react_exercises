import React from "react";
import {Link} from "react-router-dom";




export function Home(){
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
export function About(){
    return (
        <div>
            <h1>[About page]</h1>
            <nav>
                <Link to="home">Home</Link>
                <Link to="about">About</Link>

                <Link to="events">Events</Link>

                <Link to="contacts">Contact</Link>
            </nav>
        </div>
    )
}
export function Events(){
    return (
        <div>
            <h1>[Events]</h1>
            <nav>
                <Link to="about">Home</Link>
                <Link to="about">About</Link>

                <Link to="events">Events</Link>

                <Link to="contacts">Contact</Link>
            </nav>
        </div>
    )
}
export function Contacts(){
    return (
        <div>
            <h1>[Contacts]</h1>
            <nav>
                <Link to="home">Home</Link>
                <Link to="about">About</Link>

                <Link to="events">Events</Link>

                <Link to="contacts">Contacts</Link>
            </nav>
        </div>
    )
}