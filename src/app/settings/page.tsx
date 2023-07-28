import { Box } from "@mui/system";
import ContactSection from "@/components/ContactSection";

export default function Settings() {
  return (
    <main>
      <Box sx={{ display: "flex", justifyContent: "center", pt: "40px" }}>
        <ContactSection />
      </Box>
    </main>
  );
}
