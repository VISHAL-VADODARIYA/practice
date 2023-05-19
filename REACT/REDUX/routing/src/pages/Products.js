import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const PRODUCTS = [
    { id: "p1", title: "product 1" },
    { id: "p2", title: "product 2" },
    { id: "p3", title: "product 3" },
  ];
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((i) => (
          <li key={i.id}>
            <Link to={`/products/${i.id}`}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
