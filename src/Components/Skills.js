import "./SkillsStyles.css";

import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <table className="list">
        <tr className="item">
          <h2>Languages:</h2>
          <th>
            HTML, CSS, JavaScript, Python, C#, Php, Java, Asp.Net
          </th>
        </tr>

        <tr className="item">
          <h2>Frameworks:</h2>
          <th>
            ReactJS, NodeJS, ExpressJS, JQueryJS
          </th>
        </tr>

        <tr className="item">
          <h2>Databases:</h2>
          <th>
            MongoDB, SQL
          </th>
        </tr>
      </table>
    </div>   
  );
}

export default Skills;