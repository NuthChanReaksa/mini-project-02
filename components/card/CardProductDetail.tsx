import { Card } from "flowbite-react";

type PropsType = {
	seller: string;
	image: string;
	desc: string;
	price: number;
};

export default function CardComponent({
	seller,
	image,
	desc,
	price,

}: PropsType) {
	return (
		<Card className="max-w-sm p-4" imgSrc={image} horizontal>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Seller is name :
				<div>
					{seller}
				</div>

			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{desc}
			</p>
			<h3 className="font-normal text-gray-700 dark:text-gray-400 text-3xl">
				Price : ${price}
			</h3>
			<div className="flex items-center justify-between">

				<a
					href="#"
					className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
				>
					Buy Now
				</a>
			</div>
		</Card>
	);
}
