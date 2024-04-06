
import ViewPageLayout from "@/components/view/ViewPageLayout";

export type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any;
};
const BaseUrl = "https://store.istad.co/api/products/"
const getData = async (id: number) => {
    const res = await fetch(`https://store.istad.co/api/products/${id}/`);
    const data = await res.json();
    console.log(data);
    return data;
};

const ViewPage = async (props:PropsParams) =>{
    let data = await getData(props.params.id);
    console.log(data)
    return(
        <main>
            <ViewPageLayout price={data.price} desc={data.desc} name={data.name}  image={data.image}  seller={data.seller} />
        </main>
    )
}

export default ViewPage;