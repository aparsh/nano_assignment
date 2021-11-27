import { React, useState, useEffect, useMemo } from 'react'
import { Chart } from 'react-charts'
import { shapes, get_cubo_octahedral_surface, get_spherical_surface } from '../../utils/surface'
import { applications, getMinParticles, getMaxParticles } from '../../utils/applicationParticle'
import './Graph.css'


const getData = (atomsSurface, atomsBulk) => {
    const newData = [
        {
            label: 'Series 1',
            data: atomsSurface
        },
        {
            label: 'Series 2',
            data: atomsBulk
        }
    ]
    return newData
}

const getSurface = (minParticles, maxParticles, shape) => {
    let surface = []
    for (let i = minParticles; i <= maxParticles; i++) {
        if (shape === shapes.Cuboctahedral) {
            surface.push([i, get_cubo_octahedral_surface(i)])
        }
        else {
            surface.push([i, get_spherical_surface(i)])
        }
    }
    return surface
}

const getBulk = (minParticles, maxParticles, shape) => {
    let bulk = []
    for (let i = minParticles; i <= maxParticles; i++) {
        if (shape === shapes.Cuboctahedral) {
            bulk.push([i, 100 - get_cubo_octahedral_surface(i)])
        }
        else {
            bulk.push([i, 100 - get_spherical_surface(i)])
        }
    }

    return bulk
}
const Graph = ({ minParticles, maxParticles, shape }) => {
    const [atomsSurface, setAtomSurface] = useState(getSurface(minParticles, maxParticles, shape))
    const [atomsBulk, setAtomsBulk] = useState(getBulk(minParticles, maxParticles, shape))
    const [data, setData] = useState([])



    useEffect(async () => {
        setAtomSurface(getSurface(minParticles, maxParticles, shape))
        setAtomsBulk(getBulk(minParticles, maxParticles, shape))
        console.log(atomsSurface)
        setData(getData(atomsSurface, atomsBulk))
    }, [maxParticles, minParticles, shape])

    const axes = useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )


    return (
        <div className="graphContainer">
            <div className="graphSize">
                <Chart data={data} axes={axes} />
            </div>
        </div>
    )
}

export default Graph
