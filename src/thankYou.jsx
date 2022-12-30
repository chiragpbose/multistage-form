import React from "react";

function ThankYou() {
	function refresh() {
		window.location.reload();
	}
	return (
		<>
			<h1 className="mt-14 ml-20 font-extrabold">Thank You For Submitting</h1>
			<h3 className="ml-20">We Have received your details</h3>
			<button
				onClick={refresh}
				className=" w-52 h-12 border-slate-900 border-solid border-2 mt-6 ml-20 bg-blue-500"
			>
				Submit Another Response
			</button>
		</>
	);
}

export default ThankYou;
