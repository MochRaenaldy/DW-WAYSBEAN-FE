// import React from "react";
// import Header3 from "./Header3";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// // Define the type for transaction data
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
//     status: "Waiting Approve",
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
//     status: "Cancel",
//   },
//   {
//     id: 4,
//     name: "Lae Tanjung Balai",
//     address: "Tanjung Balai",
//     postCode: "21331",
//     productsOrder: "NICARAGUA Beans",
//     status: "On The Way",
//   },
// ];

// const statusColor = (status: string) => {
//   switch (status) {
//     case "Success":
//       return "green";
//     case "Cancel":
//       return "red";
//     case "On The Way":
//       return "blue";
//     case "Waiting Approve":
//       return "orange";
//     default:
//       return "black";
//   }
// };

// const IncomeTransaction = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Header3 />
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>No</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>Address</TableCell>
//             <TableCell>Post Code</TableCell>
//             <TableCell>Products Order</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {transactions.map((transaction) => (
//             <TableRow key={transaction.id}>
//               <TableCell>{transaction.id}</TableCell>
//               <TableCell>{transaction.name}</TableCell>
//               <TableCell>{transaction.address}</TableCell>
//               <TableCell>{transaction.postCode}</TableCell>
//               <TableCell>{transaction.productsOrder}</TableCell>
//               <TableCell>
//                 <span style={{ color: statusColor(transaction.status) }}>
//                   {transaction.status}
//                 </span>
//               </TableCell>
//               <TableCell>
//                 {transaction.status === "Waiting Approve" && (
//                   <>
//                     <Button
//                       variant="contained"
//                       color="success"
//                       style={{ marginRight: 8 }}>
//                       Approve
//                     </Button>
//                     <Button variant="contained" color="error">
//                       Cancel
//                     </Button>
//                   </>
//                 )}
//                 {transaction.status === "Success" && <span>✔</span>}
//                 {transaction.status === "Cancel" && <span>❌</span>}
//                 {transaction.status === "On The Way" && <span>🚚</span>}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default IncomeTransaction;
