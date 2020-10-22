import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="section-blue">
      <table>
        <tbody>
          <tr className="row">
            <td className="col">
              <h1>Testimonials</h1>
            </td>
          </tr>
          <tr className="row">
            <td className="col-3"></td>
            <td className="col-6">
              <p>
                Guy and his team were instrumental in getting our product ready
                for prime-time, they helped us implement a software development
                and release process which did wonders to our product quality,
                they seamlessly became an extension of our team and cranked
                through countless user-facing features. Overall, we got
                state-of-the-art software and solid foundations for our stack
                that will allow us to scale.
              </p>
            </td>
            <td className="col-3"></td>
          </tr>
          <tr className="row">
            <td className="col-3"></td>
            <td className="col-6 author-name">
              <p>Cyrille Habis, CEO of AgriData, Inc.</p>
            </td>
            <td className="col-3"></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TestimonialsSection;
