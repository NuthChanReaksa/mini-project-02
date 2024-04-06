"use client";
import { ProductType } from "@/lib/definitions";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Dashboard() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState(false);
	const [productDetail, setProductDetail] = useState<ProductType | null>(null);
	const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
	const router = useRouter();
	// fetch products
	useEffect(() => {
		setLoading(true);
		fetch(`https://store.istad.co/api/products/?page=1&page_size=100`)
			.then((res) => res.json())
			.then((data) => {
				const result= data.results;
				setProducts(result);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	const [imagePlaceholder, setImagePlaceholder] = useState<string>(
		"https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
	);

	const handleViewProduct = (product: ProductType) => {
		setProductDetail(product);
		setOpenModal(true);
	};
    const handleUpdate = (product: ProductType) => {
        setSelectedProduct(product);
        router.push(`/update/${product.id}`);
    };
    const handleDelete = (product: ProductType) => {
        setSelectedProduct(product);
        router.push(`/delete/${product.id}`);
    };

	const columns: TableColumn<ProductType>[] = [
		{
			name: "Seller",
			selector: (row) => row.seller,
		},
		{
			name: "Price (USD)",
			selector: (row) => row.price,
			sortable: true,
		},
		{
			name: "Image",
			selector: (row): any => (
				<img className="w-16 h-16" src={row.image} alt={row.image} />
			),
			sortable: true,
		},
		{
			name: "Category",
			selector: (row) => row.category,
			sortable: true,
		},
		{
			name: "Action",
			selector: (row): any => (
				<div>
					<button
						onClick={() => handleViewProduct(row)}
						className="text-blue-600 mx-2"
					>
						view
					</button>
					<button className="text-yellow-400 pe-2" onClick={() => handleUpdate(row)}>Update</button>
					<button className="text-red-500" onClick={() => handleDelete(row)}>Delete</button>
				</div>
			),
		},
	];

	return (
		<main className="h-screen">
			<DataTable
				fixedHeader
				progressPending={loading}
				columns={columns}
				data={products}
				pagination
				customStyles={customStyles}
				striped
				highlightOnHover
			/>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<Modal.Header>Product Detial</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<Image
							src={productDetail?.image || imagePlaceholder}
							alt={productDetail?.seller || "Untitle"}
							width={250}
							height={300}
						/>
						<h3 className="text-3xl text-gray-700">{productDetail?.seller || "No seller"}</h3>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							{productDetail?.desc || "No description"}
						</p>

					</div>
				</Modal.Body>
			</Modal>
		</main>
	);
}

const customStyles = {
	rows: {
		style: {
			minHeight: "72px", // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: "38px", // override the cell padding for head cells
			paddingRight: "8px",
			fontSize: "1.2rem",
			backgroundColor: "#f1f1f1",
		},
	},
	cells: {
		style: {
			paddingLeft: "38px", // override the cell padding for data cells
			paddingRight: "8px",
		},
	},
};
