import { createSlice } from "@reduxjs/toolkit";

export interface IBuy {
  idProduct: number;
  name: string;
  price: number;
  photo: string;
  quantity: number;
  totalPrice: number;
}

const getBuy = localStorage.getItem("dataBuy");
const dataBuy = getBuy && JSON.parse(getBuy);

const initialState = {
  dataBuy: dataBuy || ([] as IBuy[]),
};

const buySlice = createSlice({
  name: "updateBuy",
  initialState,
  reducers: {
    addBuy: (state, action) => {
      const newProduct = action.payload;
      // Cek apakah produk sudah ada berdasarkan id
      const existingProductIndex = state.dataBuy.findIndex(
        (item: any) => item.idProduct === newProduct.idProduct
      );

      if (existingProductIndex !== -1) {
        // Jika produk sudah ada, buat array baru dengan kuantitas diperbarui
        state.dataBuy = state.dataBuy.map((item: any, index: number) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + newProduct.quantity }
            : item
        );
      } else {
        // Jika belum ada, tambahkan ke array
        state.dataBuy.push({ ...newProduct, quantity: newProduct.quantity });
      }

      //   console.log(newProduct);
    },
    updateBuy: (state, action) => {
      const { id, qty } = action.payload;
      // Cari produk berdasarkan id
      const product = state.dataBuy?.find(
        (item: any) => item.idProduct === id
      );
      if (product) {
        // Jika produk ditemukan, update quantity-nya
        product.quantity = qty;
      }
    },
    deleteBuy: (state, action) => {
      const { id } = action.payload;
      state.dataBuy = state?.dataBuy?.filter(
        (item: any) => item.idProduct !== id
      );
    },
    saveBuy: (state) => {
      console.log(state.dataBuy);
      localStorage.setItem("dataBuy", JSON.stringify(state.dataBuy));
    },
  },
});

export const { addBuy, updateBuy, deleteBuy, saveBuy } = buySlice.actions;

export default buySlice.reducer;
