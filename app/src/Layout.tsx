import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth={false}>
      <Box sx={{ mx: -2, my: 1 }}>{children}</Box>
    </Container>
  );
}
