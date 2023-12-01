// src/views/Home.js
import React from 'react';
import MapImage from '../Images/Map of Erie PA.png';


function Home() {
  return (
    <div id="mapContainer" style={{ position: 'relative' }}>
      
      <h1 style={{ position: 'absolute', top: '14%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2', color: 'darkblue', textAlign: 'center' }}>
        All Inclusive Erie
      </h1>


      <img src={MapImage} alt="Map of Erie" style={{ width: '100%', height: 'auto', zIndex: '1' }} />

      <div className="tablet-desktop">
        <table>
          <tr>
            <th className="rightline">
              <br />
              <h1>Background Information</h1>
              <ul align="left">
                <h3 style={{ color: 'darkblue' }}>Why would we do this?</h3>
                <p>
                  United by a commitment to inclusivity and accessibility,
                  four Gannon University students set out to enhance the experience
                  of individuals with diverse mobility needs in Erie, Pennsylvania.
                  Recognizing the vital role accessibility plays in community life,
                  the team felt a collective responsibility to positively impact the
                  lives of those facing mobility challenges. Driven by a passion for
                  accessible information, they conceived a website to be a
                  comprehensive guide to accessible places in Erie, offering insights
                  into locations, facilities, and services tailored to varying
                  abilities. This initiative reflects their dedication to creating a
                  more inclusive and welcoming environment in Erie, ensuring everyone
                  can fully enjoy and participate in community life.
                </p>
                <h3 style={{ color: 'darkblue' }}>Who does this help?</h3>
                <p>
                  This initiative caters to individuals with diverse mobility needs
                  in Erie, including those with physical disabilities, seniors facing
                  mobility challenges, and their caregivers. By offering insights into
                  accessible places and services, the website aims to empower people
                  to navigate and engage more comfortably in the community. Its
                  inclusive approach prioritizes accessibility, ensuring that everyone,
                  regardless of ability, can fully participate in and contribute to
                  the vibrant life of Erie, Pennsylvania.
                </p>
              </ul>
            </th>
          </tr>
        </table>

        <aside className="tablet-desktop grid-item4">
          <a href="authentication.html">
            <button type="button">Log In</button>
          </a>
        </aside>

        <h3 align="center">or create an account <a href="createAccount.html">here</a></h3>
      </div>
    </div>
  );
}

export default Home;
