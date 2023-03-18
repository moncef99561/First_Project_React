import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import c1 from "./images/c1.jpg";
import c2 from "./images/c2.jpg";
import c3 from "./images/c3.jpg";
import c4 from "./images/c4.jpg";
import c5 from "./images/c5.jpg";
import c6 from "./images/c6.jpg";
import c7 from "./images/c7.jpg";
import c8 from "./images/c8.jpg";

export default function ProductCha() {
const tab = [
{
image: c1,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'cuisine'
},{
image: c2,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'cuisine'
},{
image: c3,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'cuisine'
},{
image: c4,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'cuisine'
},{
image: c5,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'cuisine'
},{
image: c6,
nom: 'tableau',
dimention: '300x300',
prix: '100$',
type: 'cuisine'
},{
  image: c7,
  nom: 'tableau',
  dimention: '300x300',
  prix: '100$',
  type: 'cuisine'
  },{
    image: c8,
    nom: 'tableau',
    dimention: '300x300',
    prix: '100$',
    type: 'cuisine'
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