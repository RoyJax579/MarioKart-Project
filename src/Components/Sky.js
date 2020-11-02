import React from 'react'
import "../CSS files/Sky.css"
import Cloud from "../Images/Sky/Cloud.png"
import Plane1 from "../Images/Sky/Plane.png"
import Plane2 from "../Images/Sky/Plane2.png"


function Sky() {
    return (
        <>
            <div className="sky">
                <img src={Cloud} alt="cloud" className="cloud"/>

                <img src={Cloud} alt="cloud" className="cloud2"/>

                <img src={Cloud} alt="cloud" className="cloud3"/>

                <img src={Cloud} alt="cloud" className="cloud4"/>

                <img src={Plane1} alt="plane" className="plane1"/>

                <img src={Plane2} alt="plane" className="plane2"/>
            </div>
        </>
    )
}

export default Sky
