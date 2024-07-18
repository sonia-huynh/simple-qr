import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import QrCode from "../QrCode";

test("The title of the page says Sonia's Github QR Code", () => {
  render(<QrCode />);
  const titleName = screen.getByTestId("title");
  expect(titleName.textContent).toBe("Sonia's Github QR Code");
});

test("The page shows a button that says Click me to get the QR Code!", () => {
  render(<QrCode />);
  const button = screen.getByTestId("qr-code-button");
  expect(button).toBeInTheDocument();
});

test("Clicking the button will show the QR code", async () => {
  render(<QrCode />);

  const button = screen.getByTestId("qr-code-button");
  userEvent.click(button);

  const displayedQRCodeImage = screen.getByRole("img");
  await expect(displayedQRCodeImage).toHaveAttribute(
    "src",
    "sonia-github-qr-code.png"
  );
});
