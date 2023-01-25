
import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomCard } from "./CustomCard";

describe("CustomCard Props", () => {
  it("without Props", () => {
    const { queryByText } = render(<CustomCard />);

    expect(queryByText(/Title/)).toBeFalsy();
    expect(queryByText(/Body/)).toBeFalsy();
  });

  it("with Title", () => {
    const { queryByText } = render(
      <CustomCard title="Card with title" />
    );

    expect(queryByText(/Card with title/)).toBeTruthy();
  });

  it("with Body", () => {
    const { queryByText } = render(
      <CustomCard><h1>Hello from Body</h1></CustomCard>
    );

    expect(queryByText(/Hello from Body/)).toBeTruthy();
  });

  it("with Title, Body", () => {
    const { queryByText } = render(
      <CustomCard title="Card Title"><h1>Card Body</h1></CustomCard>
    );

    expect(queryByText(/Card Title/)).toBeTruthy();
    expect(queryByText(/Card Body/)).toBeTruthy();
  });
});
