import React from "react";
import Product  from "../product";
import ReactDOM from "react-dom";
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Component } from "react";

it("have the right catch logo", ()=>{
  const {getByAltText} =  render(<Product/>);
  const image = getByAltText('catch-logo');
  expect(image).toHaveAttribute('src',`https://s.catch.com.au/static/catch/images/logo-83d9b21199.svg`)
})

