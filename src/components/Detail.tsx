// import "./App.css";
import { useParams } from "react-router-dom";
import Header3 from "../components/Header3";
import Rwanda from "./../assets/image/RwandaBeans.png";
import { useAppDispatch, useAppSelector } from "../stores/store";
import { productDetailFetch } from "../stores/slices/product/productFetch";
import { useEffect } from "react";
import {
  addCart,
  ICart,
  saveCart,
} from "../stores/slices/cart/cartSlice";

const Detail = () => {
  const getToken = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const { dataDetail, errorDetail, isLoadingDetail } = useAppSelector(
    (state) => state.productDetailState
  );
  const { dataCart } = useAppSelector((state) => state.cartState);
  const params = useParams();

  const fetchDetailProduct = async () => {
    try {
      dispatch(productDetailFetch(Number(params.id)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailProduct();
  }, []);

  const handleAddCart = () => {
    {
      const data: ICart = {
        idProduct: dataDetail?.id,
        name: dataDetail?.name,
        price: dataDetail?.price,
        photo: dataDetail?.photo,
        quantity: 1,
        totalPrice: dataDetail?.price * 1,
      };
      dispatch(addCart(data));
      dispatch(saveCart());
    }
  };

  console.log(dataCart);

  if (isLoadingDetail) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  if (errorDetail) {
    return (
      <div>
        <h1>{errorDetail}</h1>
      </div>
    );
  }

  if (!dataDetail) {
    return (
      <div>
        <h1>No Product Detail Found</h1>
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <Header3 />
      <div>
        <div style={{ display: "flex", textAlign: "left" }}>
          <div style={{}}>
            {dataDetail?.photo ? (
              <img
                src={dataDetail.photo}
                alt="logo"
                style={{ width: 436, height: 500, marginRight: "20px" }}
              />
            ) : (
              <img
                src={Rwanda}
                alt="logo"
                style={{ width: 436, height: 500, marginRight: "20px" }}
              />
            )}
          </div>
          <div>
            <h1 style={{ color: "#613D2B" }}> {dataDetail?.name}</h1>
            <p style={{ color: "#974A4A" }}>Stock : {dataDetail?.stock}</p>
            <p style={{ width: "436px" }}>
              {dataDetail?.desc}
              {/* Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali
              ddataDetailukan di Ethiopia, meskipun ada juga beberapa protes yang
              menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di
              bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia
              pertama yang mengonsumsi kopi—walau saat itu mereka baru
              mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia
              sebagai tempat asal kopi” pun semakin kuat. */}
            </p>
            <p style={{ color: "#974A4A", textAlign: "end" }}>
              Rp. {dataDetail?.price}
            </p>
            {getToken && (
              <button
                type="submit"
                // onClick={() => console.log("add cart")}
                onClick={() => handleAddCart()}
                style={{
                  width: "436px",
                  backgroundColor: "#613D2B",
                  color: "white",
                }}>
                Add cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
