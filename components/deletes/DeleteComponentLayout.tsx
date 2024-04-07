'use client';
import { useRouter } from 'next/navigation';
import { Field, Form, Formik } from 'formik';
import style from '@/Components/updates/style.module.css';
import { FormDataUpdate, FormDelete } from "@/lib/definitions"; // Corrected import path
const BaseUrl = "https://store.istad.co";
const AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0MzIzMzc0LCJpYXQiOjE3MTIxNjMzNzQsImp0aSI6IjZkMjUzOWIzM2U2ZjQ1Y2NhNmE1ZDY3YzI3MjhiYTg5IiwidXNlcl9pZCI6NTh9.JPoE-nZJlHknggDSfkmKCIH53RpR2dm8O7mcEf_nkTM";

const DeleteComponentLayout = ({
                                   id,
                                   category,
                                   name,
                                   price,
                                   image,
                                    quantity,
                                   desc,
                                   seller,
                               }: FormDelete) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/products/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AccessToken}`
                },
            });
            if (response.ok) {
                router.push('/dashboard');
            } else {
                // Handle error
            }
        } catch (error) {
            console.error('Error during product deletion:', error);
        }
    };

    return (
        <main className={style.container}>
            <Formik initialValues={{}} onSubmit={handleDelete}>
                <Form className="bg-gray-100 p-4 rounded-lg w-96">
                    {/* Form fields here */}
                    {/* ... */}
                    {seller === 'Jonh Wick' && (
                        <div className="mb-5">
                            <h1 className={"text-3xl font-bold"}> Delete this product?</h1>
                            <p className={"my-12"}> Are you sure want to delete ?</p>
                            <button type="submit" className={`${style.button}`}>

                                Delete
                            </button>
                        </div>
                    )}
                </Form>
            </Formik>
        </main>
    );
};

export default DeleteComponentLayout;
