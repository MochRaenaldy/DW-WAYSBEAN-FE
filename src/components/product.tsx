// import "./App.css";
import { Link } from "react-router-dom";
import Rwanda from "../assets/image/RwandaBeans.png";
import Ethiopia from "../assets/image/EthiopiaBeans.png";
import Guetemala from "../assets/image/GuetemalaBeans.png";
import Nicarua from "../assets/image/NicaruaBeans.png";
import { RootState, useAppDispatch, useAppSelector } from "../stores/store";
import { useEffect } from "react";
import { productAllFetch } from "../stores/slices/product/productFetch";

const Product = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state: RootState) => state.productAllState
  );

  const fetchProduct = () => {
    dispatch(productAllFetch());
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            width: "241px",
            height: "310px",
          }}>
          {isLoading && <div>Loading...</div>}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "990px",
          height: "310px",
        }}>
        {products.length > 0 &&
          products.map((item: any, index) => (
            <div key={index} style={{ marginRight: "23px", display: "flex" }}>
              <Link to={`/detail/${item.id}`}>
                {item.photo ? (
                  (console.log(item.photo),
                  (
                    <img src={item.photo} alt="logo" width={241} height={310} />
                  ))
                ) : (
                  <img src={Rwanda} alt="logo" width={241} height={310} />
                )}
                <div
                  style={{
                    width: "241px",
                    alignItems: "flex-start",
                    backgroundColor: "#F6E6DA",
                    marginTop: "-22px",
                    marginBottom: "100px",
                  }}>
                  <p style={{ fontWeight: "bold", color: "black" }}>
                    {item.name}
                  </p>
                  <p style={{ color: "black", fontWeight: "normal" }}>
                    Rp {item.price}
                  </p>
                  <p style={{ color: "black", fontWeight: "normal" }}>
                    Stock : {item.stock}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
