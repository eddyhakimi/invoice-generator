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

  const [companyNameError, setCompanyNameError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingContacts: CompanyContact[] = JSON.parse(
      localStorage.getItem("contacts") ?? "[]"
    );

    // reset errors
    setCompanyNameError("");

    // validate inputs
    const isUnique = !existingContacts
      .map((c) => c.companyName)
      .includes(companyName);
    if (!companyName) setCompanyNameError("Missing company name!");
    else if (!isUnique) setCompanyNameError("Company name exists already!");

    if (companyName && isUnique) {
      onCreate({
        companyName,
        streetName,
        streetNumber,
        zip,
        city,
        country,
      });
    }
  };

  return (
    <Dialog open={open}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                required
                error={companyNameError !== ""}
                helperText={companyNameError}
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
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
