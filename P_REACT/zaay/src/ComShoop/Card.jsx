import React, { useEffect, useState } from 'react';

export default function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/producto')
        .then(result => result.json())
        .then(data => {
            setData(data);
        })
    }, []);

    return (
        <div className="row">
            {data.map(e => (
                <div key={e.id} className="col-md-4">
                    <div className="card mb-4 product-wap rounded-0">
                        <div className="card rounded-0">
                            <img className="card-img rounded-0 img-fluid" src={e.img} alt="Product" />
                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                    <li><a className="btn btn-success text-white" href="#"><i className="far fa-heart"></i></a></li>
                                    <li><a className="btn btn-success text-white mt-2" href="#"><i className="far fa-eye"></i></a></li>
                                    <li><a className="btn btn-success text-white mt-2" href="#"><i className="fas fa-cart-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <a href="shop-single.html" className="h3 text-decoration-none">{e.nombre}</a>
                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                <li>Stock:{e.stock}</li>
                                <li>Fabricante:{e.fabricante}</li>

                                <li className="pt-2">
                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                            </ul>
                            <p className="text-center mb-0">S/{e.precio}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
