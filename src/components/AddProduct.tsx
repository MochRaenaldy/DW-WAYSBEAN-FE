import Header3 from "./Header3";
import Rwanda from "../assets/image/GuetemalaBeans.png";
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../stores/store";
import { productAddFetch } from "../stores/slices/product/productFetch";
import { useState } from "react";

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const { errorAdd, isLoadingAdd } = useAppSelector(
    (state) => state.productAddState
  );

  interface IValue {
    name: string;
    price: number;
    stock: number;
    desc: string;
    photo: File | null;
  }

  const [value, setValue] = useState<IValue>({
    name: "",
    price: 0,
    stock: 0,
    desc: "",
    photo: null,
  });

  const fetchProduct = () => {
    const data = {
      name: value.name,
      price: value.price,
      stock: value.stock,
      desc: value.desc,
      photo: value.photo,
    };
    dispatch(productAddFetch(data));
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  if (isLoadingAdd) {
    return <div>Loading...</div>;
  }

  if (errorAdd) {
    return <div>{errorAdd}</div>;
  }

  return (
    <div>
      <Header3 />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "100px",
          textAlign: "left",
        }}>
        <div>
          <h2 style={{ marginTop: "50px", color: "#613D2B" }}>Add Product</h2>
          <Box sx={{ marginTop: "20px" }}>
            <TextField
              fullWidth
              placeholder="Name"
              size="small"
              value={value.name}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              sx={{ bgcolor: "#613D2B40", border: "2px solid #613D2B" }}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <TextField
              fullWidth
              placeholder="Stock"
              size="small"
              value={value.stock}
              onChange={(e) => {
                const parsedValue = parseInt(e.target.value);
                setValue({
                  ...value,
                  stock: isNaN(parsedValue) ? 0 : parsedValue,
                });
              }}
              sx={{ bgcolor: "#613D2B40", border: "2px solid #613D2B" }}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <TextField
              type="text"
              fullWidth
              placeholder="Price"
              size="small"
              value={value.price}
              onChange={(e) => {
                const parsedValue = parseInt(e.target.value);
                setValue({
                  ...value,
                  price: isNaN(parsedValue) ? 0 : parsedValue,
                });
              }}
              sx={{ bgcolor: "#613D2B40", border: "2px solid #613D2B" }}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Input
              type="text"
              placeholder="Description Product"
              fullWidth
              value={value.desc}
              onChange={(e) => setValue({ ...value, desc: e.target.value })}
              sx={{
                bgcolor: "#613D2B40",
                height: "100px",
                textAlign: "start",
                alignItems: "start",
                border: "2px solid #613D2B",
              }}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <input
              style={{
                backgroundColor: "#613D2B40",
                border: "2px solid #613D2B",
              }}
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setValue({ ...value, photo: e.target.files[0] });
                }
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={fetchProduct}
              size="small"
              sx={{
                marginTop: "30px",
                bgcolor: "#613D2B",
                width: "260px",
                justifyContent: "center",
              }}>
              <Typography
                fontSize={14}
                sx={{
                  color: "white",
                }}>
                Add Product
              </Typography>
            </Button>
          </Box>
        </div>
        <div>
          <img
            src={Rwanda}
            alt="logo"
            width={436}
            height={555}
            style={{ marginTop: "20px", marginLeft: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
