"use client";
import { useState, useEffect } from "react";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Checkbox,
  Fab,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import CreateContactDialog from "@/components/CreateContactDialog";
import { CompanyContact } from "@/types/CompanyContact";

export default function AddressBook() {
  const [contacts, setContacts] = useState<CompanyContact[]>([]);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const initialContacts: CompanyContact[] = JSON.parse(
      localStorage.getItem("contacts") ?? "[]"
    );

    setContacts(initialContacts);
  }, []);

  const numSelected = selectedContacts.length;

  const handleCreate = (contact: CompanyContact) => {
    if (contacts.map((c) => c.companyName).includes(contact.companyName))
      //TODO: display error
      return;
    const updatedContacts = contacts.concat(contact);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

    setContacts(updatedContacts);
    setOpen(false);
  };

  const isSelected = (name: string) =>
    selectedContacts.findIndex((name2) => name === name2) !== -1;

  const handleSelection = (checked: boolean, name: string) => {
    if (checked) return setSelectedContacts(selectedContacts.concat([name]));
    setSelectedContacts(selectedContacts.filter((name2) => name !== name2));
  };

  const handleDelete = () => {
    const updatedContacts = contacts.filter(
      (c) => !selectedContacts.includes(c.companyName)
    );
    setContacts(updatedContacts);
    setSelectedContacts([]);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <main>
      <Box>
        <Paper>
          <Toolbar
            sx={{
              ...(numSelected > 0 && {
                bgcolor: (theme) =>
                  alpha(
                    theme.palette.primary.main,
                    theme.palette.action.activatedOpacity
                  ),
              }),
            }}
          >
            {selectedContacts.length > 0 ? (
              <>
                <Typography
                  sx={{ flex: "1" }}
                >{`${selectedContacts.length} selected`}</Typography>
                <IconButton onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </>
            ) : (
              <Typography variant="h6">Common contacts</Typography>
            )}
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Company</TableCell>
                <TableCell>Street</TableCell>
                <TableCell>Zip / Postal code</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => {
                const selected = isSelected(contact.companyName);
                return (
                  <TableRow key={contact.companyName} selected={selected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected}
                        onChange={(e) =>
                          handleSelection(e.target.checked, contact.companyName)
                        }
                      />
                    </TableCell>
                    <TableCell>{contact.companyName}</TableCell>
                    <TableCell>{`${contact.streetName} ${contact.streetNumber}`}</TableCell>
                    <TableCell>{contact.zip}</TableCell>
                    <TableCell>{contact.city}</TableCell>
                    <TableCell>{contact.country}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
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
