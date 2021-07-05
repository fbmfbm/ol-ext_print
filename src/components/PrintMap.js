import React from 'react'
import Map from './MapPanel'


const PrintMap = ()=>{

    return(
        <div style={{"width":"100%", "textAlign":"right", "top":"50px"}} className={"absolute p-5 bg-white"}>
            <h1>Impression</h1>
            <Map />
        </div>
    ) 
}

export default PrintMap