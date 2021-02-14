import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row row_contacte">
            <div className="col-sm-7">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  
                  <div className="row">
                    <div className="col-md-10">
                      <div className="title-box-2 pt-5 pt-md-0">
                        <h5 className="title-left">Contacto</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Si te gustaría saber más sobre mí o perguntarme cualquier
                          duda sobre alguno de mis proyectos, no dudes en ponerte
                          en contacto conmigo.
                        </p>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/victorgg1993"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/victorgg1993"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Contact;
