import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from ".";

describe("CustomButton", () => {
  it("renders with the correct label", () => {
    render(<CustomButton>Click me</CustomButton>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click me</CustomButton>);
    userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
