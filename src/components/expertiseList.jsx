import React from "react";

const ExpertiseList = () => {
  return (
    <section>
      <table className="center-block" style={{ width: "100%", padding: "0" }}>
        <tbody className="center-block" style={{ width: "75%", padding: "0" }}>
          <tr className="row ">
            <td className="col">
              <ul className="list-horizontal">
                <li>Typescript/Javascript</li>
                <li>React, React Native</li>
                <li>MongoDB, SQL Server, Postgres</li>
                <li>HTML/CSS/AMP</li>
              </ul>

              <ul className="list-horizontal">
                <li>NodeJS</li>
                <li>.NET</li>
                <li>Flask</li>
                <li>Ruby on Rails</li>
              </ul>

              <ul className="list-horizontal">
                <li>Azure, Heroku</li>
                <li>C#</li>
                <li>Swift</li>
                <li>NopCommerce</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ExpertiseList;
