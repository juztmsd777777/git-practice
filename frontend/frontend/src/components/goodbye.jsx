import React from 'react';
import { useEffect, useState } from "react";

function goodbye(){
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/api")
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);

    return <h1>{message}</h1>;
}

export default goodbye;