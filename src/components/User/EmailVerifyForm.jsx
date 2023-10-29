"use client"
import {useState} from "react";
import {ErrorToast,IsEmail} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
const EmailVerifyForm = () => {
    const [data, setData] = useState({email:""});
    const [submit, setSubmit] = useState(false);
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = (e) => {
      e.preventDefault();
      if(IsEmail(data.email)){
          ErrorToast("Valid Email Address Required")
      }
      else{
          setSubmit(true)
          alert(JSON.stringify(data))
      }
    }

    return (
       <div className="row h-100 justify-content-center center-screen">
           <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
               <form onSubmit={formSubmit} className="card animated fadeIn p-5 gradient-bg">
                   <h5 className="mb-3">Email Address</h5>
                   <label className="form-label">User Email</label>
                   <input onChange={(e)=>{inputOnChange("email",e.target.value)}} type="email" className="form-control mb-2"/>
                   <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Next"/>
               </form>
           </div>
       </div>
    );
};
export default EmailVerifyForm;