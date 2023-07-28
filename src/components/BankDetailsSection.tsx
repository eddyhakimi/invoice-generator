"use client";
import { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { BankDetails } from "@/types/BankDetails";

export default function ContactSection() {
  const bankDetails: BankDetails = JSON.parse(
    localStorage.getItem("bankDetails") ?? "{}"
  );

  const [name, setName] = useState(bankDetails.name);
  const [iban, setIban] = useState(bankDetails.iban);
  const [bic, setBic] = useState(bankDetails.bic);
  const [accountHolder, setAccountHolder] = useState(bankDetails.accountHolder);

  const handleCompanyContactSave = () => {
    const bankDetails: BankDetails = {
      name,
      iban,
      bic,
      accountHolder,
    };
    localStorage.setItem("bankDetails", JSON.stringify(bankDetails));
  };

  return (
    <main>
      <Box sx={{ display: "flex", justifyContent: "center", pt: "40px" }}>
        <Grid container spacing={2} minWidth="320px" maxWidth="800px">
          <Grid item xs={12}>
            <Typography variant="h6" component="h3">
              Bank details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              fullWidth={true}
              label="Bank"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              variant="standard"
              fullWidth={true}
              label="IBAN"
              value={iban}
              onChange={(e) => setIban(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              variant="standard"
              fullWidth={true}
              label="BIC"
              value={bic}
              onChange={(e) => setBic(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              fullWidth={true}
              label="Account holder"
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", mt: "20px" }}
          >
            <Button variant="contained" onClick={handleCompanyContactSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
