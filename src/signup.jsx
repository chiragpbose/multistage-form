import React from "react";
import Heading from "./heading";
import Steps from "./steps";

function Signup(props) {
  return (
    <>
      <Heading count={props.element} />
      <Steps count={props.element} />
      <div className="flex ml-16 mt-2 mr-40 flex-wrap border-b-2">
        <div className="w-1/2">
          <label>
            <span className=" block font-xs  text-black">First Name</span>
            <input
              type="text"
              onChange={props.firstName}
              value={props.state.input.firstName}
              className="peer border-2 h-8 w-52 required:border-red-500 cursor-pointer focus:outline-none focus:border-sky-500 rounded"
            />
            <p
              className="mt-1 text-purple-600 text-sm"
              style={{ visibility: props.state.error.firstName }}
            >
              Please provide a valid First Name.
            </p>
          </label>
        </div>
        <div className="w-1/2">
          <label>
            <span className="block font-sm">Last Name</span>
            <input
              type="text"
              onChange={props.lastName}
              value={props.state.input.lastName}
              className="peer border-2 h-8 w-52 cursor-pointer focus:outline-none focus:border-sky-500 rounded"
            />
            <p
              className="mt-1 text-pink-600 text-sm"
              style={{
                visibility: props.state.error.lastName,
              }}
            >
              Please provide a valid Last Name.
            </p>
          </label>
        </div>
        <div className="w-1/2">
          <label>
            <span className="block font-sm peer-invalid:text-pink-600">
              Date Of Birth
            </span>
            <input
              type="date"
              defaultValue="1995-12-19"
              className="peer border-2 h-8 w-52 gap-3  cursor-pointer flex flex-row-reverse focus:outline-none focus:border-sky-500 rounded"
            />
            <p className="mt-1 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid Date.
            </p>
          </label>
        </div>
        <div className="w-1/2">
          <label>
            <span className="block font-sm">Email Address</span>
            <input
              type="Email"
              onChange={props.email}
              value={props.state.input.email}
              className="peer border-2 h-8 w-52 cursor-pointer focus:outline-none focus:border-sky-500 rounded"
            />
            <p
              className="mt-1  text-pink-600 text-sm"
              style={{
                visibility: props.state.error.email,
              }}
            >
              Please provide a valid email address.
            </p>
          </label>
        </div>
        <div className=" w-11/12">
          <label>
            <span className="block font-sm">Address</span>
            <input
              type="text"
              onChange={props.address}
              value={props.state.input.address}
              className="peer border-2 h-8 w-full cursor-pointer focus:outline-none focus:border-sky-500 rounded"
            />
            <p
              className="mt-1 text-pink-600 text-sm"
              style={{
                visibility: props.state.error.address,
              }}
            >
              Please provide a valid address.
            </p>
          </label>
        </div>
      </div>
    </>
  );
}

export default Signup;
