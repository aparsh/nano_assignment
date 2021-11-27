import { React, useState, useEffect } from 'react'
import { TextField, MenuItem, InputLabel } from '@mui/material'
import { shapes } from '../../utils/surface'
import { applications } from '../../utils/applicationParticle'
import './UserInput.css'
const UserInput = () => {
    const [shape, setShape] = useState();
    const [application, setApplication] = useState();
    const [minParticles, setMinParticles] = useState();
    const [maxParticles, setMaxParticles] = useState();


    return (
        <div className="userInput">
            <TextField
                className="userInputBar"
                label="shape"
                value={shape}
                select
                margin="dense"
                onChange={event => setShape(event.target.value)}>
                <MenuItem value={shapes.Cuboctahedral}>{shapes.Cuboctahedral}</MenuItem>
                <MenuItem value={shapes.Spherical}>{shapes.Spherical}</MenuItem>
            </TextField>
            <div className="marginDiv" />
            <TextField
                className="userInputBar"
                label="application"
                value={application}
                select
                margin="dense"
                onChange={event => setApplication(event.target.value)}>
                <MenuItem value={applications.Electrical}>{applications.Electrical}</MenuItem>
                <MenuItem value={applications.MAGNETIC}>{applications.MAGNETIC}</MenuItem>
                <MenuItem value={applications.STRENGTH}>{applications.STRENGTH}</MenuItem>
                <MenuItem value={applications.OPTICAL}>{applications.OPTICAL}</MenuItem>
                <MenuItem value={applications.CUSTOM}>{applications.CUSTOM}</MenuItem>
            </TextField>
            <div className="marginDiv" />
            <TextField
                label="Min. Particles"
                variant="outlined"
                className="loginInputBar"
                margin="dense"
                disabled={application === applications.CUSTOM ? false : true}
                onChange={event => setMinParticles(event.target.value)}></TextField>
            <div className="marginDiv" />
            <TextField
                label="Max. Particles"
                variant="outlined"
                className="loginInputBar"
                margin="dense"
                disabled={application === applications.CUSTOM ? false : true}
                onChange={event => setMaxParticles(event.target.value)}></TextField>
        </div>
    )
}

export default UserInput
