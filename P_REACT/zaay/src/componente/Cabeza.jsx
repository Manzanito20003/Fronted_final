import React from 'react';

export const Cabeza = () => {
  return (
    <div>
      {/* Start Top Nav */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2"></i>
              <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">jefersson.quicana@utec.edu.pe</a>
              <i className="fa fa-phone mx-2"></i>
              <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">00-000-000</a>
            </div>
            <div>
              <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
              <a className="text-light" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
              <a className="text-light" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
              <a className="text-light" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
            </div>
          </div>
        </div>
      </nav>
      {/* Close Top Nav */}

      {/* Start Search Modal */}
      <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-label="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form action="" method="get" className="modal-content modal-body border-0 p-0">
            <div className="input-group mb-2">
              <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
              <button type="submit" className="input-group-text bg-success text-light">
                <i className="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Close Search Modal */}
    </div>
  );
}
