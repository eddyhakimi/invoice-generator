import { Box } from "@mui/system";
import ContactSection from "@/components/ContactSection";
import BankDetailsSection from "@/components/BankDetailsSection";
import GermanTaxSection from "@/components/GermanTaxSection";

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
        <GermanTaxSection />
      </Box>
    </main>
  );
}
