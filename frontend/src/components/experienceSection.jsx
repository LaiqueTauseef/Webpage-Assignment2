import React from "react";
import Microsoft from "../Assets/microsoft.jpg";
import Nintendo from "../Assets/nintendo.jpg";
import Boeing from "../Assets/boeing-512x512.jpg";

const ExperienceSection = () => {
  return (
    <section>
      <table className="section-white">
        <tbody>
          <tr className="row">
            <td className="col">
              <h1>Experience</h1>
            </td>
          </tr>
          <tr className="row">
            <td className="col-3"></td>
            <td className="col-6">
              <p>
                Our team has experience working at Microsoft, Yammer, Nintendo,
                Boeing and many startups.
              </p>
            </td>
            <td className="col-3"></td>
          </tr>
          <tr className="row">
            <td className="col">
              <ul className="list-none">
                <li className="list-horizontal">
                  <img src={Microsoft} alt="" height="150" width="200" />
                </li>
                <li className="list-horizontal">
                  <img src={Nintendo} alt="" height="150" width="200" />
                </li>
                <li className="list-horizontal">
                  <img src={Boeing} alt="" height="150" width="200" />
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ExperienceSection;
