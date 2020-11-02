import React from 'react'
import "../CSS files/Road.css"
import Mario from "../Images/Road/Mario.png"
import Racer from "../Images/Road/Other.png"

function Road() {
    return (
        <>
          <div className="road">
            <div className="lane1">
                <img src={Mario} alt="Mario Driving" className="mario" />
            </div> 
            <div className="lane2">
                <img src={Racer} alt="racer Driving" className="racer" />
            </div> 
          </div>  
        </>
    )
}

export default Road
