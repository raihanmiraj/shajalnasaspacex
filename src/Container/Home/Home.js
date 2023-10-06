import React, { Component } from 'react'
import './Home.css'
export class Home extends Component {
    render() {
        return (
            <div>
<>
 
  <div className="firstcontent">
    <div className="firsttext">
      <p>RECENT LAUNCH</p>
      <h1>
        GPS III SPACE VEHICLE
        <br />
        03 MISSION
      </h1>
      <br />
      <button className="butt"> REPLAY</button>
    </div>
  </div>
  <div className="secondcontent">
    <div className="secondtext">
      <h1>
        RETURNING HUMAN
        <br />
        SPACEFLIGHT TO THE
        <br />
        UNITED STATES
      </h1>
      <br />
      <button className="butt">LEARN MORE</button>
    </div>
  </div>
  <div className="thirdcontent">
    <div className="thirdtext">
      <h1>
        CREW DRAGON
        <br />
        DOCKING
        <br />
        SIMULATOR
      </h1>
      <p>
        Crew Dragon is designed to autonomously dock and undock with the
        International Space Station. However, the crew can take manual control
        of the spacecraft if necessary.
      </p>
      <br />
      <button className="butt">TRY IT</button>
      <h1 className="extrapadding">
        gchgcgcgc,gchg
        <br />
        kchgchgckc
        <br />
        kgcmgcgcgc
        <br />
        gcnngfcx
        <br />
        mgcgcgk
      </h1>
    </div>
    <div className="dragondockvid">
      <iframe
        src="https://www.spacex.com/media/iss_docking_sim.mp4?autoplay=1"
        allow="autoplay"
        allowFullScreen="false"
        frameBorder={0}
        width="800px"
        height="800px"
      />
    </div>
  </div>
  <div className="fourthcontent">
    <div className="fourthtext">
      <h3>05/01/20</h3>
      <h1>
        NASA SELECTS LUNAR
        <br />
        OPTIMIZED STARSHIP
      </h1>
      <p>
        NASA selected SpaceX to develop a lunar optimized Starship to transport
        <br /> crew between lunar orbit and the surface of the Moon as part of
        NASA’s
        <br /> Artemis program.
      </p>
      <br />
      <button className="butt">LEARN MORE</button>
    </div>
  </div>
   
  
</>

            </div>
        )
    }
}

export default Home
