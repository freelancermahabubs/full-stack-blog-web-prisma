"use client";
import React, {useState} from "react";
import {ErrorToast, IsEmail, SuccessToast} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
const Subscribe = () => {
  let [data, setData] = useState({email: ""});
  const [submit, setSubmit] = useState(false);
  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
    } else {
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      let res = await fetch("/api/subscribe", options);
      let ResJson = await res.json();
      setSubmit(false);
      setData({email: ""});
      if (ResJson["status"] === "success") {
        SuccessToast("Request Success");
      } else {
        ErrorToast("Request Fail");
      }
    }
  };

  return (
    <div className="card p-3 shadow-sm">
      <span className="f-52 text-center text-muted">
        {" "}
        <i className="bi  bi-envelope"></i>
      </span>
      <h6 className="text-center mb-3 mt-0">News Letter</h6>
      <input
        value={data.email}
        onChange={(e) => {
          inputOnChange("email", e.target.value);
        }}
        type="text"
        placeholder="Email Address"
        className="form-control mb-3"
      />
      <SubmitButton
        onClick={formSubmit}
        className="btn btn-danger mt-2 w-100"
        submit={submit}
        text="Submit"
      />
    </div>
  );
};

export default Subscribe;
