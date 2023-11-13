import React from 'react';

const Banner = () => {
  return (
    <div id="template-mo-OECME-hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#template-mo-OECME-hero-carousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#template-mo-OECME-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-OECME-hero-carousel" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row p-5 " id="caja_fondo_1">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid"  alt="" width="700" height="700" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left align-self-center">
                  <h1 className="h1 text-success"><b>OECME</b> Comercio</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container ">
            <div className="row p-5 " id="caja_fondo_2">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid"  alt=""width="700" height="700" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1 text-success">OECME </h1>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5" id='caja_fondo_2'>
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid" src="./assets/img/banner_img_03.jpg" alt="" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1 text-success">Otros</h1>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-OECME-hero-carousel" role="button" data-bs-slide="prev">
        <i className="fas fa-chevron-left"></i>
      </a>
      <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-OECME-hero-carousel" role="button" data-bs-slide="next">
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Banner;
