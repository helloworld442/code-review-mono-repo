import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "../components/ui";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  test("Header 영역이 렌더링 되었는지 확인", () => {
    render(<Header />);

    const headerNav = screen.getByTestId("header-nav");
    const headerAside = screen.getByTestId("header-aside");

    expect(headerNav).toBeInTheDocument();
    expect(headerAside).toBeInTheDocument();
  });

  test("Header 영역을 스크롤했을 때 active라는 클래스가 붙는지 확인", () => {
    render(<Header />);

    const headerNav = screen.getByTestId("header-nav");
    const headerAside = screen.getByTestId("header-aside");

    setTimeout(() => {
      // 스크롤 시뮬레이션
      headerNav.scrollTop = 1000;

      expect(headerNav).toHaveClass("header-nav active");
      expect(headerAside).toHaveClass("header-aside active");
    }, 0);
  });

  test("Header 영역에 isBackground가 false라는 props를 넘겨줄 때 active라는 클래스가 붙는지 확인", () => {
    render(<Header isBackground="false" />);

    const headerNav = screen.getByTestId("header-nav");
    const headerAside = screen.getByTestId("header-aside");

    expect(headerNav).toHaveClass("header-nav isBackground");
    expect(headerAside).toHaveClass("header-aside isBackground");
  });

  test("Header 영역에 Logo를 눌렀을 때 / 경로로 이동하는 지 확인", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerLogoAnchor = screen.getByText("별무리 스튜디오");

    fireEvent.click(headerLogoAnchor);

    setTimeout(() => {
      expect(window.location.pathname).toEqual("/");
    }, 0);
  });

  test("Header 영역에 글쓰기를 눌렀을 때 /write 경로로 이동하는 지 확인", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerWriteAnchor = screen.getByText("글쓰기");

    fireEvent.click(headerWriteAnchor);

    setTimeout(() => {
      expect(window.location.pathname).toEqual("/write");
    }, 0);
  });
});
