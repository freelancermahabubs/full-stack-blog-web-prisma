"use client"
import {useState} from "react";
import {ErrorToast,IsEmpty} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
const SetPasswordForm = () => {
    const [data, setData] = useState({password:"",c_password:""});
    const [submit, setSubmit] = useState(false);

    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }

    const formSubmit = (e) => {
      e.preventDefault();
      if(IsEmpty(data.password)){
          ErrorToast("Password Required")
      }
      else if(IsEmpty(data.c_password)){
          ErrorToast("Confirm Password Required")
      }
      else if(data.c_password===data.password){
          ErrorToast("Password & Confirm Password Should be Same")
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

                   <h5 className="mb-3">Set Password</h5>
                   <label className="form-label">Password</label>
                   <input onChange={(e)=>{inputOnChange("password",e.target.value)}} type="password" className="form-control mb-2"/>

                   <label className="form-label">Confirm Password</label>
                   <input onChange={(e)=>{inputOnChange("c_password",e.target.value)}} type="password" className="form-control mb-1"/>

                   <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Confirm"/>

               </form>
           </div>
       </div>
    );
};
export default SetPasswordForm;