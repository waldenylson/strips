"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>STRIPS - SISTEMA DE STRIPS ELETRÔNICAS</title>
      </head>
      <body style={{ backgroundColor: "#878787", overflow: "hidden" }}>
        <Container maxWidth={false}>
          <Box sx={{ mx: -2, my: 1 }}>{children}</Box>
        </Container>
      </body>
    </html>
  );
}
