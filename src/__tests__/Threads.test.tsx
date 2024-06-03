import { it, expect, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import threadMock from "./threadMock";
import "@testing-library/jest-dom/vitest";
import Threads from "../components/Threads";

describe("Threads", () => {
  it("Should collapse if thread has more than 1 message ", () => {
    const threads = threadMock.threads[0];
    render(<Threads threads={threads} itemNum={0} />);
    const threadList = screen.getByRole("list");
    expect(threadList).toBeInTheDocument();
    expect(threadList).toHaveClass("thread_stack--collapsed");
  });

  it("Should expand if clicked ", () => {
    const threads = threadMock.threads[0];
    render(<Threads threads={threads} itemNum={0} />);
    const threadList = screen.getByRole("list");
    expect(threadList).toBeInTheDocument();
    expect(threadList).toHaveClass("thread_stack--collapsed");
    fireEvent.click(threadList);
    expect(threadList).not.toHaveClass("thread_stack--collapsed");
  });
});
