import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ch1 from "./images/ch1.jpg";
import ch2 from "./images/ch2.jpg";
import ch3 from "./images/ch3.jpg";
import ch4 from "./images/ch4.jpg";
import ch5 from "./images/ch5.jpg";
import ch6 from "./images/ch6.jpg";
import ch7 from "./images/ch7.jpg";
import ch8 from "./images/ch8.jpg";

export default function ProductCha() {
const tab = [
{
image: ch1,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'chambre'
},{
image: ch2,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'chambe'
},{
image: ch3,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'chambre'
},{
image: ch4,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'chambre'
},{
image: ch5,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'chambre'
},{
image: ch6,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'chambre'
},{
  image: ch7,
  nom: 'tableau',
  dimention: '300x300',
  prix: '100$',
  type: 'chambre'
  },{
    image: ch8,
    nom: 'tableau',
    dimention: '300x300',
    prix: '100$',
    type: 'chambre'
    }
];

return (
<section className="py-5">
<div className="container px-4 px-lg-5 mt-5">
<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
{tab.map((e) => (
<div className="col mb-5" key={e.nom}>
<div className="card h-100">
{/* -- Product image-- */}
<img className="card-img-top h-50" src={e.image} alt={e.nom} />
{/* -- Product details-- */}
<div className="card-body p-4">
<div className="text-center">
{/* -- Product name-- */}
<h5 className="fw-bolder">{e.nom}</h5>
{/* -- Product price-- */}
<div className="d-flex justify-content-center small text-warning mb-2">
<div><FontAwesomeIcon icon={faStar} /></div>
<div><FontAwesomeIcon icon={faStar} /></div>
<div><FontAwesomeIcon icon={faStar} /></div>
<div><FontAwesomeIcon icon={faStar} /></div>
</div>
{e.prix}
</div>
</div>
{/* -- Product actions-- */}
<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div className="text-center">
<a className="btn btn-outline-secondary mt-auto" href="/">View options</a>
</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>
);
}
