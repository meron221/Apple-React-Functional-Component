import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/iphones")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, []);
	// console.log(products);
	let order = 1;
	return (
		<section className="internal-page-wrapper mt-4">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 mt-5">
						<div className="title-wraper bold">Iphones</div>
						<div className="brief-description">The best for the brightest.</div>
					</div>
				</div>

				{products.map((product) => {
					let id = product.product_url;
					let title = product.product_name;
					let img = product.product_img;
					let Brief = product.product_brief_description;
					let StartPrice = product.starting_price;
					let PriceRange = product.price_range;
					let productPage = "/iphones/" + id;

					let order1 = 1;
					let order2 = 2;
					if (order !== 1) {
						order1 = 2;
						order2 = 1;
						order--;
					} else {
						order++;
					}

					return (
						<div
							key={id}
							className="row justify-content-center text-center product-holder "
						>
							{/* title , price and link start */}
							<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
								<div className="product-title">{title}</div>
								<div className="product-brief">{Brief}</div>
								<div className="starting-price">
									{`Starting at ${StartPrice}`}
								</div>
								<div className="monthly-price">{PriceRange}</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<Link to={productPage}>Learn more</Link>
										</li>
									</ul>
								</div>
							</div>
							{/* title , price and link end */}

							{/* img start */}
							<div className={`col-sm-12 col-md-6 order-${order2}`}>
								<div className="prodict-image">
									<img src={img} alt="" />
								</div>
							</div>
							{/* img end */}
						</div>
					);
				})}
			</div>
			<br />
			<br />
		</section>
	);
}
export default Iphone;
