import React from "react";
import Steps from "./steps";
import Heading from "./heading";

function Third(props) {
  
  return (
    <>
      <Heading count={props.element} />
      <Steps count={props.element} />

      <div className="flex ml-16 mt-2 mr-40 flex-wrap">
        <label className=" mr-32 border-2 w-48 h-28 flex justify-center items-center">
          <img
            src="./icons8-user-male-50.webp"
            alt="male"
            className=" w-20 h-20"
          />
          <input type="radio" name="gander" value="male"></input>
        </label>
        <label
          className=" border-2 w-48 h-28 flex justify-center items-center"
          onClick={props.radio}
        >
          <img
            src="./icons8-female-user-50.webp"
            alt="female"
            className=" w-20 h-20"
          />
          <input type="radio" value="female" name="gender"></input>
        </label>
      </div>
      <div className=" ml-20 mt-6">
        <label className=" block mb-4">
          <input type="radio" name="last" /> Add This Option.
        </label>
        <label>
          <input type="radio" name="last" /> Click On This CheckBox.
        </label>
      </div>
    </>
  );
}

export default Third;
