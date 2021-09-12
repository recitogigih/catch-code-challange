import React from "react";
import ProductList  from "../productList";
import {render, cleanup , waitFor} from "@testing-library/react"

afterEach(()=>{
  cleanup()
})

it("should render product image correctly", async() => {
    const {getByTestId} = await render(
      <ProductList
        name="Buy Olaplex No. 3 Hair Perfector"
        imageUrl="https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg"
        salePrice="3145"
        retailPrice="5000"
        quantityAvailable="65"
      />,
    );
    await waitFor(()=>{
      expect(getByTestId('product-image')).toHaveAttribute('src', 'https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg')
    });
})

it("should render product name with substring", async() => {
  const {getByTestId} = await render(
    <ProductList
      name="Buy Olaplex No. 3 Hair Perfector"
      imageUrl="https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg"
      salePrice="3145"
      retailPrice="5000"
      quantityAvailable="65"
    />,
  );
  await waitFor(()=>{
    expect(getByTestId('product-name')).toHaveTextContent('Buy Olaplex No. 3 Hair Perfect...')
  });
})

it("should render the right retail price in strikethrough", async() => {
  const {container} = await render(
    <ProductList
      name="Buy Olaplex No. 3 Hair Perfector"
      imageUrl="https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg"
      salePrice="3145"
      retailPrice="5000"
      quantityAvailable="65"
    />,
  );
  await waitFor(()=>{
    expect(container.querySelector('del')).toHaveTextContent('5000')
  });
})


it("should render sale price correctly", async() => {
  const {getByTestId} = await render(
    <ProductList
      name="Buy Olaplex No. 3 Hair Perfector"
      imageUrl="https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg"
      salePrice="3145"
      retailPrice="5000"
      quantityAvailable="65"
    />,
  );
  await waitFor(()=>{
    expect(getByTestId('product-sale-price')).toHaveTextContent('3145')
  });
})


it("should render quantity as sold out when quantityAvailable = 0", async() => {
  const {getByTestId} = await render(
    <ProductList
      name="Buy Olaplex No. 3 Hair Perfector"
      imageUrl="https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg"
      salePrice="3145"
      retailPrice="5000"
      quantityAvailable="sold out"
    />,
  );
  await waitFor(()=>{
    expect(getByTestId('product-quantity')).toHaveTextContent('sold out')
  });
})
