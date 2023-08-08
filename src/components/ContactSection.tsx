"use client";
import { useState } from "react";
import { Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { CompanyContact } from "@/types/CompanyContact";
import { Save as SaveIcon } from "@mui/icons-material";

export default function ContactSection() {
  const companyContact: CompanyContact = JSON.parse(
    localStorage.getItem("companyContact") ?? "{}"
  );
  const [companyName, setCompanyName] = useState(companyContact.companyName);
  const [streetName, setStreetName] = useState(companyContact.streetName);
  const [streetNumber, setStreetNumber] = useState(companyContact.streetNumber);
  const [zip, setZip] = useState(companyContact.zip);
  const [city, setCity] = useState(companyContact.city);
  const [phone, setPhone] = useState(companyContact.phone);
  const [email, setEmail] = useState(companyContact.email);

  const onSave = () => {
    const companyContact: CompanyContact = {
      companyName,
      streetName,
      streetNumber,
      zip,
      city,
      phone,
      email,
    };
    localStorage.setItem("companyContact", JSON.stringify(companyContact));
  };

  return (
    <Paper sx={{ display: "flex", justifyContent: "center", p: "20px" }}>
      <Grid container spacing={2} minWidth="320px" maxWidth="800px">
        <Grid item xs={12}>
          <Typography variant="h6" component="h3">
            Company contact
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="Street name"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="Street number"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="Zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mt: "20px" }}
        >
          <Button variant="contained" onClick={onSave}>
            <SaveIcon sx={{ mr: "8px" }} />
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
