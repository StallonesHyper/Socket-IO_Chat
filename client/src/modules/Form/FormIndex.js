import React from "react";
import InputIndex from "../../components/Input/InputIndex";
import ButtonIndex from "../../components/Buttons/ButtonIndex";

function FormIndex() {
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl font-extrabold">Welcome</h1>
      </div>
      <div>
        <h2 className="font-3xl font-semibold text-gray-600 mb-14">
          Sign Up Now To Get Started
        </h2>
      </div>
      <InputIndex
        label="Full Name"
        placeholder="Enter Your Full Name"
        className="mb-4"
      ></InputIndex>
      <InputIndex
        label="Email ID"
        placeholder="Enter Email Id"
        className="mb-4"
      ></InputIndex>
      <InputIndex
        label="Password"
        placeholder="Enter Password"
        className="mb-4"
      ></InputIndex>
      <ButtonIndex className="w-1/4" label="Sign Up"></ButtonIndex> 
    </div>
  );
}

export default FormIndex;
