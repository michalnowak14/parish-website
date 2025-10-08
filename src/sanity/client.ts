// lib/sanity.client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ps3zsjuw",
  dataset: "production",
  apiVersion: "2025-01-01", // zawsze aktualna wersja API
  useCdn: false, // wyłączamy cache, dane zawsze świeże
  token: process.env.SANITY_API_READ_TOKEN, // jeśli dataset jest prywatny
});
