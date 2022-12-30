import React from "react";
import Signup from "./signup";
import Second from "./second";
import Third from "./third";
import ThankYou from "./thankYou";

function First(props) {
  return (
    <div className="w-1/1 h-full flex">
      <div className=" bg-blue w-2/8 h-full rounded-l-xl">
        <img
          id="mainImage"
          src={
            props.count == 0
              ? "./form1.webp"
              : "" || props.count == 1
              ? "./form2.webp"
              : "" || props.count >= 2
              ? "./form3.webp"
              : ""
          }
          className="h-full rounded-l-xl"
          alt="first-image"
        ></img>
      </div>
      <div className=" w-9/12 h-full rounded-r-xl">
        {props.count == 0 ? (
          <Signup
            element={props.count}
            firstName={props.firstname}
            state={props.state}
            lastName={props.lastName}
            email={props.email}
            address={props.address}
          />
        ) : (
          ""
        )}
        {props.count == 1 ? (
          <Second
            element={props.count}
            textarea={props.textaria}
            state={props.state}
          />
        ) : (
          ""
        )}
        {props.count == 2 ? (
          <Third element={props.count} radio={props.radio} state={props.state} />
        ) : (
          ""
        )}

        {props.count <= 2 ? (
          <div className="float-right mr-40">
            <button
              id="decrese"
              onClick={props.decrese}
              className="w-32 font-bold h-10 mt-2 rounded mr-2 hover:border-2 hover:border-slate-900"
              style={
                props.count > 0
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            >
              Back
            </button>
            <button
              onClick={props.clickEvent}
              className="w-32 bg-blue-700 font-bold h-10 mt-2 rounded hover:border-2 hover:border-slate-900"
            >
              {props.count < 2 ? "Next" : "Submit"}
            </button>
          </div>
        ) : (
          <ThankYou element={props.count} />
        )}
      </div>
    </div>
  );
}

export default First;
