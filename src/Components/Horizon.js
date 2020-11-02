import React from 'react'
import "../CSS files/Horizon.css"
import Tree from "../Images/Horizon/Tree.txt"
import Grass from "../Images/Horizon/Grass.png"
import Grass2 from "../Images/Horizon/Grass2.png"
import Tree2 from "../Images/Horizon/Tree.gif"
import Tree3 from "../Images/Horizon/Tree2.png"
import Snake from "../Images/Horizon/Snake.png"
import Dog from "../Images/Horizon/Dog.gif"

function Horizon() {
    return (
        <>
            <div className="horizon">
                <img src={Tree} alt="tree" className="tree1"/>

                <img src={Grass} alt="tree" className="grass1"/>
                <img src={Grass} alt="grass" className="grass2"/>
                <img src={Grass} alt="grass" className="grass3"/>

                <img src={Grass2} alt="grass" className="grass4"/>
                <img src={Grass2} alt="grass" className="grass5"/>
                <img src={Grass2} alt="grass" className="grass6"/>
                <img src={Grass2} alt="grass" className="grass7"/>

                <img src={Tree2} alt="tree" className="tree2"/>
                <img src={Tree2} alt="tree" className="tree3"/>
                <img src={Tree2} alt="tree" className="tree4"/>

                <img src={Tree3} alt="tree" className="tree5"/>

                <img src={Snake} alt="snake" className="snake"/>

                <img src={Dog} alt="dog" className="dog"/>
            </div>
        </>
    )
}

export default Horizon
