import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ThreadCard from "../components/ThreadCard";
import threadMock from "./threadMock";
import "@testing-library/jest-dom/vitest";

describe("ThreadCard", () => {
  it("should render correctly", () => {
    const thread = threadMock.threads[0][0];
    render(
      <ThreadCard
        thread={thread}
        score={"low"}
        mCount={1}
        collapsed={false}
        showLabel={false}
      />
    );
    const article = screen.getByRole("article");

    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("card");
  });

  it("Should render title with correct color for low score", () => {
    const thread = threadMock.threads[0][0];
    render(
      <ThreadCard
        thread={thread}
        score={"low"}
        mCount={1}
        collapsed={false}
        showLabel={true}
      />
    );

    const header = screen.getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("card_title--low");
  });

  it("Should render title with correct color for high score", () => {
    const thread = threadMock.threads[0][0];
    render(
      <ThreadCard
        thread={thread}
        score={"high"}
        mCount={1}
        collapsed={false}
        showLabel={true}
      />
    );

    const header = screen.getByRole("heading", { level: 1 });
    const label = screen.getByText(/1 messages/i);

    expect(header).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("card--label-high");
    expect(header).toHaveClass("card_title--high");
  });

  it("should not render text if card is collapsed ", () => {
    const thread = threadMock.threads[0][0];
    render(
      <ThreadCard
        thread={thread}
        score={"high"}
        mCount={3}
        collapsed={true}
        showLabel={false}
      />
    );

    const collapsableColumns = screen.getAllByTestId("card-col");
    collapsableColumns.forEach((column) => {
      expect(column).toHaveClass("collapsed");
    });
  });
});
