import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("check title", async () => {
  render(<App />);
  const title = await waitFor(() => screen.findByTestId("title"));
  expect(title).toHaveTextContent("Useless New Age Calculator");
});

test("Check display info", async () => {
  render(<App />);
  const personInfo = await waitFor(() => screen.findByTestId("personInfo"));
  // console.log(personInfo.textContent);
  expect(personInfo).toHaveTextContent("Name: Age: Gender:");
});

test("Can change the name", () => {
  render(<App />);
  const nameInput = screen.getByTestId("name-input");
  fireEvent.change(nameInput, { target: { value: "Mohammad" } });
  expect(nameInput.value).toBe("Mohammad");
});

test("Can change the age", () => {
  render(<App />);
  const ageInput = screen.getByTestId("age-input");
  fireEvent.change(ageInput, { target: { value: "30" } });
  expect(ageInput.value).toBe("30");
});

test("Can change gender", () => {
  render(<App />);
  const genderSelect = screen.getByTestId("gender-select");
  fireEvent.change(genderSelect, { target: { value: "Male" } });
  expect(genderSelect.value).toBe("Male");
});



// check age after submit

// test("check new age", () => {
//   render(<App />);
//   const nameInput = screen.getByTestId("name-input");
//   const ageInput = screen.getByTestId("age-input");
//   const genderSelect = screen.getByTestId("gender-select");

//   const personInfo = screen.getByTestId("personInfo");

//   fireEvent.change(ageInput, { target: { value: "25" } });
//   fireEvent.change(nameInput, { target: { value: "Mohammad" } });
//   fireEvent.change(genderSelect, { target: { value: "Male" } });

  // fireEvent(
  //   screen.getByTestId("submit"),
  //   new MouseEvent("click", {
  //     bubbles: true,
  //     cancelable: true,
  //   }));

  //   expect(personInfo).toHaveTextContent("Name: Mohammad", "Age: 25", "Gender: Male", "New Age:");

  // });
