import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { ReviewList } from "../components/review";
import TestProvider from "./test.util";

const server = setupServer(
  rest.get("/reviews", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          tags: ["#리엑트"],
          tag: '<span class="colorful-text">#리엑트 </span>리엑트를 하다가 생긴 어려운 점들',
          title: "Review 1",
          problem: "리엑트를 하다가 생긴 어려운 점들",
          question:
            "리엑트를 하다가 생긴 어려운 점들\n리엑트를 하다가 생긴 어려운 점들\n리엑트를 하다가 생긴 어려운 점들",
          code: "",
          id: 1,
        },
        {
          tags: ["#자바스크립트", "#재밌다"],
          tag: '<span class="colorful-text">#자바스크립트 </span><span class="colorful-text">#재밌다 </span>자바스크립트를 사랑해주세요!!',
          title: "Review 2",
          problem: "자바스크립트를 사랑해주세요!!!!!!",
          question: "자바스크립트를 사랑해주세요!!!!!!",
          code: '<span class = "hg-var-code">const</span> a = <span class = "hg-num-code">3</span>;\n<span class = "hg-var-code">const</span> b = <span class = "hg-num-code">3</span>;\n<span class = "hg-var-code">const</span> c = <span class = "hg-num-code">3</span>;\n<span class = "hg-var-code">const</span> d = <span class = "hg-num-code">3</span>;\n<span class = "hg-var-code">const</span> e = <span class = "hg-num-code">3</span>;\n<span class = "hg-var-code">const</span> f = <span class = "hg-num-code">3</span>;\n<span class = "hg-var-code">const</span> g = <span class = "hg-num-code">3</span>;\n<span class = "hg-var-code">const</span> h = <span class = "hg-num-code">3</span>;\n<span class = "hg-var-code">const</span> k = <span class = "hg-num-code">3</span>;',
          id: 4,
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ReviewList", () => {
  test("ReviewList에서 데이터를 정상적으로 가져올 때 데이터가 표시 되는 지 확인", async () => {
    render(
      <TestProvider>
        <ReviewList />
      </TestProvider>
    );

    // useQuery 훅이 로딩 상태일 동안 "loading..." 텍스트가 화면에 나타나는지 확인
    const loadingText = screen.getByText("loading....");
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      // 모의 데이터의 각 항목이 화면에 표시되는지 확인
      const itemTitles = screen.queryAllByText((content, element) => content.startsWith("Review"));
      expect(itemTitles).toHaveLength(2);
    });
  });
});
