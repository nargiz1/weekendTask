import React from "react";
import Navbar from "../../components/navbar";
import * as SuppliersService from "../../services/SuppliersService";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Index() {
  const schema = yup
    .object()
    .shape({
      companyName: yup.string().required("Company Name is required"),
      contactName: yup.string().required("Contact Name is required"),
      contactTitle: yup.string().required("Contact Title is required"),
    })
    .required();
  const { register, handleSubmit } = useForm( {resolver: yupResolver(schema)});

  const addSupplier = async (data) => {
    console.log(data);
    const result = await SuppliersService.addSupplier(data);
    console.log(result);
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
        <form onSubmit={handleSubmit(addSupplier)}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Company Name"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  name="companyName"
                  {...register("companyName")}
                />
                <TextField
                  id="standard-basic"
                  label="Contact Name"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  name="contactName"
                  {...register("contactName")}
                />
                <TextField
                  id="standard-basic"
                  label="Contact Title"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  name="contactTitle"
                  {...register("contactTitle")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-basic"
                  label="Country"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  {...register("address.country")}
                />
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  {...register("address.city")}
                />
                <TextField
                  id="standard-basic"
                  label="Region"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  {...register("address.region")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-basic"
                  label="Street"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  {...register("address.street")}
                />
                <TextField
                  id="standard-basic"
                  label="Phone"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  {...register("address.phone")}
                />
                <TextField
                  id="standard-basic"
                  label="Postal Code"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  {...register("address.postalCode")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Add
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </div>
  );
}

export default Index;
