import React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Header3 from "./Header3";
import { RootState, useAppDispatch, useAppSelector } from "../stores/store";
import {
  deleteCart,
  saveCart,
  updateCart,
} from "../stores/slices/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import Rwanda from "../assets/image/RwandaBeans.png";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { dataCart } = useAppSelector((state: RootState) => state.cartState);
  const totalPrice =
    dataCart?.length > 0
      ? dataCart?.reduce((total: number, item: any) => {
          return total + item.price * item.quantity;
        }, 0)
      : 0;

  console.log(totalPrice);

  const handleQuantityChange = (
    type: "increment" | "decrement" | "delete",
    item: any
  ) => {
    if (type === "increment") {
      dispatch(updateCart({ id: item.idProduct, qty: item.quantity + 1 }));
    } else if (type === "decrement" && item.quantity > 1) {
      dispatch(updateCart({ id: item.idProduct, qty: item.quantity - 1 }));
    } else if (type === "delete") {
      dispatch(deleteCart({ id: item.idProduct }));
    }

    dispatch(saveCart());
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Header3 />
      <Typography variant="h4" gutterBottom>
        My Cart
      </Typography>

      <Typography variant="h6">Review Your Order</Typography>

      {dataCart?.length > 0 &&
        dataCart?.map((item: any, index: number) => {
          const subTotal = item.price * item.quantity;
          return (
            <Card sx={{ display: "flex", marginTop: "1rem" }} key={index}>
              {item.photo ? (
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100 }}
                  image={item.photo} // Placeholder for the image of GUETEMALA Beans
                  alt="Gambar Beans"
                />
              ) : (
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: "100%" }}
                  image={Rwanda} // Placeholder for the image of GUETEMALA Beans
                  alt="GUETEMALA Beans"
                />
              )}
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: 1,
                }}>
                <Box>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Typography variant="body1">
                    Rp.{item.price.toLocaleString("id-ID")}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    onClick={() => handleQuantityChange("decrement", item)}>
                    -
                  </Button>
                  <Typography sx={{ margin: "0 1rem" }}>
                    {item.quantity}
                  </Typography>
                  <Button
                    onClick={() => handleQuantityChange("increment", item)}>
                    +
                  </Button>
                </Box>

                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => handleQuantityChange("delete", item)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
              <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                Subtotal: Rp.{subTotal.toLocaleString("id-ID")}
              </Typography>
            </Card>
          );
        })}

      <Grid container justifyContent="flex-end" sx={{ marginTop: "2rem" }}>
        <Grid item xs={6}>
          <Typography variant="body1">Qty: {dataCart?.length}</Typography>
          <Typography variant="h6">
            Total: Rp.{totalPrice?.toLocaleString("id-ID")}
          </Typography>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/Transaction")}
        sx={{ marginTop: "1rem", backgroundColor: "#6A4928" }}>
        Proceed To Checkout
      </Button>
    </Box>
  );
};

export default Cart;
