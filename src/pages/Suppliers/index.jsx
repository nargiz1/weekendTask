import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import * as SuppliersService from "../../services/SuppliersService";
import { useNavigate } from 'react-router-dom';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

function Index() {
  const [suppliers, setSuppliers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    (async function () {
      const spls = await SuppliersService.getSuppliers();
      setSuppliers(spls);
    })();
  }, []);

  const handleSupplier = (id)=> {
    navigate(`/supplier/${id}`)
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{marginTop: '30px'}}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{backgroundColor: 'black'}}>
                <TableCell sx={{color: 'white', fontWeight:'bold'}}>Company Name</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold'}}>Conatct Name</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold'}}>Contact Title</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold'}}>Country</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold'}}>City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suppliers?.map((supplier) => (
                <TableRow
                  key={supplier.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => handleSupplier(supplier.id)}
                >
                  <TableCell component="th" scope="row">
                    {supplier.companyName}
                  </TableCell>
                  <TableCell>{supplier.contactName}</TableCell>
                  <TableCell>{supplier.contactTitle}</TableCell>
                  <TableCell>{supplier.address?.country}</TableCell>
                  <TableCell>{supplier.address?.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Index;
