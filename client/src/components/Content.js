import React, { useState, useContext } from "react";
import { FirebaseContext } from "../firebase/firebase";
import axios from "axios";
import { Container, Grid, Button, Paper } from "@material-ui/core";

const Content = function() {
    const { user, googleSignIn, signOut } = useContext(FirebaseContext);

    const [message, setMessage] = useState("Click the button to change message");

    const handleClick = function(event) {
        event.preventDefault();
        axios.get("/api")
        .then(function(response) {
            setMessage(response.data.message);
        })
    };

    const handleSignIn = function(event) {
        event.preventDefault();
        googleSignIn();
    };

    const handleSignOut = function(event) {
        event.preventDefault();
        signOut();
    };

    return (
        <Container>
        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
            <Grid item>
                <Paper>
                    <h1>{message}</h1>
                </Paper>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick = {(e) => {handleClick(e)}}>Click me!</Button>
            </Grid>
        </Grid>
        {user ? <h1>Hello {user.displayName}</h1> : ""}
        {user ? <button onClick={(e)=>{handleSignOut(e)}}>Sign out</button> : <button onClick={(e)=>handleSignIn(e)}>Sign in</button>}
            
        </Container>
    )
}

export default Content;