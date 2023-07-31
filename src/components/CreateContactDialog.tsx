import { CompanyContact } from "@/types/CompanyContact";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";

type CreateContactDialog = {
  open: boolean;
  onCancel: () => void;
  onCreate: (contact: CompanyContact) => void;
};
export default function CreateContactDialog({
  open,
  onCancel,
  onCreate,
}: CreateContactDialog) {
  const [companyName, setCompanyName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <Dialog open={open}>
      <DialogTitle>Create new contact</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="standard"
              label="Company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              variant="standard"
              label="Street name"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="standard"
              label="Street number"
              value={streetNumber}
              onChange={(e) => setStreetNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="standard"
              label="Zip / Postal code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="standard"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="standard"
              label="County"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          onClick={() =>
            onCreate({
              companyName,
              streetName,
              streetNumber,
              zip,
              city,
              country,
            })
          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
