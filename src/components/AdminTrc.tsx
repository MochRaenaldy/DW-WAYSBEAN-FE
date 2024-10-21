  import React, { useEffect } from "react";
  import "./../utils/AdminTrc.css";
  import Header3 from "./Header3";
  import { Close } from "@mui/icons-material";
  import CheckCircleIcon from "@mui/icons-material/CheckCircle";
  import { RootState, useAppDispatch, useAppSelector } from "../stores/store";
  import { transactionAllFetch, transactionUpdate } from "../stores/slices/transaction/transactionFetch";
  import { saveCart } from "../stores/slices/cart/cartSlice";

  // interface Transaction {
  //   id: number;
  //   name: string;
  //   address: string;
  //   postCode: string;
  //   productsOrder: string;
  //   status: string;
  // }

  // const transactions: Transaction[] = [
  //   {
  //     id: 1,
  //     name: "Sugeng No Pants",
  //     address: "Cileungsi",
  //     postCode: "16820",
  //     productsOrder: "RWANDA Beans",
  //     status: "Success",
  //   },
  //   {
  //     id: 2,
  //     name: "Haris Gams",
  //     address: "Serang",
  //     postCode: "42111",
  //     productsOrder: "ETHIOPIA Beans",
  //     status: "Success",
  //   },
  //   {
  //     id: 3,
  //     name: "Aziz Union",
  //     address: "Bekasi",
  //     postCode: "13450",
  //     productsOrder: "GUETEMALA Beans",
  //     status: "Pending",
  //   },
  //   {
  //     id: 4,
  //     name: "Lae Tanjung Balai",
  //     address: "Tanjung Balai",
  //     postCode: "21331",
  //     productsOrder: "NICARAGUA Beans",
  //     status: "Cancel",
  //   },
  // ];

  const IncomeTransactionTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading, transactions } = useAppSelector(
      (state: RootState) => state.transactionState
    );

    const { dataCart } = useAppSelector((state) => state.cartState);
    console.log(dataCart);

    const fetchTransaction = () => {
      dispatch(transactionAllFetch());
    };

    useEffect(() => {
      fetchTransaction();
    }, []);

    // const handleStatusChange = async (
    //   transactionId: number,
    //   newStatus: string
    // ) => {
    //   try {
    //     // Mengirim permintaan ke backend untuk memperbarui status transaksi
    //     await axios.patch(`/api/transaction/${transactionId}/status`, {
    //       status: newStatus,
    //     });

    //     // Memperbarui data transaksi setelah status diubah
    //     fetchTransaction();
    //   } catch (error) {
    //     console.error("Error updating transaction status:", error);
    //   }
    // };

  const handleStatusChange = (id: number, status: string) => {
    dispatch(transactionUpdate({ id, status }));
  };

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
      <div className="table-container">
        <Header3 />
        <div>
          <h2 style={{ textAlign: "left", color: "#613D2B" }}>
            Income Transaction
          </h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Products Order</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction: any) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.name}</td>
                <td>{transaction.addres}</td>
                <td>{transaction.pos}</td>
                <td>{dataCart.map((item: any) => item.name)}</td>
                <td>
                  <span
                    className={`status ${transaction.status
                      .replace(" ", "-")
                      .toLowerCase()}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {transaction.status === "Pending" && (
                      <>
                        <button
                          onClick={() =>
                            handleStatusChange(transaction.id, "Success")
                          }>
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(transaction.id, "Cancel")
                          }>
                          Cancel
                        </button>
                      </>
                    )}
                    {transaction.status === "Success" && (
                      <CheckCircleIcon sx={{ color: "green" }} />
                    )}
                    {transaction.status === "Cancel" && (
                      <Close sx={{ color: "red" }} />
                    )}
                    <div style={{ color: "red" }}>
                      {transaction.status === "On The Way" && (
                        <CheckCircleIcon sx={{ color: "green" }} />
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default IncomeTransactionTable;
