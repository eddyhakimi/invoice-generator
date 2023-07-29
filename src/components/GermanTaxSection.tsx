"use client";
import { useState } from "react";
import { GermanTaxDetails } from "@/types/GermanTaxDetails";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

export default function GermanTaxSection() {
  const germanTaxDetails: GermanTaxDetails = JSON.parse(
    localStorage.getItem("germanTaxDetails") ?? "{}"
  );

  const [taxnumber, setTaxnumber] = useState(germanTaxDetails.taxnumber);
  const [ustId, setUstId] = useState(germanTaxDetails.ustId);
  const [smallBusinessRegulation, setSmallBusinessRegulation] = useState(
    germanTaxDetails.smallBusinessRegulation ?? false
  );
  const [financeOffice, setFinanceOffice] = useState(
    germanTaxDetails.financeOffice
  );

  const onSave = () => {
    const germanTaxDetails: GermanTaxDetails = {
      taxnumber,
      ustId,
      smallBusinessRegulation,
      financeOffice,
    };

    localStorage.setItem("germanTaxDetails", JSON.stringify(germanTaxDetails));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: "40px" }}>
      <Grid container spacing={2} minWidth="320px" maxWidth="800px">
        <Grid item xs={12}>
          <Typography variant="h6" component="h3">
            German Tax Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="Taxnumber (Steuernummer)"
            value={taxnumber}
            onChange={(e) => setTaxnumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="UstId (Umsatzsteueridentifikationsnummer)"
            value={ustId}
            onChange={(e) => setUstId(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth={true}
            label="Finance Office (Finanzamt)"
            value={financeOffice}
            onChange={(e) => setFinanceOffice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={smallBusinessRegulation}
                onChange={() =>
                  setSmallBusinessRegulation(!smallBusinessRegulation)
                }
              />
            }
            label="Small Business Regulation (Kleinunternehmerregelung)"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mt: "20px" }}
        >
          <Button variant="contained" onClick={onSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
