import React from 'react';

const CategoriesOfTheMonth = () => {
  return (
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Categories:</h1>
          <p>
            En nuestra amplia gama de productos, hemos diseñado un espectro diverso de categorías de compras tanto para aquellos que disfrutan de la experiencia física en la tienda como para los amantes de las compras en línea. Nuestro compromiso es ofrecer productos excepcionales y opciones de compra que se adapten a tus preferencias individuales.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="pricipal.html">
            <img
              src="./assets/img/expendedora.jpg"
              className="rounded-circle img-fluid border"
              alt="Expendedora"
            />
          </a>
          <h5 className="text-center mt-3 mb-3">Expendedora</h5>
          <p className="text-center">
            <a href="principal.html" className="btn btn-success">
              Go Shop
            </a>
          </p>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="principal.html">
            <img
              src="./assets/img/listo.png"
              className="rounded-circle img-fluid border"
              alt="Listo!"
            />
          </a>
          <h5 className="text-center mt-3 mb-3">Listo!</h5>
          <p className="text-center">
            <a href="principal.html" className="btn btn-success">
              Go Shop
            </a>
          </p>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="principal.html">
            <img
              src="./assets/img/cafeteria.jpg"
              className="rounded-circle img-fluid border"
              alt="Cafeteria"
            />
          </a>
          <h5 className="text-center mt-3 mb-3">Cafeteria</h5>
          <p className="text-center">
            <a href="principal.html" className="btn btn-success">
              Go Shop
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesOfTheMonth;
