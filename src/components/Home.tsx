// import "./App.css";
import image from "./../assets/image/Icon.png";
import image2 from "./../assets/image/Rectangle3.png";
import image3 from "./../assets/image/waves1.png";
import Header3 from "./Header3";
import Product from "./product";

const Home = () => {
  return (
    <div>
      <Header3 />
      <div
        style={{
          marginTop: "50px",
          margin : "auto",
          width: "958px",
          height: "380px",
          border: "1px solid black",
          backgroundColor: "#DBB699",
        }}>
        <div style={{ display: "flex" }}>
          <div>
            <img
              src={image}
              alt="logo"
              width={473}
              height={145}
              style={{ marginTop: "20px", marginLeft: "40px" }}
            />
            <p style={{ marginTop: "20px", color: " black" }}>
              BEST QUALITY COFFEE BEAN
            </p>
            <p style={{ marginTop: "20px", color: " black" }}>
              Quality freshly roasted cofee made just for you.
            </p>
            <p style={{ marginTop: "20px", color: " black" }}>
              Pour brew and enjoy
            </p>
          </div>
          <div>
            <img
              src={image2}
              alt="logo"
              width={432}
              height={272}
              style={{
                marginLeft: "40px",
                marginTop: "20px",
                position: "relative",
              }}
            />
            <img
              src={image3}
              alt="logo"
              width={352}
              height={159}
              style={{ marginTop: "-70px", marginRight: "150px" }}
            />
          </div>
        </div>
      </div>
      <div style={{display: "flex", flexWrap: "wrap", marginTop: "20px"}}>
        <Product />
      </div>
    </div>
  );
};

export default Home;
