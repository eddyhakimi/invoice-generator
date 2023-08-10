"use client";
import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { CompanyContact } from "@/types/CompanyContact";
import { Save as SaveIcon } from "@mui/icons-material";

export default function ContactSection() {
  const [companyName, setCompanyName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const companyContact: CompanyContact = JSON.parse(
      localStorage.getItem("companyContact") ?? "{}"
    );

    setCompanyName(companyContact.companyName ?? "");
    setStreetName(companyContact.streetName ?? "");
    setStreetNumber(companyContact.streetNumber ?? "");
    setZip(companyContact.zip ?? "");
    setCity(companyContact.city ?? "");
    setPhone(companyContact.phone ?? "");
    setEmail(companyContact.email ?? "");
  }, []);

  const onSave = (e: React.FormEvent) => {
    e.preventDefault();

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
      <form noValidate autoComplete="off" onSubmit={onSave}>
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
            <Button type="submit" variant="contained">
              <SaveIcon sx={{ mr: "8px" }} />
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
