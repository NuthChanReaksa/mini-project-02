'use client';
import { FormDataUpdate } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from './style.module.css';
import { useState } from "react";
import Image from "next/image";


const BaseUrl = "https://store.istad.co";
const AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0MzIzMzc0LCJpYXQiOjE3MTIxNjMzNzQsImp0aSI6IjZkMjUzOWIzM2U2ZjQ1Y2NhNmE1ZDY3YzI3MjhiYTg5IiwidXNlcl9pZCI6NTh9.JPoE-nZJlHknggDSfkmKCIH53RpR2dm8O7mcEf_nkTM";


const validationSchema = Yup.object().shape({
    category: Yup.object().shape({
        name: Yup.string().required('Required'),
    }),
    name: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    quantity: Yup.string().required('Required'),
    desc: Yup.string().required('Required'),
});

const UpdatePageLayout = ({ category, name, price, image, quantity, desc, seller, id }: FormDataUpdate) => {

    const initialValues: FormDataUpdate = {
        id: id,
        category: { name: category},
        name: name,
        price: price,
        image: image,
        quantity: quantity,
        desc: desc,
        seller: seller,
        fileProduct: null
    };

    const router = useRouter();
    const [imagePreview, setImagePreview] = useState("");

    const handleUpload = async (
        file: any,
        name: any,
        typeFile: "product"
    ) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", file);

        const rest = await fetch(`${BaseUrl}/api/file/${typeFile}/${initialValues.id}/`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${AccessToken}`
            },
            body: formData,
        });

        const data = await rest.json();
        return data.image;
    };


    const handleSubmitProduct = async (productPost: FormDataUpdate) => {
        try {
            // If a new image file is provided, upload it and get the new image URL
            if (productPost.fileProduct) {
                const newImageUrl = await handleUpload(productPost.fileProduct, productPost.name, "product");
                productPost.image = newImageUrl;
            }

            const response = await fetch(`${BaseUrl}/api/products/${productPost.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AccessToken}`
                },
                body: JSON.stringify(productPost)
            });
            if (response.ok) {
                router.push('/dashboard');
            } else {
                // Handle error
            }
        } catch (error) {
            console.error('Error during product update:', error);
        }
    }

    return (
        <main className={style.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmitProduct} validationSchema={validationSchema}>
                {({ setFieldValue }) => (
                    <Form className="bg-gray-100 p-4 rounded-lg w-96">
                        <h1 className={`${style.title}`}>Update Product</h1>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="category.name">
                                Category
                            </label>
                            <Field
                                type="text"
                                placeholder="Category"
                                name="category.name"
                                id="category.name"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="category.name" component="div" className={`${style.error}`} />
                        </div>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="name">
                                Name
                            </label>
                            <Field
                                type="text"
                                placeholder="Name"
                                name="name"
                                id="name"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="name" component="div" className={`${style.error}`} />
                        </div>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="price">
                                Price
                            </label>
                            <Field
                                type="text"
                                placeholder="Price"
                                name="price"
                                id="price"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="price" component="div" className={`${style.error}`} />
                        </div>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="quantity">
                                Quantity
                            </label>
                            <Field
                                type="text"
                                placeholder="Quantity"
                                name="quantity"
                                id="quantity"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="quantity" component="div" className={`${style.error}`} />
                        </div>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="image">
                                Image
                            </label>
                            <CustomInput
                                name="fileProduct"
                                setFieldValue={setFieldValue}
                                setImagePreview={setImagePreview}
                            />
                            {imagePreview && <Image src={imagePreview} alt="preview" width={200} height={200}/>}
                            <ErrorMessage name="fileProduct" component="div" className={`${style.error}`} />
                        </div>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="desc">
                                Description
                            </label>
                            <Field
                                type="text"
                                placeholder="Description"
                                name="desc"
                                id="desc"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="desc" component="div" className={`${style.error}`} />
                        </div>
                        {seller === "Jonh Wick" && (
                            <div className="mb-5">
                                <button type="submit" className={`${style.button}`}>Update</button>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </main>
    )
}

const CustomInput = ({ field, setFieldValue, setImagePreview }: any) => {
    const handleUploadFile = (e: any) => {
        const file = e.target.files[0];
        const localUrl = URL.createObjectURL(file);
        setImagePreview(localUrl);
        setFieldValue('fileProduct', file);
    };
    return (
        <div>
            <input onChange={(e) => handleUploadFile(e)} type="file" />
        </div>
    );
};

export default UpdatePageLayout;