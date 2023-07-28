import { Box } from "@mui/system";
import ContactSection from "@/components/ContactSection";
import BankDetailsSection from "@/components/BankDetailsSection";

export default function Settings() {
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ContactSection />
        <BankDetailsSection />
      </Box>
    </main>
  );
}
