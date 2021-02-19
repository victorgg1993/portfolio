import React from "react";

//import stock

class Portfolio extends React.Component {

  ruta_imatges = 'https://raw.githubusercontent.com/victorgg1993/portfolio/main/public/projectes/';

  projectes =
    [
      {
        titol: 'Mp3',
        resum: 'Reproductor MP3 programado en C usando un microcontrolador STM32F446 con arquitectura ARM.',
        img_principal: this.ruta_imatges + 'mp3/portada.jpg',
        imatges: [
          this.ruta_imatges + 'mp3/1.jpg',
          this.ruta_imatges + 'mp3/2.jpg',
          this.ruta_imatges + 'mp3/3.jpg',
          this.ruta_imatges + 'mp3/4.png',
          this.ruta_imatges + 'mp3/5.png',
          this.ruta_imatges + 'mp3/6.png',
          this.ruta_imatges + 'mp3/7.png',
          this.ruta_imatges + 'mp3/8.jpg',
        ]
      },

      {
        titol: 'Máquina de reballing',
        resum: 'Máquina de reballing para realizar soldadura tipo BGA con control PID de la temperatura.',
        img_principal: this.ruta_imatges + 'reballing/portada.jpg',
        imatges: [
          this.ruta_imatges + 'reballing/1.jpeg',
          this.ruta_imatges + 'reballing/2.jpeg',
          this.ruta_imatges + 'reballing/3.jpeg',
          this.ruta_imatges + 'reballing/4.jpeg',
          this.ruta_imatges + 'reballing/5.jpeg',
          this.ruta_imatges + 'reballing/6.jpeg',
          this.ruta_imatges + 'reballing/7.jpeg',
          this.ruta_imatges + 'reballing/8.jpeg',
          this.ruta_imatges + 'reballing/9.jpeg',
          this.ruta_imatges + 'reballing/10.jpg',
          this.ruta_imatges + 'reballing/11.jpeg',
          this.ruta_imatges + 'reballing/12.jpg',
          this.ruta_imatges + 'reballing/13.jpg',
          this.ruta_imatges + 'reballing/14.jpeg',
          this.ruta_imatges + 'reballing/15.jpeg',
          this.ruta_imatges + 'reballing/16.jpeg',
          this.ruta_imatges + 'reballing/17.jpg',
        ]
      },

      {
        titol: 'Chemistbot',
        resum: 'Robot dispensador de medicamentos, configurable vía web.',
        img_principal: this.ruta_imatges + 'chemistbot/portada.jpg',
        imatges: [
          this.ruta_imatges + 'chemistbot/IMG_5392.JPG',
          this.ruta_imatges + 'chemistbot/IMG_5393.JPG',
          this.ruta_imatges + 'chemistbot/IMG_5396.JPG',
          this.ruta_imatges + 'chemistbot/IMG_5397.JPG',
          this.ruta_imatges + 'chemistbot/IMG_5398.JPG',
          this.ruta_imatges + 'chemistbot/IMG_5399.JPG',
          this.ruta_imatges + 'chemistbot/IMG_5400.JPG',
          this.ruta_imatges + 'chemistbot/IMG_5401.JPG',
        ]
      },

      {
        titol: 'Termostato caldera',
        resum: 'Simple termostato para el control de la calefacción.',
        img_principal: this.ruta_imatges + 'termostato/portada.jpg',
        imatges: [
          this.ruta_imatges + 'termostato/1.jpeg',
          this.ruta_imatges + 'termostato/2.jpeg',
          this.ruta_imatges + 'termostato/3.jpeg',
          this.ruta_imatges + 'termostato/4.jpeg',
        ]
      },

      {
        titol: 'CPU',
        resum: 'CPU hecha con una FPGA. Bus de datos: 8 bits.',
        img_principal: this.ruta_imatges + 'cpu/portada.jpg',
        imatges: [
          this.ruta_imatges + 'cpu/IMG_5402.JPG',
          this.ruta_imatges + 'cpu/IMG_5403.JPG',
          this.ruta_imatges + 'cpu/IMG_5404.JPG',
          this.ruta_imatges + 'cpu/IMG_5406.JPG',
          this.ruta_imatges + 'cpu/IMG_5407.JPG',
        ]
      },

      {
        titol: 'Teclado gráfico',
        resum: 'Teclado gráfico para ayudar a personas con visibilidad reducida.',
        img_principal: this.ruta_imatges + 'ui_teclat/portada.png',
        imatges: [
          this.ruta_imatges + 'ui_teclat/1.jpg',
          this.ruta_imatges + 'ui_teclat/2.jpg',
          this.ruta_imatges + 'ui_teclat/3.jpg',
          this.ruta_imatges + 'ui_teclat/4.jpg',
          this.ruta_imatges + 'ui_teclat/5.jpg',
          this.ruta_imatges + 'ui_teclat/6.jpg',
          this.ruta_imatges + 'ui_teclat/7.jpg',
          this.ruta_imatges + 'ui_teclat/8.jpg',
          this.ruta_imatges + 'ui_teclat/9.jpg',
          this.ruta_imatges + 'ui_teclat/10.png',
          this.ruta_imatges + 'ui_teclat/11.png',
          this.ruta_imatges + 'ui_teclat/12.png',
          this.ruta_imatges + 'ui_teclat/13.png',
          this.ruta_imatges + 'ui_teclat/14.png',
        ]
      },

      {
        titol: 'Embotelladora',
        resum: 'Maqueta de planta embotelladora donde se llenan y cierran las botellas añadidas mediante un dispensador automático.',
        img_principal: this.ruta_imatges + 'embotelladora/portada.jpg',
        imatges: [
          this.ruta_imatges + 'embotelladora/DSC_0001.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0004.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0006.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0007.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0008.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0011.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0012.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0015.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0019.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0020.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0021.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0022.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0023.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0025.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0026.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0027.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0031.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0032.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0038.jpg',
          this.ruta_imatges + 'embotelladora/DSC_0039.jpg',
        ]
      },

      {
        titol: 'Morse',
        resum: 'Pequeño comunicador para practicar morse con otras personas. Cuenta con un menú gráfico de configuración de parámetros.',
        img_principal: this.ruta_imatges + 'morse/portada.jpg',
        imatges: [
          this.ruta_imatges + 'morse/IMG_5413.jpg',
          this.ruta_imatges + 'morse/IMG_5414.jpg',
          this.ruta_imatges + 'morse/IMG_5415.jpg',
        ]
      },
    ];


  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Proyectos</h3>
                <p className="subtitle-a">
                  Algunos proyectos personales en los que he trabajado:
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            {
              this.projectes.map((projecte, i) => {
                return (
                  <div className="col-md-4" key={i} >
                    <div className="work-box">

                      <a href={projecte.img_principal} data-lightbox="gallery-vmarine">

                        <div className="work-img">
                          <img src={projecte.img_principal} alt="" className="img-fluid" />
                        </div>

                        <div className="work-content">
                          <div className="row">
                            <div className="col-sm-8">
                              <h2 className="w-title">{projecte.titol}</h2>
                              <div className="w-more">
                                <span className="w-ctegory">
                                  {projecte.resum}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>

                      {projecte.imatges.map((ruta_img, i) => {
                        return (<a
                          key={i}
                          href={ruta_img}
                          data-lightbox="gallery-vmarine"
                          style={{ display: "none" }}
                        ></a>)
                      })}

                    </div>
                  </div>
                );
              })
            }
          </div>

        </div>
      </section>
    );
  }
}

export default Portfolio;
