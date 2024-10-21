import { createSlice } from "@reduxjs/toolkit";

export interface ICart {
  idProduct: number;
  name: string;
  price: number;
  photo: string;
  quantity: number;
  totalPrice: number;
}

const getCart = localStorage.getItem("dataCart");
const dataCart = getCart && JSON.parse(getCart);

const initialState = {
  dataCart: dataCart || ([] as ICart[]),
};

const cartSlice = createSlice({
  name: "updateCart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newProduct = action.payload;
      // Cek apakah produk sudah ada berdasarkan id
     const existingProductIndex = state.dataCart.findIndex(
       (item: any) => item.idProduct === newProduct.idProduct
     );

     if (existingProductIndex !== -1) {
       // Jika produk sudah ada, buat array baru dengan kuantitas diperbarui
       state.dataCart = state.dataCart.map((item: any, index: number) =>
         index === existingProductIndex
           ? { ...item, quantity: item.quantity + newProduct.quantity }
           : item
       );
     } else {
       // Jika belum ada, tambahkan ke array
       state.dataCart.push({ ...newProduct, quantity: newProduct.quantity });
     }

      //   console.log(newProduct);
    },
    updateCart: (state, action) => {
      const { id, qty } = action.payload;
      // Cari produk berdasarkan id
      const product = state.dataCart?.find(
        (item: any) => item.idProduct === id
      );
      if (product) {
        // Jika produk ditemukan, update quantity-nya
        product.quantity = qty;
      }
    },
    deleteCart: (state, action) => {
      const { id } = action.payload;
      state.dataCart = state?.dataCart?.filter(
        (item: any) => item.idProduct !== id
      );
    },
    saveCart: (state) => {
      console.log(state.dataCart);
      localStorage.setItem("dataCart", JSON.stringify(state.dataCart));
    },
  },
});

export const { addCart, updateCart, deleteCart, saveCart } = cartSlice.actions;

export default cartSlice.reducer;
