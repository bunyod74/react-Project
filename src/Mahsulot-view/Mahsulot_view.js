import React , {useState , useEffect} from "react";
import axios from 'axios'
import './Contact.scss'
import Maps from "../Map/Map";
import imag from './img/download.jpg'

const Mahsulott = () =>{


      const  [mahsulot, setmahsulot] = useState({
        name: String,
        information: String,
        id: Number,
        vaqti:String
  })


      {
            mahsulot.map((elem) =>{

                return(
                     
                    <div className="card" key={elem._id}>

<div className="begin-page container">
            <div class="card-m card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={elem.name} class="card-img img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{elem.message}</h5>
        <p class="card-text">{elem.surname}</p>
        <h1>salom jpiriq</h1>
      </div>
    </div>
  </div>
</div>
            </div>



                    </div>
                    
                )

            })
        } 
}

export default Mahsulott