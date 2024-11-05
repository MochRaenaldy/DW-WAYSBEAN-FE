// import React from 'react'
import { Box, Button, Input, TextField } from "@mui/material";
import Header3 from "./Header3";
import Rwanda from "../assets/image/RwandaBeans.png";
import Beans from "../assets/image/Frame.png";
import { RootState, useAppDispatch, useAppSelector } from "../stores/store";
import { useState } from "react";
import { transactionAddFetch } from "../stores/slices/transaction/transactionFetch";

const Shipping = () => {
  const dispatch = useAppDispatch();
  const { errorAdd, isLoadingAdd } = useAppSelector(
    (state: RootState) => state.transactionAddState
  );
  const { dataCart } = useAppSelector((state: RootState) => state.cartState);
  const {} = useAppSelector((state: RootState) => state.transactionUpdateState);

  interface IValue {
    name: string;
    email: string;
    phone: string;
    pos: string;
    addres: string;
    attachment: File | null;
  }

  const [value, setValue] = useState<IValue>({
    name: "",
    email: "",
    phone: "",
    pos: "",
    addres: "",
    attachment: null,
  });

  if (errorAdd) {
    return <div>Error: {errorAdd}</div>;
  } else if (isLoadingAdd) {
    return <div>Loading...</div>;
  }

  const handleCheckout = async () => {
    const data = {
      name: value.name,
      email: value.email,
      phone: value.phone,
      pos: value.pos,
      addres: value.addres,
      attachment: value.attachment,
    };
    console.log(data);
    dispatch(transactionAddFetch(data));
    window.location.replace("/Profile");
  };

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
          <h2>Shipping</h2>
          <Box
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              bgcolor: "#613D2B40",
              borderRadius: "5px",
              width: "300px",
              border: "2px solid #613D2B",
            }}>
            <TextField
              size="small"
              fullWidth
              label="Name"
              value={value.name}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              bgcolor: "#613D2B40",
              borderRadius: "5px",
              width: "300px",
              border: "2px solid #613D2B",
            }}>
            <TextField
              size="small"
              fullWidth
              label="Email"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              bgcolor: "#613D2B40",
              borderRadius: "5px",
              width: "300px",
              border: "2px solid #613D2B",
            }}>
            <TextField
              size="small"
              fullWidth
              label="Phone"
              value={value.phone}
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
            />
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              bgcolor: "#613D2B40",
              borderRadius: "5px",
              width: "300px",
              border: "2px solid #613D2B",
            }}>
            <TextField
              size="small"
              fullWidth
              label="PosCode"
              value={value.pos}
              onChange={(e) => setValue({ ...value, pos: e.target.value })}
            />
          </Box>
          <Box>
            <Input
              size="small"
              fullWidth
              placeholder="Address"
              value={value.addres}
              onChange={(e) => setValue({ ...value, addres: e.target.value })}
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
                  setValue({ ...value, attachment: e.target.files[0] });
                }
              }}
            />
          </Box>
        </div>
        <div>
          {dataCart?.length > 0 &&
            dataCart?.map((item: any) => {
              return (
                <Box
                  sx={{
                    width: "524px",
                    height: "160px",
                    display: "flex",
                    bgcolor: "#DBB699",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}>
                  <Box sx={{ display: "flex", ml: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                      <img src={Rwanda} alt="logo" width={80} height={120} />
                    </Box>
                    <Box sx={{ maxHeight: "120px", height: "120px", mt: -1 }}>
                      <h2>{item.name}</h2>
                      <p style={{ fontSize: "10px", marginTop: "-25px" }}>
                        Saturday, 5 March 2024
                      </p>
                      <p style={{ fontSize: "10px", marginTop: "20px" }}>
                        {" "}
                        Price :{item.price}
                      </p>
                      <p style={{ fontSize: "10px" }}>
                        Quantity : {item.quantity}
                      </p>
                      <p style={{ color: "#974A4A", fontSize: "10px" }}>
                        Total :{+item.price * +item.quantity}
                      </p>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "start", mr: 2, mt: 2 }}>
                    <img src={Beans} alt="logo" width={73} height={22} />
                  </Box>
                </Box>
              );
            })}

          <div>
            <Button
              variant="contained"
              onClick={handleCheckout}
              // onClick={() => navigate("/profile")}
              sx={{
                width: "524px",
                bgcolor: "#613D2B",
                color: "white",
                mt: 2,
              }}>
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
