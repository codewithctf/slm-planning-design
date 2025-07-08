import { useState } from "react";
import { usePayloadApi } from "@/hooks/usePayloadApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function AdminBlogForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    author: "",
    mainImage: "",
    categories: [""],
    tags: [""],
    publishedAt: "",
    body: ""
  });
  const { callApi, loading } = usePayloadApi();

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, idx: number, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].map((v: string, i: number) => (i === idx ? value : v)),
    }));
  };

  const handleAddArray = (field: string) => {
    setForm((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      ...form,
      categories: form.categories.filter(Boolean).map((category) => ({ category })),
      tags: form.tags.filter(Boolean).map((tag) => ({ tag })),
    };
    const res = await callApi("/api/blogs", "POST", payload);
    if (!res.error && onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded bg-white">
      <Label>Title</Label>
      <Input value={form.title} onChange={e => handleChange("title", e.target.value)} required />
      <Label>Slug</Label>
      <Input value={form.slug} onChange={e => handleChange("slug", e.target.value)} required />
      <Label>Author (User ID)</Label>
      <Input value={form.author} onChange={e => handleChange("author", e.target.value)} required />
      <Label>Main Image (Media ID)</Label>
      <Input value={form.mainImage} onChange={e => handleChange("mainImage", e.target.value)} />
      <Label>Categories</Label>
      {form.categories.map((cat, i) => (
        <div key={i} className="flex gap-2 mb-1">
          <Input value={cat} onChange={e => handleArrayChange("categories", i, e.target.value)} />
          {i === form.categories.length - 1 && (
            <Button type="button" onClick={() => handleAddArray("categories")}>+</Button>
          )}
        </div>
      ))}
      <Label>Tags</Label>
      {form.tags.map((tag, i) => (
        <div key={i} className="flex gap-2 mb-1">
          <Input value={tag} onChange={e => handleArrayChange("tags", i, e.target.value)} />
          {i === form.tags.length - 1 && (
            <Button type="button" onClick={() => handleAddArray("tags")}>+</Button>
          )}
        </div>
      ))}
      <Label>Published At</Label>
      <Input type="date" value={form.publishedAt} onChange={e => handleChange("publishedAt", e.target.value)} />
      <Label>Body</Label>
      <Textarea value={form.body} onChange={e => handleChange("body", e.target.value)} required />
      <Button type="submit" disabled={loading}>Submit Blog</Button>
    </form>
  );
}
