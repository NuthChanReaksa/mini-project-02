'use client'
import { useEffect, useState } from "react";
import CardProduct from "@/components/card/CardProduct";
import { useRouter } from "next/navigation";
import CardHomeProduct from "@/components/card/CardHomeProduct";
import FooterComponent from "@/components/footer/FooterComponent";


const ENDPOINT = "https://store.istad.co/api/products/";

const ServiceHome = () => {
	const [products, setProducts] = useState([]);
	const [session, setSession] = useState("some session data");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const router = useRouter();

	useEffect(() => {
		if (!session) {
			throw new Error("Auth is required to access this resource");
		}

		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => {
				const productsArray = data.results;
				setProducts(productsArray);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [session, currentPage, itemsPerPage]);

	const paginateProducts = (products : any) => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return products.slice(startIndex, endIndex);
	};

	const paginatedProducts = paginateProducts(products);

	return (
		<main>

				<CardHomeProduct />

			<div>

					<h1 className={"text-center text-6xl my-5"}>
						Our Services Products Here
					</h1>
			</div>

			<div className="mt-6 container mx-auto grid grid-cols-5 grid-flow-row gap-4">
				{paginatedProducts.map((product: any, index: any) => (
					<CardProduct
						onClick={() => router && router.push(`/service/${product.id}`)}
						key={index}
						seller={product.seller}
						image={product.image}
						price={product.price}
					/>
				))}

			</div>


		</main>

	);
};

export default ServiceHome;
