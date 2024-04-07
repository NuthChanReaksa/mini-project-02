'use client'
import { SetStateAction, useEffect, useState} from "react";
import CardProduct from "@/components/card/CardProduct";
import {useRouter} from "next/navigation";
import CardHomeProduct from "@/components/card/CardHomeProduct";
import FooterComponent from "@/components/footer/FooterComponent";

const ENDPOINT = "https://store.istad.co/api/products/";
const PRODUCTS_PER_PAGE = 10; // Update this value based on your API

const ServiceHome = () => {
    const [products, setProducts] = useState([]);
    const [session, setSession] = useState("some session data");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(PRODUCTS_PER_PAGE);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const router = useRouter();

    const fetchProducts = async (url: string | URL | Request, pageNumber: SetStateAction<number>) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data.results);
            setNextPage(data.next);
            setPrevPage(data.previous);
            setCurrentPage(pageNumber);
            const totalPages = Math.ceil(data.total / PRODUCTS_PER_PAGE);
            setTotalPages(totalPages);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        if (!session) {
            throw new Error("Auth is required to access this resource");
        }

        const url = `${ENDPOINT}?page=${currentPage}`;
        fetchProducts(url, currentPage);
    }, [session, currentPage]);

    const handlePageChange = (pageNumber : any) => {
        const url = `${ENDPOINT}?page=${pageNumber}`;
        fetchProducts(url, pageNumber);
    };

    const handleNextPage = () => {
        if (nextPage) {
            const pageNumber = currentPage + 1;
            fetchProducts(nextPage, pageNumber);
        }
    };

    const handlePrevPage = () => {
        if (prevPage) {
            const pageNumber = currentPage - 1;
            fetchProducts(prevPage, pageNumber);
        }
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <main>
            <CardHomeProduct />
            <div>
                <h1 className={"text-center text-6xl my-5"}>
                    Our Services Products Here
                </h1>
            </div>
            <div className="mt-6 container mx-auto grid grid-cols-5 grid-flow-row gap-4">
                {products.map((product:any, index) => (
                    <CardProduct
                        onClick={() => router && router.push(`/service/${product.id}`)}
                        key={index}
                        seller={product.seller}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>
            <div className="flex justify-center space-x-2 my-4">
                <button onClick={handlePrevPage} disabled={!prevPage} className="px-2 sm:px-4 py-1 sm:py-2 bg-cyan-700 text-white rounded disabled:opacity-50 hover:bg-cyan-800 transition duration-200 ease-in-out">Previous</button>
                {pageNumbers.map((number) => (
                    <button key={number} onClick={() => handlePageChange(number)} disabled={currentPage === number} className={`px-2 sm:px-4 py-1 sm:py-2 rounded hidden sm:inline-block ${currentPage === number ? 'bg-cyan-500 text-white' : 'bg-white text-bg-cyan-700'} hover:bg-cyan-700 hover:text-white transition duration-200 ease-in-out`}>
                        {number}
                    </button>
                ))}
                <button onClick={handleNextPage} disabled={!nextPage} className="px-2 sm:px-4 py-1 sm:py-2 bg-cyan-700 text-white rounded disabled:opacity-50 hover:bg-cyan-800 transition duration-200 ease-in-out">Next</button>
            </div>
        </main>
    );
};

export default ServiceHome;


// 'use client'
// import { useEffect, useState } from "react";
// import CardProduct from "@/components/card/CardProduct";
// import { useRouter } from "next/navigation";
// import CardHomeProduct from "@/components/card/CardHomeProduct";
// import FooterComponent from "@/components/footer/FooterComponent";
//
//
// const ENDPOINT = "https://store.istad.co/api/products/";
//
// const ServiceHome = () => {
// 	const [products, setProducts] = useState([]);
// 	const [session, setSession] = useState("some session data");
// 	const [currentPage, setCurrentPage] = useState(1);
// 	const [itemsPerPage, setItemsPerPage] = useState(10);
// 	const router = useRouter();
//
// 	useEffect(() => {
// 		if (!session) {
// 			throw new Error("Auth is required to access this resource");
// 		}
//
// 		fetch(ENDPOINT)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				const productsArray = data.results;
// 				setProducts(productsArray);
// 			})
// 			.catch((error) => {
// 				console.error("Error fetching data:", error);
// 			});
// 	}, [session, currentPage, itemsPerPage]);
//
// 	const paginateProducts = (products : any) => {
// 		const startIndex = (currentPage - 1) * itemsPerPage;
// 		const endIndex = startIndex + itemsPerPage;
// 		return products.slice(startIndex, endIndex);
// 	};
//
// 	const paginatedProducts = paginateProducts(products);
//
// 	return (
// 		<main>
//
// 				<CardHomeProduct />
//
// 			<div>
//
// 					<h1 className={"text-center text-6xl my-5"}>
// 						Our Services Products Here
// 					</h1>
// 			</div>
//
// 			<div className="mt-6 container mx-auto grid grid-cols-5 grid-flow-row gap-4">
// 				{paginatedProducts.map((product: any, index: any) => (
// 					<CardProduct
// 						onClick={() => router && router.push(`/service/${product.id}`)}
// 						key={index}
// 						seller={product.seller}
// 						image={product.image}
// 						price={product.price}
// 					/>
// 				))}
//
// 			</div>
//
//
// 		</main>
//
// 	);
// };
//
// export default ServiceHome;
