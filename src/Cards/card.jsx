import React from "react";
import './card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import c4 from "../images/c4.png"
import c5 from "../images/c5.png"
import c6 from "../images/c6.png"

function Card() {
  return (
    
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
                <div className="card h-100">
                    {/* -- Product image-- */}
                    <img className="card-img-top h-50" src={c1} alt="c1" />
                    {/* -- Product details-- */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* -- Product name-- */}
                            <h5 className="fw-bolder">Fancy Product</h5>
                            {/* -- Product price-- */}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            $40.00 - $80.00
                        </div>
                    </div>
                    {/* -- Product actions-- */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-secondary mt-auto" href="/">View options</a></div>
                    </div>
                </div>
            </div>


            <div className="col mb-5">
                <div className="card h-100">
                    {/* -- Sale badge-- */}
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    {/* -- Product image-- */}
                    <img className="card-img-top h-50" src={c2} alt="c2" />
                    {/* -- Product details-- */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* -- Product name-- */}
                            <h5 className="fw-bolder">Special Item</h5>
                            {/* -- Product reviews-- */}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            {/* -- Product price-- */}
                            <span className="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    {/* -- Product actions-- */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-secondary mt-auto" href="/">Add to cart</a></div>
                    </div>
                </div>
            </div>


            <div className="col mb-5">
                <div className="card h-100">
                    {/* -- Sale badge-- */}
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    {/* -- Product image-- */}
                    <img className="card-img-top h-50" src={c3} alt="c3" />
                    {/* -- Product details-- */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* -- Product name-- */}
                            <h5 className="fw-bolder">Sale Item</h5>
                            {/* -- Product price-- */}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            <span className="text-muted text-decoration-line-through">$50.00</span>
                            $25.00
                        </div>
                    </div>
                    {/* -- Product actions-- */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-secondary mt-auto" href="/">Add to cart</a></div>
                    </div>
                </div>
            </div>


            <div className="col mb-5">
                <div className="card h-100">
                    {/* -- Product image-- */}
                    <img className="card-img-top h-50" src={c4} alt="c4" />
                    {/* -- Product details-- */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* -- Product name-- */}
                            <h5 className="fw-bolder">Popular Item</h5>
                            {/* -- Product reviews-- */}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            {/* -- Product price-- */}
                            $40.00
                        </div>
                    </div>
                    {/* -- Product actions-- */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-secondary mt-auto" href="/">Add to cart</a></div>
                    </div>
                </div>
            </div>


            <div className="col mb-5">
                <div className="card h-100">
                    {/* -- Sale badge-- */}
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    {/* -- Product image-- */}
                    <img className="card-img-top h-50" src={c5} alt="c5" />
                    {/* -- Product details-- */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* -- Product name-- */}
                            <h5 className="fw-bolder">Sale Item</h5>
                            {/* -- Product price-- */}<div className="d-flex justify-content-center small text-warning mb-2">
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            <span className="text-muted text-decoration-line-through">$50.00</span>
                            $25.00
                        </div>
                    </div>
                    {/* -- Product actions-- */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-secondary mt-auto" href="/">Add to cart</a></div>
                    </div>
                </div>
            </div>


            <div className="col mb-5">
                <div className="card h-100">
                    {/* -- Product image-- */}
                    <img className="card-img-top h-50" src={c6} alt="c6" />
                    {/* -- Product details-- */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* -- Product name-- */}
                            <h5 className="fw-bolder">Fancy Product</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            {/* -- Product price-- */}
                            $120.00 - $280.00
                        </div>
                    </div>
                    {/* -- Product actions-- */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-secondary mt-auto" href="/">View options</a></div>
                    </div>
                </div>
            </div>


            <div className="col mb-5">
                <div className="card h-100">
                    {/* -- Sale badge-- */}
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    {/* -- Product image-- */}
                    <img className="card-img-top h-50" src={c1} alt="c1" />
                    {/* -- Product details-- */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* -- Product name-- */}
                            <h5 className="fw-bolder">Special Item</h5>
                            {/* -- Product reviews-- */}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            {/* -- Product price-- */}
                            <span className="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    {/* -- Product actions-- */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-secondary mt-auto" href="/">Add to cart</a></div>
                    </div>
                </div>
            </div>


            <div className="col mb-5">
                <div className="card h-100">
                    {/* -- Product image-- */}
                    <img className="card-img-top h-50" src={c2} alt="c2" />
                    {/* -- Product details-- */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* -- Product name-- */}
                            <h5 className="fw-bolder">Popular Item</h5>
                            {/* -- Product reviews-- */}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                                <div><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            {/* -- Product price-- */}
                            $40.00
                        </div>
                    </div>
                    {/* -- Product actions-- */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-secondary mt-auto" href="/">Add to cart</a></div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>
  )}
  export default Card;

