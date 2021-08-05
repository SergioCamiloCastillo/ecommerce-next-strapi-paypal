import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import { CartContext } from "../context/CartContext";
import React, { useContext } from 'react';
import { appConfig } from "./services/config";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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
  const classes = useStyles();
    const {cart} = useContext(CartContext);
    const {items =[]} = cart;
    console.log(items);
  return (
    <>
          <Navbar></Navbar>

      <Container>
      
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell >Item</TableCell>
                <TableCell >Price</TableCell>
                <TableCell >Qty</TableCell>
                <TableCell >Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.name}>
                    <TableCell><Avatar alt={item.name} src={`${appConfig.apiURL}${item.photo.url}`}></Avatar></TableCell>
                  <TableCell >
                    {item.name}
                  </TableCell>
                  <TableCell >{item.price}</TableCell>
                  <TableCell >{item.qty}</TableCell>
                  <TableCell >{item.price * item.qty}</TableCell>
                  <TableCell ></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
      </Container>
    </>
  );
}
