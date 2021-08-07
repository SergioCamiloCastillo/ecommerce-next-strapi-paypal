import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { createOrder, fetchProducts } from './services/api';
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Paypalbutton from "./paybutton";
import Container from "@material-ui/core/Container";
import Cartdetail from "./cartdetail";
import PersonalDetailForm from "./personaldetailform";
import { TextField, Typography, Button } from "@material-ui/core/";

const order = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

   useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=AQrXcgL51aOXar7Ti7R0Qp3oDb-2KQpTuFBL6xSEl0AkjlkHUu-5JRZmx6qYJNuUFq7p0x0JXkOQf7bm&currency=COP`;
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
  }, []);
  const { cart } = useContext(CartContext);


  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Cartdetail></Cartdetail>

        <Button
          variant="contained"
          color="primary"
       
        >
          <Paypalbutton />
        </Button>
      </Container>
    </>
  );
};

export default order;
