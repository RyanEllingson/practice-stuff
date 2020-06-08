import React, { useState } from "react";
import axios from "axios";
import { Container, Grid, Button, Paper } from "@material-ui/core";

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
            
            
        </Container>
    )
}

export default Content;