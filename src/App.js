import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
// import YoutubeVideos from "./components/YoutubeVideos";
import Iphone from "./components/IphoneRoute/Iphone";
import F404 from "./components/IphoneRoute/F404";
import SpecificProduct from "./components/IphoneRoute/SpecificProduct";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/iphones" element={<Iphone />}></Route>
					<Route path="/iphone/:id" element={<SpecificProduct />}></Route>
					<Route path="*" element={<F404 />}></Route>
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// <BrowserRouter>
// 	<Routes>
// 		<Route exact path="/" element={<Home />} />
// 		<Route exact path="/login" element={<Login />} />
// 		<Route exact path="/signup" element={<Signup />} />
// 	</Routes>
// </BrowserRouter>;
