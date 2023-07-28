import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      <h1>Invoice generator</h1>
      <Button variant="contained">Generate</Button>
    </main>
  );
}
