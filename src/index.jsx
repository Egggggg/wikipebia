import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import Page from "./page";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path=":page" element={<Page />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
