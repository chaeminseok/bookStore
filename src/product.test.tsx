import { render, screen } from "@testing-library/react";
import Products from "./Products"; // assuming this is your component
import React from "react";
it("renders the welcome text", async () => {
  render(<Products />);
  await screen.findByText("Hello, Jack");
});
