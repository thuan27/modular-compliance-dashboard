import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from ".";

describe("CustomButton", () => {
  it("renders with the correct label", () => {
    render(<CustomButton label="Click me" onClick={() => {}} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<CustomButton label="Click me" onClick={handleClick} />);
    userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
