import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { useParams, Routes, Route, useNavigate } from "react-router-dom";
import * as SuppliersService from "../../services/SuppliersService";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Index() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [supplier, setSupplier] = useState();

  useEffect(() => {
    (async function () {
      const spl = await SuppliersService.getSupplierById(id);
      setSupplier(spl[0]);
    })();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const deleteSupplier = async (id) => {
    const dlt = await SuppliersService.deleteSupplierById(id);
    navigate('/suppliers')
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>{/*  */}</TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  ID
                </TableCell>
                <TableCell align="center">{supplier?.id}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  Copmany Name
                </TableCell>
                <TableCell align="center">{supplier?.companyName}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  Contact Name
                </TableCell>
                <TableCell align="center">{supplier?.contactName}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  Contact Title
                </TableCell>
                <TableCell align="center">{supplier?.contactTitle}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  Country
                </TableCell>
                <TableCell align="center">
                  {supplier?.address?.country}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  City
                </TableCell>
                <TableCell align="center">{supplier?.address?.city}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  Region
                </TableCell>
                <TableCell align="center">
                  {supplier?.address?.region}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  City
                </TableCell>
                <TableCell align="center">{supplier?.address?.city}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  Phone
                </TableCell>
                <TableCell align="center">{supplier?.address?.phone}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }}
                >
                  Postal Code
                </TableCell>
                <TableCell align="center">
                  {supplier?.address?.postalCode}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Button variant="text" onClick={()=> goBack()}>Back</Button>
      <Button color="error" onClick ={() => deleteSupplier(supplier?.id)}>Delete</Button>
    </>
  );
}

export default Index;
