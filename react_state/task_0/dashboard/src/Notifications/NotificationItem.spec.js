import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("should render blue color data-notification-type set to default when type is default", async () => {
    render(<NotificationItem type="default" value="Test notification" />);

    const liElement = screen.getByText("Test notification");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
    expect(liElement).toHaveAttribute("data-notification-type", "default");

    const style = window.getComputedStyle(liElement);
    expect(style.color).toBe("blue");
  });

  it("should render red color data-notification-type set to urgent when type is urgent", async () => {
    render(<NotificationItem type="urgent" value="Test notification" />);

    const liElement = screen.getByText("Test notification");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
    expect(liElement).toHaveAttribute("data-notification-type", "urgent");

    const style = window.getComputedStyle(liElement);
    expect(style.color).toBe("red");
  });

  it("should call markAsRead once", async () => {
    const handleClick = jest.fn();
    render(
      <NotificationItem markAsRead={handleClick} value="Test notification" />
    );
    fireEvent.click(screen.getByText("Test notification"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("calls handleDisplayDrawer when clicking on 'Your notifications'", () => {
    const handleDisplayDrawer = jest.fn(); // Mock
    render(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />
    );
  
    const notificationText = screen.getByText("Your notifications");
    fireEvent.click(notificationText);
  
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("calls handleHideDrawer when clicking on close button", () => {
    const handleHideDrawer = jest.fn(); // Mock
    const notificationsList = [
      { id: 1, type: "default", value: "Test notification" },
    ];
  
    render(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawer}
        notificationsList={notificationsList}
      />
    );
  
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
  
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
