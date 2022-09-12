import React from 'react';
import './style.css';
import { useState } from 'react';

function App() {
  const [initial, setinitial] = useState(0);

  const Cart1 = (e) => {
    if (e.target.innerText === 'Add to Cart') {
      setinitial(initial + 1);
      e.target.innerText = 'Remove from cart';
    } else {
      setinitial(initial - 1);
      e.target.innerText = 'Add to Cart';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const Cart2 = (f) => {
    if (f.target.innerText === 'Add to Cart') {
      setinitial(initial + 1);
      f.target.innerText = 'Remove from cart';
    } else {
      setinitial(initial - 1);
      f.target.innerText = 'Add to Cart';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const Cart3 = (g) => {
    if (g.target.innerText === 'Add to Cart') {
      setinitial(initial + 1);
      g.target.innerText = 'Remove from cart';
    } else {
      setinitial(initial - 1);
      g.target.innerText = 'Add to Cart';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const Cart4 = (h) => {
    if (h.target.innerText === 'Add to Cart') {
      setinitial(initial + 1);
      h.target.innerText = 'Remove from cart';
    } else {
      setinitial(initial - 1);
      h.target.innerText = 'Add to Cart';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const Cart5 = (i) => {
    if (i.target.innerText === 'Add to Cart') {
      setinitial(initial + 1);
      i.target.innerText = 'Remove from cart';
    } else {
      setinitial(initial - 1);
      i.target.innerText = 'Add to Cart';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const Cart6 = (j) => {
    if (j.target.innerText === 'Add to Cart') {
      setinitial(initial + 1);
      j.target.innerText = 'Remove from cart';
    } else {
      setinitial(initial - 1);
      j.target.innerText = 'Add to Cart';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const Cart7 = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const Cart8 = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="button">
                <i class="fa-solid fa-cart-shopping"></i> &nbsp; Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {initial}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="image 1.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark mt-auto"
                      id="button1"
                      onClick={() => Cart7()}
                    >
                      View Option
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: '0.5rem', right: '0.5rem' }}
                >
                  Sale
                </div>

                <img className="card-img-top" src="image 2.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder" style={{ marginBottom: '12px' }}>
                      Special Item
                    </h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark mt-auto"
                      id="button2"
                      onClick={(e) => Cart1(e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: '0.5rem', right: '0.5rem' }}
                >
                  Sale
                </div>

                <img className="card-img-top" src="image 3.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark mt-auto"
                      id="button3"
                      onClick={(f) => Cart2(f)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="image 4.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder" style={{ marginBottom: '12px' }}>
                      Popular Item
                    </h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    $40.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark mt-auto"
                      id="button4"
                      onClick={(g) => Cart3(g)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: '0.5rem', right: '0.5rem' }}
                >
                  Sale
                </div>

                <img className="card-img-top" src="image 5.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark mt-auto"
                      id="button5"
                      onClick={(h) => Cart4(h)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="image 6.jpg"
                  alt="..."
                  style={{ height: '220px' }}
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $120.00 - $280.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark mt-auto"
                      id="button6"
                      onClick={() => Cart8()}
                    >
                      View Option
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: '0.5rem', right: '0.5rem' }}
                >
                  Sale
                </div>

                <img className="card-img-top" src="image 7.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder" style={{ marginBottom: '12px' }}>
                      Special Item
                    </h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark mt-auto"
                      id="button7"
                      onClick={(i) => Cart5(i)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="image 8.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder" style={{ marginBottom: '12px' }}>
                      Popular Item
                    </h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    $40.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark mt-auto"
                      id="button8"
                      onClick={(j) => Cart6(j)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
