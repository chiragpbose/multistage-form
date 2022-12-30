import React from "react";

function Heading(props) {
  return (
    <>
      <ul className="flex ml-16 mt-10 mr-40 pb-6 border-b-2">
        <li className="flex mr-10">
          <div
            className="h-8 w-8 mr-2  rounded flex items-center justify-center "
            style={
              props.count == 0
                ? { backgroundColor: "blue", color: "white" }
                : { backgroundColor: "wheat" }
            }
          >
            {props.count > 0 ? (
              <img
                src="./icons8-checked-checkbox-16.webp"
                className="w-1/1"
                alt="right"
              />
            ) : (
              1
            )}
          </div>
          <h3 className="font-medium py-1">Sign Up</h3>
        </li>
        <li className="flex mr-10">
          <div
            className="h-8 w-8 mr-2 rounded flex items-center justify-center  text-gray-700/50"
            style={
              props.count == 1
                ? { backgroundColor: "blue", color: "white" }
                : { backgroundColor: "wheat" }
            }
          >
            {props.count > 1 ? (
              <img
                src="./icons8-checked-checkbox-16.webp"
                className="w-1/1"
                alt="right"
              />
            ) : (
              2
            )}
          </div>
          <h3 className="font-medium text-gray-500 py-1">Message</h3>
        </li>
        <li className="flex">
          <div
            className="h-8 w-8   rounded flex items-center justify-center text-gray-700/50 mr-2"
            style={
              props.count == 2
                ? { backgroundColor: "blue", color: "white" }
                : { backgroundColor: "wheat" }
            }
          >
            {props.count > 2 ? (
              <img
                src="./icons8-checked-checkbox-16.webp"
                className="w-1/1"
                alt="right"
              />
            ) : (
              3
            )}
          </div>
          <h3 className="font-medium text-gray-500 py-1">Checkbox</h3>
        </li>
      </ul>
    </>
  );
}

export default Heading;
