"use client";

import { useEffect, useState } from "react";
import { api, socket } from "../lib/api";
import Link from "next/link";

export default function ObjectList() {
  const [objects, setObjects] = useState([]);

  const fetchData = async () => {
  const res = await api.get("/objects");

  const data = Array.isArray(res.data)
    ? res.data
    : res.data.data || [];

  setObjects(data);
};

  useEffect(() => {
    fetchData();

    socket.on("newObject", (obj) => {
      setObjects((prev) => [obj, ...prev]);
    });

    socket.on("deleteObject", (id) => {
      setObjects((prev) => prev.filter(o => o._id !== id));
    });

    return () => {
      socket.off("newObject");
      socket.off("deleteObject");
    };
  }, []);

  return (
    <div>
      {Array.isArray(objects) ? (
  objects.map((o: any) => (
    <div key={o._id}>
      <h3>{o.title}</h3>
      <img src={o.imageUrl} width={150} />
      
    </div>
  ))
) : (
  <p>Aucune donnée ou format incorrect</p>
)}
    </div>
  );console.log(res.data)
}