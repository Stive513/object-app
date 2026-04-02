"use client";

import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import { useParams } from "next/navigation";

export default function ObjectDetail() {
  const { id } = useParams();
  const [object, setObject] = useState<any>(null);

  useEffect(() => {
    api.get("/objects/" + id).then(res => setObject(res.data));
  }, [id]);

  if (!object) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{object.title}</h1>
      <p>{object.description}</p>
      <img src={object.imageUrl} width={300} />
    </div>
  );
}