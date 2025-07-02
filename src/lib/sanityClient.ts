import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "3qxalk7v",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
