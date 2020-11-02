import React from 'react'
import Helmet from 'react-helmet';
import Horizon from './Components/Horizon'
import Road from './Components/Road'
import Sky from './Components/Sky'
import Icon from "./Images/Road/Mario.png"

const App = () => {
  return (
    <>
      <Helmet>
            <title>Mario Kart</title>
            <link rel="icon" href={Icon}></link>
        </Helmet>
      <Sky/>
      <Horizon/>
      <Road/>
    </>
  )
}

export default App;
