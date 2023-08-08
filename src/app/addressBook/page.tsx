"use client";
import { useState } from "react";
import {
  Box,
  Checkbox,
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
  const initialContacts: CompanyContact[] = JSON.parse(
    localStorage.getItem("contacts") ?? "[]"
  );

  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

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

  return (
    <main>
      <Box>
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
            {contacts.map((contact) => (
              <TableRow key={contact.companyName}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isSelected(contact.companyName ?? "")}
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
            ))}
          </TableBody>
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
