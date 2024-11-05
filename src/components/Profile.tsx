import Header3 from "./Header3";
import Profil from "../assets/image/profil.png";
import { Box, Typography } from "@mui/material";
import Rwanda from "../assets/image/RwandaBeans.png";
import Beans from "../assets/image/Frame.png";
import qr from "../assets/image/qr.png";
import { useAppSelector } from "../stores/store";

const Profile = () => {
const { dataCart} = useAppSelector((state) => state.cartState);
const { error,isLoading,} = useAppSelector((state) => state.userstate);

const user = localStorage.getItem("user")
const userParse = JSON.parse(user || "{}")

if (isLoading) {
  return <h1>Loading...</h1>;
}

if (error) {
  return <h1>{error}</h1>;
}

  return (
    <div>
      <Header3 />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginRight: "100px" }}>
          <h2 style={{ textAlign: "left", color: "#613D2B" }}>Profile</h2>
          {/* {users.length > 0 &&
            users.map((user) => ( */}
          <div key={userParse.id} style={{ display: "flex" }}>
            <div style={{ marginRight: "20px" }}>
              {userParse.photo ? (
                <img
                  src={userParse.photo}
                  style={{ width: "150px", height: "200px" }}
                />
              ) : (
                <img src={Profil} style={{ width: "150px", height: "200px" }} />
              )}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ marginBottom: "40px" }}>
                <p style={{ color: "#613D2B", fontWeight: "bold" }}>Fullname</p>
                <p>{userParse.fullname}</p>
              </div>
              <div>
                <p style={{ color: "#613D2B", fontWeight: "bold" }}>Email</p>
                <p>{userParse.email}</p>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
        <div style={{ marginLeft: "10px" }}>
          <h2 style={{ textAlign: "left", color: "#613D2B" }}>Transaksi</h2>
          <div style={{ gap: "10px" }}>
            {dataCart.map((product: any) => (
              <Box
                sx={{
                  width: "500px",
                  height: "160px",
                  display: "flex",
                  bgcolor: "#DBB699",
                  marginTop: "10px",
                  justifyContent: "space-between",
                }}>
                <Box sx={{ display: "flex", ml: 2, textAlign: "left" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                    <img src={Rwanda} alt="logo" width={80} height={120} />
                  </Box>
                  <Box sx={{ maxHeight: "120px", height: "120px", mt: -1 }}>
                    <h2>{product.name}</h2>
                    <p style={{ fontSize: "10px", marginTop: "-25px" }}>
                      Saturday, 5 May 2022
                    </p>
                    <p style={{ fontSize: "10px", marginTop: "20px" }}>
                      {" "}
                      Rp {product.price}
                    </p>
                    <p style={{ fontSize: "10px" }}>Qty : {product.quantity}</p>
                    <p style={{ color: "#974A4A", fontSize: "10px" }}>
                      Total : {+product.price * +product.quantity}
                    </p>
                  </Box>
                </Box>
                <Box sx={{ alignItems: "start", mr: 3, mt: 2 }}>
                  <Box>
                    <img src={Beans} alt="logo" width={73} height={22} />
                  </Box>
                  <Box>
                    <img src={qr} alt="logo" width={73} height={60} />
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Typography sx={{ fontSize: "12px", color: "yellow" }}>
                      Pending
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

