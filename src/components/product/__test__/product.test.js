import React from "react";
import Product  from "../product";
// import ReactDOM from "react-dom";
import {render, cleanup , fireEvent, waitFor} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
// import { Component } from "react";
// import Select from 'react-select'
// import selectEvent from 'react-select-event'

afterEach(()=>{
  cleanup()
})

it("have the right catch logo", async ()=>{
  const {getByAltText} =  render(<Product/>);
  const imageEl = getByAltText('catch-logo');
  await waitFor(()=>{
    expect(imageEl).toHaveAttribute('src',`https://s.catch.com.au/static/catch/images/logo-83d9b21199.svg`)
  });
})

it("filter on change test to desc and asc", async ()=>{
  const {getByTestId} = render(<Product/>);
  const sortingEl =  getByTestId('sort');
  fireEvent.change(sortingEl,{
    target:{
      value: 'desc'
    }
  })
  await waitFor(()=>{
    expect(sortingEl.value).toBe('desc')
  });

  fireEvent.change(sortingEl,{
    target:{
      value: 'asc'
    }
  })
  await waitFor(()=>{
    expect(sortingEl.value).toBe('asc')
  });
})




