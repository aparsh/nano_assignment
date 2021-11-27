import { React, useState, useEffect } from 'react'
import { TextField, MenuItem, InputLabel } from '@mui/material'
import { shapes } from '../../utils/surface'
import { applications, getMaxParticles, getMinParticles } from '../../utils/applicationParticle'
import Graph from '../Graph/Graph'
import './Body.css'

const Body = () => {
    const [shape, setShape] = useState(shapes.Cuboctahedral);
    const [application, setApplication] = useState(applications.Electrical);
    const [minParticles, setMinParticles] = useState(getMinParticles(applications.Electrical));
    const [maxParticles, setMaxParticles] = useState(getMaxParticles(applications.Electrical));

    return (
        <div className="bodyContainer">
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
                    onChange={(event) => {
                        setApplication(event.target.value)
                        setMaxParticles(getMaxParticles(application))
                        setMinParticles(getMinParticles(application))
                    }}>
                    <MenuItem value={applications.Electrical}>{applications.Electrical}</MenuItem>
                    <MenuItem value={applications.MAGNETIC}>{applications.MAGNETIC}</MenuItem>
                    <MenuItem value={applications.STRENGTH}>{applications.STRENGTH}</MenuItem>
                    <MenuItem value={applications.OPTICAL}>{applications.OPTICAL}</MenuItem>
                    <MenuItem value={applications.CUSTOM}>{applications.CUSTOM}</MenuItem>
                </TextField>
                <div className="marginDiv" />
                <TextField
                    // label="Min. Particles"
                    variant="outlined"
                    className="loginInputBar"
                    margin="dense"
                    value={minParticles}
                    disabled={application === applications.CUSTOM ? false : true}
                    onChange={event => setMinParticles(event.target.value)}></TextField>
                <div className="marginDiv" />
                <TextField
                    // label="Max. Particles"
                    variant="outlined"
                    className="loginInputBar"
                    margin="dense"
                    value={maxParticles}
                    disabled={application === applications.CUSTOM ? false : true}
                    onChange={event => setMaxParticles(event.target.value)}></TextField>
            </div>
            <Graph
                maxParticles={maxParticles}
                minParticles={minParticles}
                shape={shape} />
        </div>
    )
}

export default Body
