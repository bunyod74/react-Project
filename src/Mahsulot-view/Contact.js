import React , {useState , useEffect} from "react";
import axios from 'axios'
import './Contact.scss'
import Maps from "../Map/Map";

const Contact = () =>{



    // start Hooks page

      const  [contact, setContact] = useState({
    name: '',
    surname: '',
    number: '',
    magazin: '',
    message: ''
  })

  const changeHandle = (e) => {
    setContact({...contact , [e.target.name]:e.target.value})
  }
  async function SendForm(e){
    await axios.post('http://localhost:5000/feedback', contact)
    .then((res)=>{
          e.preventDefult()
      console.log(res)
    }) .catch((err)=>{
      console.log(err)
    })
  }

  // const [contacts , setContacts] = useState([])
  // useEffect(async () => {
  //   const res = await axios.get('http://localhost:5000/contact')
  //   setContacts(res.date)
  // }, [])












    return(
        <>

        <div className="images"></div>

        <h1 className="contact_basic_text" >
            Biz bilan bog'lanish
        </h1>

<div className="container">
  <div className="row">
    <div className="col-12 col-md-5">
        <h4 className="contact_basic_text1">
            Assalomu Alaykum Aziz Obunachilar!
        </h4>
             <p className="contact_p"> Bu sahifa orqali siz admin bilan bog'lanishingiz va o'zingizni 
             savollaringizni va yana qo'shimcha qulaylik yaratish uchun takliflar berishiz mumkin.</p>
        
                <h4 className="contact_basic_text1" > Biz bilan bog'lanish uchun </h4>
                    <p className="contact_p">Tel: +998(99) 002 88 35 </p> 
                    <p className="contact_p"> Email manzil: TechnobackTeam @gamil.com </p>
                <h4 className="contact_basic_text1">Manzil:</h4>
                    <p className="contact_p"> Farg'ona viloyati, Fargo'na shahri, Farg 'ona soliq boshqarmasi 
                    to'g'risidagi "Verona mebel" binosi 3 qavat.</p>
    </div>
    <div className="col-12 col-md-7">



<div className="container">
  <div className="row">
    <div className="col-sm-6 order-5">
<form onSubmit={SendForm}>
  <div className="mb-3">
    <input type="text" placeholder="Familiyangizni yozing" value={contact.surname} name="surname" onChange={changeHandle} className="form-control" aria-describedby="emailHelp"/>
  </div>
</form>
    </div>
    <div className="col-sm-6 order-1">
<form onSubmit={SendForm}>
  <div className="mb-3">
    <input type="text" placeholder="Ismizngizni yozing" value={contact.name} name="name" onChange={changeHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
</form>
    </div>
  </div>
</div>





<div className="container">
  <div className="row">
    <div className="col-sm-6 order-5">
<form onSubmit={SendForm}>
  <div className="mb-3">
    <input type="text" placeholder="Offisingiz nomini yozing" value={contact.magazin} name="magazin" onChange={changeHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
</form>
    </div>
    <div className="col-sm-6 order-1">
<form>
  <div className="mb-3">
    <input type="number" placeholder="Telefon raqamingizni yozing" value={contact.number} name="number" onChange={changeHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
</form>
    </div>
  </div>
</div>

<div class="form-floating">
  <textarea class="form-control contact_text_area_width" value={contact.message} name="message" onChange={changeHandle} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Xabar Yozing...</label>
</div>

    <form onSubmit={SendForm}>
             <button type="submit" className="btn btn-primary for_btn_style77">Submit</button>
    </form>

    </div>
  </div>
</div>

            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <Maps />
                </div>
                <div class="col-sm-12 col-md-12">
                  
                </div>
              </div>
            </div>
        
          






                    {/* {
            contacts.map((elem) =>{

                return(

                    <div className="cart" key={elem._id}>

                        <p>{elem.name}</p>
                        <p>{elem.surname}</p>
                        <p>{elem.number}</p>
                        <p>{elem.magazin}</p>
                        <p>{elem.message}</p>

                    </div>
                    
                )

            })
        } */}

        </>
    )
}

export default Contact