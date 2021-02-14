import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "C",
          content: "C",
          porcentage: "70%",
        },
        {
          id: "C++",
          content: "C++",
          porcentage: "67%",
        },
        {
          id: "JavaScript",
          content: "JavaScript",
          porcentage: "65%",
        },
        { id: "HTML5", content: "HTML5", porcentage: "65%", },
        {
          id: "CSS",
          content: "CSS",
          porcentage: "50%",
        },
        {
          id: "TypeScript",
          content: "TypeScript",
          porcentage: "40%",
        },
        {
          id: "SCSS",
          content: "SCSS",
          porcentage: "35%",
        },
        {
          id: "Angular",
          content: "Angular",
          porcentage: "25%",
        },
        {
          id: "Java",
          content: "Java",
          porcentage: "19%",
        },
        {
          id: "Docker",
          content: "Docker",
          porcentage: "15%",
        },
        {
          id: "SQL",
          content: "SQL",
          porcentage: "13%",
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          linia1: "Me considero una persona apasionada de la programación, principalmente enfocado en microcontroladores y aplicaciones web.",
          linia2: "Con experiencia en microsoldadura tipo BGA, reballing y reparaciones de placas base en equipos de consumo.",
          linia3: "En mis tiempos libres me gusta desarrollar distintos dispositivos, diseñando la PCB, la mecánica y programando el firmware.",
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>
                              {skill.content}
                            </span>
                            {" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Sobre mí</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <div className="lead" key={content.id}>
                            <p>{content.linia1}</p>
                            <p>{content.linia2}</p>
                            <p>{content.linia3}</p>
                          </div>
                        );
                      })}
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

export default About;
