/* eslint-disable linebreak-style */
import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="card">
        <div className="image">
          {/* user image */}
        </div>

        <div className="content">
          <div className="details">
            <h2>Michael Mumenya</h2>
            <span>Full-stack Developer</span>
            <div className="data">
              <div>
                <h3>73</h3>
                <span>Posts</span>
              </div>
              <div>
                <h3>40</h3>
                <span>Followers</span>
              </div>
              <div>
                <h3>60</h3>
                <span>Following</span>
              </div>
            </div>
            <div className="actions">
              <a href="https://github.com/Nyame-Wolf" className="button">GitHub</a>
              <a href="https://www.linkedin.com/in/mumenya-nyamu-software-engineer/" className="button">Linkedin</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image">
          {/* user image */}
        </div>

        <div className="content">
          <div className="details">
            <h2>Vitor Guedes Madeira</h2>
            <span>Full-stack Developer</span>
            <div className="data">
              <div>
                <h3>48</h3>
                <span>Posts</span>
              </div>
              <div>
                <h3>50</h3>
                <span>Followers</span>
              </div>
              <div>
                <h3>73</h3>
                <span>Following</span>
              </div>
            </div>
            <div className="actions">
              <a href="https://github.com/VitorGuedesMadeira" className="button">GitHub</a>
              <a href="https://www.linkedin.com/in/vitor-guedes-madeira/" className="button">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
