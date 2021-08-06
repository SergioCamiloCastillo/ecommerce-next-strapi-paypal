import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Link from "next/link";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography variant="h6">Ecommerce - Paypal</Typography>
          </Link>

          <Link href="/cart">
            <Badge variant="seconday" badgeContent={cart.itemsCount}>
              <ShoppingCartIcon className="draw-shopcart"></ShoppingCartIcon>
            </Badge>
          </Link>
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
