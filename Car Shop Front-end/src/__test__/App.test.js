import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

import TestRenderer from "react-test-renderer";
import AddCar from "../components/AddCar";

test("open add car modal form", () => {
  render(<App />);
  fireEvent.click(screen.getByText("New Car"));
  expect(screen.getByRole("dialog")).toHaveTextContent("New Car");
});

test("renders a snapshot", () => {
  const tree = TestRenderer.create(<AddCar />).toJSON();
  expect(tree).toMatchSnapshot();
});
