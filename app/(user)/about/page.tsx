import AboutPage from "@/components/aboutPage/AboutPage";
import React from "react";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: "About Us",
    description: "this is about us page",
    openGraph:{
        type:"website",
        url:"https://store.istad.co/about",
        title:"CSTAD Ecommerce",
        description:"this is about us page",
        images:"https://stock.adobe.com/images/closeup-image-of-young-woman-shpping-online-holding-plastic-credit-card/356125516",
    },
}
export default function page() {
    return (
        <div>
            <AboutPage/>
        </div>
    );
}
