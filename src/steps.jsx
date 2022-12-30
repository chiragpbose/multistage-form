import React from "react";

function Steps(props) {
  return (
    <div className="ml-16 mt-1">
      <p className=" text-xs text-gray-500">Steps {props.count + 1}/3</p>
      <h2 className=" font-extrabold text-xl mt-2">
        {props.count == 0
          ? "Sign Up"
          : props.count == 1
          ? "Message"
          : "Checkbox"}
      </h2>
    </div>
  );
}

export default Steps;
