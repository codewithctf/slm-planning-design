import React from "react";
import AdminBlogForm from "../src/components/AdminBlogForm";
import AdminPortfolioForm from "../src/components/AdminPortfolioForm";

export default function StudioDashboard() {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Payload Studio Admin</h1>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Create Blog Post</h2>
        <AdminBlogForm />
      </section>
      <section>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Create Portfolio Project</h2>
        <AdminPortfolioForm />
      </section>
    </div>
  );
}
