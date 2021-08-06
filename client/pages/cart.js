
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { appConfig } from "./services/config";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useRouter } from 'next/router'
import Cartdetail from "./cartdetail";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function cart() {
  const router = useRouter()

  const { cart } = useContext(CartContext);
  const { items = [] } = cart;
  console.log(items);
  return (
    <>
      <Navbar></Navbar>

      <Container>
        <Cartdetail></Cartdetail>
        <Button variant="contained" color="primary" onClick={() => router.push("/checkout")}>
          Checkout
        </Button>
      </Container>
    </>
  );
}
