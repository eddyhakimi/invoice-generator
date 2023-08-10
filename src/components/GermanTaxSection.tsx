"use client";
import { useEffect, useState } from "react";
import { GermanTaxDetails } from "@/types/GermanTaxDetails";
import {
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Save as SaveIcon } from "@mui/icons-material";

export default function GermanTaxSection() {
  const [taxnumber, setTaxnumber] = useState("");
  const [ustId, setUstId] = useState("");
  const [smallBusinessRegulation, setSmallBusinessRegulation] = useState(false);
  const [financeOffice, setFinanceOffice] = useState("");

  useEffect(() => {
    const germanTaxDetails: GermanTaxDetails = JSON.parse(
      localStorage.getItem("germanTaxDetails") ?? "{}"
    );

    setTaxnumber(germanTaxDetails.taxnumber ?? "");
    setUstId(germanTaxDetails.ustId ?? "");
    setSmallBusinessRegulation(
      germanTaxDetails.smallBusinessRegulation ?? false
    );
    setFinanceOffice(germanTaxDetails.financeOffice ?? "");
  }, []);

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
    <Paper sx={{ display: "flex", justifyContent: "center", p: "20px" }}>
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
            <SaveIcon sx={{ mr: "8px" }} />
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
