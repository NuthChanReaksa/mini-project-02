import Image from "next/image";

type Props = {
    image: string;
    seller: string;
    desc: string;
    price: number;
    name: string;
};

const viewPageLayout =({image, seller,desc,price,name}:Props) =>{
    return (
        <main className="container mx-5 mt-20">
            <section className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <Image src={image} alt="" className="w-full aspect-square object-cover rounded-lg"/>

                </div>
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <div>
                    <span className="text-violet-600 font-semibold">
                        {seller}
                    </span>
                        <h1 className="text-3xl font-bold">{name}</h1>
                    </div>
                    <p className="text-gray-600">
                        {desc}
                    </p>
                    <h6 className="text-2xl font-semibold"> ${price}</h6>
                    <div className="flex flex-row items-center gap-16">
                        <div className="flex flex-row items-center">
                            <button className="bg-gray-200 py-2 px-3 text-3xl text-violet-600 rounded-lg">-</button>
                            <span className='py-4 px-6 rounded-lg'>1</span>
                            <button className="bg-gray-200 py-2 px-3 text-3xl text-violet-600 rounded-lg">+</button>
                        </div>
                        <button
                            className="bg-violet-400 text-white font-semibold py-3 px-6 h-full rounded-lg md:px-16 md:py-3">Add
                            to Cart
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default viewPageLayout;