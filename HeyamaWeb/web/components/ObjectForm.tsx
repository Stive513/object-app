"use client";

import { useState } from "react";
import { api } from "../lib/api";

export default function ObjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image, image.name);
    console.log("IMAGE 👉", image);

    await api.post("/objects", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });


    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Créer</button>
    </form>
    </div>
  );
}
