import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook, act } from "@testing-library/react-hooks";
import useHome from "../../hooks/useHome";

const server = setupServer(
  rest.get("http://localhost:8000/api/products", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 2,
          name: "Rick Sanchez",
          price: "9,99",
          quantity: 0,
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
          id: 3,
          name: "Morty Smith",
          price: "8",
          quantity: 0,
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
          id: 4,
          name: "Summer Smith",
          price: "16.50",
          quantity: 70,
          image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
          id: 5,
          name: "Beth Smith",
          price: "15",
          quantity: 30,
          image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
          id: 6,
          name: "Jerry Smith",
          price: "9,99",
          quantity: 30,
          image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        }
      ])
    );
  })
  // remove
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Load home", async () => {
  const { result } = renderHook(() => useHome());
  const { loading, loadProducts } = result.current;
  expect(loading).toEqual(true);
  await act(async () => {
    await loadProducts();
  });
  const { products } = result.current;
  // console.log(products);
});
