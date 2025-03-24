import { render, screen, within } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Header is True", () => {
  it("should render one columnheader that has the attributecolspan = 2 if textSecondCell is null", async () => {
    render(
      <CourseListRow
        isHeader={true}
        textSecondCell={null}
        textFirstCell="Test course list row"
      />
    );

    const thElement = screen.getByRole("columnheader", {
      name: "Test course list row",
    });

    expect(thElement).toBeInTheDocument();
    expect(thElement.tagName).toBe("TH");
    expect(thElement).toHaveAttribute("colspan", "2");
  });

  it("should render two th elements containing textFirstCell and textSecondCell if textSecondCell is not null", async () => {
    render(
      <CourseListRow
        isHeader={true}
        textSecondCell="Test second cell of course list row"
        textFirstCell="Test first cell of course list row"
      />
    );

    const thElements = screen.getAllByRole("columnheader");

    expect(thElements).toHaveLength(2);
  });

  it("should have background color #deb5b545 when isHeader is true and textSecondCell is null", () => {
    render(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header Only"
        textSecondCell={null}
      />
    );

    const row = screen.getByRole("row");
    expect(row).toHaveStyle("background-color: #deb5b545");
  });

  it("should have background color #deb5b545 when isHeader is true and textSecondCell is not null", () => {
    render(
      <CourseListRow
        isHeader={true}
        textFirstCell="First"
        textSecondCell="Second"
      />
    );

    const row = screen.getByRole("row");
    expect(row).toHaveStyle("background-color: #deb5b545");
  });
});

describe("CourseListRow Header is False", () => {
  it("should render two td elements within a tr element", async () => {
    render(<CourseListRow isHeader={false} />);

    const trElement = screen.getByRole("row");
    const tdElements = within(trElement).getAllByRole("cell");

    expect(trElement).toBeInTheDocument();
    expect(tdElements).toHaveLength(2);
  });

  it("should have background color #f5f5f5ab when isHeader is false", () => {
    render(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data 1"
        textSecondCell="Data 2"
      />
    );

    const row = screen.getByRole("row");
    expect(row).toHaveStyle("background-color: #f5f5f5ab");
  });
});