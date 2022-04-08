import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";
import App from "./App";
import Product from "./components/Product";

let container: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("Renders product", () => {
  act(() => {
    ReactDOM.render(
      <Product
        setRoute={() => {}}
        data={{
          id: 2,
          name: "Rick Sanchez",
          price: "9,99",
          quantity: 0,
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        }}
      />,
      container
    );
  });
  const label = container.querySelector("#backToHome");
  expect(label.textContent).toBe("Retour");
});

test("Renders homepage", () => {
  act(() => {
    ReactDOM.render(<Home setRoute={() => {}} />, container);
  });
  const label = container.querySelector("#back");
  expect(label.textContent).toBe("Aller sur panier");
});

test("Renders cart", () => {
  act(() => {
    ReactDOM.render(<Cart setRoute={() => {}} />, container);
  });
  const label = container.querySelector("#goBack");
  expect(label.textContent).toBe("Retour");
});
