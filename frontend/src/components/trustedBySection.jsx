import React from "react";
import Agridata from "../Assets/agridata-512x512.jpg";
import Conduce from "../Assets/conduce-512x512.jpg";

const TrustedBySection = () => {
  return (
    <section className="section-white">
      <table style={{ width: "100%" }}>
        <tbody>
          <tr className="row">
            <td className="col">
              <h1>Trusted By</h1>
            </td>
          </tr>
          <tr className="row">
            <td className="col">
              <ul className="list-none">
                <li className="list-horizontal">
                  <img
                    className="image-shadow"
                    src={Agridata}
                    alt=""
                    height="200"
                    width="200"
                  />
                </li>
                <li className="list-horizontal">
                  <img
                    className="image-shadow"
                    src={Conduce}
                    alt=""
                    height="200"
                    width="200"
                  />
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TrustedBySection;
