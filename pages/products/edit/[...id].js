import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import axios from "axios";
import { useEffect } from "react";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";

export default function EditProductPage(){
    const [productInfo,setProductInfo]=useState();
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{

        if(!id){
            return; 
        }

        axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data)
        });
    },[id]);
    return(
        <Layout>
            <h1>Edit Product</h1>
            {productInfo&&(
            <ProductForm {...productInfo}/>
            )}
        </Layout>
    )
}