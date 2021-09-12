import React from "react";
import MetaData  from "../metada";
import {render, cleanup , waitFor} from "@testing-library/react"

afterEach(()=>{
  cleanup()
})


it("should render metada data correctly", async() => {
  const {getByTestId} = await render(
    <MetaData
      totalItem="102"
      query="best sellers"
      currentPage="1"
      totalPage="3"
    />,
  );
  await waitFor(()=>{
    expect(getByTestId('meta-data')).toHaveTextContent('showing: 102 best sellers items | page 1 of 3')
  });
})
