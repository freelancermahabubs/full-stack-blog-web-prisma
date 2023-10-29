"use client"
import {useState} from "react";
import {ErrorToast,IsEmpty} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
const PINVerifyForm = () => {
    const [data, setData] = useState({email:"",pin:""});
    const [submit, setSubmit] = useState(false);
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = (e) => {
      e.preventDefault();
      if(IsEmpty(data.pin)){
          ErrorToast("Valid PIN Code Required")
      }
      else{
          setSubmit(true)
          alert(JSON.stringify(data));
      }
    }

    return (
       <div className="row h-100 justify-content-center center-screen">
           <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
               <form onSubmit={formSubmit} className="card animated fadeIn p-5 gradient-bg">
                   <h5 className="mb-3">Verification PIN</h5>
                   <label className="form-label">6 Digit Code</label>
                   <input onChange={(e)=>{inputOnChange("pin",e.target.value)}} type="email" className="form-control mb-2"/>
                   <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Verify"/>
               </form>
           </div>
       </div>
    );
};
export default PINVerifyForm;