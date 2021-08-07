import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { createOrder, fetchProducts } from './services/api';
import { useRouter } from 'next/router'

import Container from "@material-ui/core/Container";
import Cartdetail from "./cartdetail";
import PersonalDetailForm from "./personaldetailform";
import { TextField, Typography, Button } from "@material-ui/core/";

const checkout = () => {
  const { cart } = useContext(CartContext);
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
    },
    /*validationSchema: Yup.object().shape({
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().email().required(),
    }),*/
    onSubmit: async (values) => {
      const { items = [] } = cart;
      const productsIds = items.map((item) => `id_in=${item.id}`);
      const query = productsIds.join('&');
     try{
      const products = await fetchProducts(query);
      let total=0;
      items.forEach(item =>{
        const product = products.find(p => p.id === item.id);
        total += item.qty*product.price;
      });
      const order = await createOrder({
        ...values,
        total:`${total}`
      });
      console.log(order);
          router.push(`/order/`)

     }catch(e){
      console.error(e);
     }
    },
  });
  const { getFieldProps } = formik;

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Cartdetail></Cartdetail>
        <PersonalDetailForm getFieldProps={getFieldProps}></PersonalDetailForm>

        <Button
          variant="contained"
          color="primary"
          onClick={formik.handleSubmit}
        >
          Continue to payment
        </Button>
      </Container>
    </>
  );
};

export default checkout;
