/* eslint-disable linebreak-style */
import React from 'react';
import './about.css';

function About() {
  const something = 'test';
  console.log(something);

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
                <h3>292</h3>
                <span>Posts</span>
              </div>
              <div>
                <h3>230k</h3>
                <span>Followers</span>
              </div>
              <div>
                <h3>325</h3>
                <span>Following</span>
              </div>
            </div>
            <div className="actions">
              <button type="button">GitHub</button>
              <button type="button">Linkedin</button>
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
                <h3>342</h3>
                <span>Posts</span>
              </div>
              <div>
                <h3>120k</h3>
                <span>Followers</span>
              </div>
              <div>
                <h3>285</h3>
                <span>Following</span>
              </div>
            </div>
            <div className="actions">
              <button type="button">GitHub</button>
              <button type="button">Linkedin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
