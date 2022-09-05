import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
import { click } from "@testing-library/user-event/dist/click";

test("check title", async () => {
  render(<App />);
  const title = await waitFor(() => screen.findByTestId("title"));
  expect(title).toHaveTextContent("Useless New Age Calculator");
});

test("Check display info", async () => {
  render(<App />);
  const name = await waitFor(() => screen.findByTestId("personInfo"));
  expect(name).toHaveTextContent("Name:", "Age:", "Gender:");
});

test("Can change the name", () => {
  render(<App />);
  const nameInput = screen.getByTestId("name-input");
  const name = screen.getByTestId("personInfo");
  fireEvent.change(nameInput, { target: { value: "Mohammad" } });
  expect(name).toHaveTextContent("Name: Mohammad");
  fireEvent.change(nameInput, { target: { value: "Jack" } });
  expect(name).toHaveTextContent("Name: Jack");
  fireEvent.change(nameInput, { target: { value: "testName" } });
  expect(name).toHaveTextContent("Name: testName");
});

test("Can change the age", () => {
  render(<App />);
  const ageInput = screen.getByTestId("age-input");
  const age = screen.getByTestId("personInfo");
  fireEvent.change(ageInput, { target: { value: "30" } });
  expect(age).toHaveTextContent("Age: 30");
  fireEvent.change(ageInput, { target: { value: "15" } });
  expect(age).toHaveTextContent("Age: 15");
});

test("Can change gender", () => {
  render(<App />);
  const genderSelect = screen.getByTestId("gender-select");
  const gender = screen.getByTestId("personInfo");
  fireEvent.change(genderSelect, { target: { value: "Male" } });
  expect(gender).toHaveTextContent("Male");
  fireEvent.change(genderSelect, { target: { value: "Female" } });
  expect(gender).toHaveTextContent("Female");
  fireEvent.change(genderSelect, { target: { value: "Other" } });
  expect(gender).toHaveTextContent("Other");
});

// check age after submit

test("check new age", () => {
  render(<App />);
  const ageInput = screen.getByTestId("age-input");
  const newAge = screen.getByTestId("personInfo");
  fireEvent.change(ageInput, { target: { value: "30" } });

  fireEvent(
    screen.getByTestId("submit"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  setTimeout(() => {
    expect(newAge).toHaveTextContent("New Age: 35");
  }, 0);
});
