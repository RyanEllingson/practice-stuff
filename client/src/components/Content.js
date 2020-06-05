import React, { useState } from "react";
import axios from "axios";

const Content = function() {
    const [message, setMessage] = useState("Click the button to change message");

    const handleClick = function(event) {
        event.preventDefault();
        axios.get("/api")
        .then(function(response) {
            setMessage(response.data.message);
        })
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick = {(e) => {handleClick(e)}}>Click me!</button>
        </div>
    )
}

export default Content;