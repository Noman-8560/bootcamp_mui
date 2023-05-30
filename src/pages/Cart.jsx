import React, { useState } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Cart({ items, onAdd, onRemove }) {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderId, setOrderId] = useState(false);
  const navigates = useNavigate();

  const calculateTotalCost = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const createOrder = (data, action) => {
    return action.order
      .create({
        purchase_units: [
          {
            description: "book",
            amount: {
              currency_code: "USD",
              value: calculateTotalCost(),
            },
          },
        ],
        application_context: {
          shipping_prefernce: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderId(orderID);
        return orderID;
      });
  };

  const onApprove = (data, action) => {
    return action.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      navigates("/")

    });
  };

  const onError = (data, actions) => {
    setErrorMessage("An Error Accured");
    navigates("/cart")
  };

  return (
    <Container>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AbsSaZIu0nZUdMjRZdWAWS_1NHWAsT3Yp3D73UY8go_lDcTwVi4MMmocXKrYB8uZrUISDp2k_7zq_-lJ",
        }}
      >
        <TableContainer component={Paper} style={{ marginTop: "3rem" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Produt Image</TableCell>
                <TableCell>Produt Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>SubTotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) =>
                item.quantity > 0 ? (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      <img
                        src={`http://localhost:8080/${item.image}`}
                        style={{ height: "50px" }}
                        alt=""
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <button onClick={() => onRemove(item)}>-</button>{" "}
                      {item.quantity}{" "}
                      <button onClick={() => onAdd(item)}>+</button>
                    </TableCell>
                    <TableCell>{item.price * item.quantity}</TableCell>
                  </TableRow>
                ) : null
              )}
            </TableBody>
          </Table>
          <Box
            sx={{
              marginTop: "1rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black", marginLeft: "2px" }}
              onClick={() => setShow(true)}
              type="submit"
            >
              Checkout ${calculateTotalCost()}{" "}
            </Button>
          </Box>
        </TableContainer>
        <br />
        {show ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        ) : null}
      </PayPalScriptProvider>
    </Container>
  );
}
