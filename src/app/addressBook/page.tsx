"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Fab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import CreateContactDialog from "@/components/CreateContactDialog";
import { CompanyContact } from "@/types/CompanyContact";

export default function AddressBook() {
  const [open, setOpen] = useState(false);

  const handleCreate = (contact: CompanyContact) => {
    console.log(contact);
  };

  return (
    <main>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>Zip / Postal code</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Country</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", right: "20px", bottom: "20px" }}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Box>
      <CreateContactDialog
        open={open}
        onCancel={() => setOpen(false)}
        onCreate={handleCreate}
      />
    </main>
  );
}
