import CardComponent from "@/components/card/CardProductDetail";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = "https://store.istad.co/api/products/";

const getData = async (id: string) => {
	const res = await fetch(`${ENDPOINT}${id}`);
	const data = await res.json();
	console.log(data);
	return data;
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id;

	// fetch data
	const product = await fetch(`https://store.istad.co/api/products/${id}`).then((res) => res.json());


	return {
		title: product.seller,
		description: product.desc,
		openGraph: {
			images: product.image,
		},
	};
}

export default async function Detail(props: Props) {
	let data = await getData(props.params.id);

	return (
		<div className="h-screen grid place-content-center ">
			<CardComponent
				seller={data?.seller || "No Seller here"}
				desc={data?.desc || "No Description"}
				price={data?.price || "Do not have product price"}
				image={
					data?.image ||
					"https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
				}
			/>
		</div>
	);
}
