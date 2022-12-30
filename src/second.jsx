import React from "react";
import Steps from "./steps";
import Heading from "./heading";

function Second(props) {
  return (
    <>
      <Heading count={props.element} />
      <Steps count={props.element} />
      <div className="flex ml-16 mt-2 mr-40 flex-wrap border-b-2 flex-col">
        <div className=" w-11/12">
          <label>
            <span className="block font-xs font-light">Message</span>
            <textarea
              type="text"
              onChange={props.textarea}
              value={props.state.input.textaria}
              className="peer border-2 h-44  font-light w-full cursor-pointer focus:outline-none focus:border-sky-500 rounded"
            />
            <p
              className="mt-1 text-purple-600 text-sm"
              style={{
                visibility: props.state.error.textaria,
              }}
            >
              Please Fill in.
            </p>
          </label>
        </div>
        <div className=" flex justify-around pb-2">
          <label>
            <input type="radio" name="select" defaultChecked></input> The Number
            One Choice.
          </label>
          <label className="">
            <input type="radio" name="select"></input> The Number Two Choice.
          </label>
        </div>
      </div>
    </>
  );
}

export default Second;
