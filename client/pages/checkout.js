import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";

import Container from "@material-ui/core/Container";
import Cartdetail from "./cartdetail";
import PersonalDetailForm from "./personaldetailform";
import { TextField, Typography, Button } from "@material-ui/core/";

const checkout = () => {
  const { cart } = useContext(CartContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: (values) => {
      const { items = [] } = cart;
      const productsIds = items.map((item) => item.id);
      console.log(productsIds);
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
