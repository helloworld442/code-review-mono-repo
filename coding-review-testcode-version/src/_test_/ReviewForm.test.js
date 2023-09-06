import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ReviewForm } from "../components/review";
import TestProvider from "./test.util";

describe("ReviewForm", () => {
  test("ReviewForm이 정상적으로 렌더링 되었는지 확인", () => {
    render(
      <TestProvider>
        <ReviewForm />
      </TestProvider>
    );

    const reviewFormBanner = screen.getByTestId("review-form-banner");
    const reviewCodeForm = screen.getByTestId("review-code-form");
    const reivewInfoForm = screen.getByTestId("review-info-form");

    expect(reviewFormBanner).toBeInTheDocument();
    expect(reviewCodeForm).toBeInTheDocument();
    expect(reivewInfoForm).toBeInTheDocument();
  });

  test("ReviewCodeForm에 인풋값을 변화시켰을 때 정상적으로 코드가 하이라이팅 되는지 확인", () => {
    render(
      <TestProvider>
        <ReviewForm />
      </TestProvider>
    );

    const reviewCodeFormTextArea = screen.getByTestId("editor-form");

    fireEvent.change(reviewCodeFormTextArea, { target: { value: "'123'<asdf>" } });

    const hgFirstCode = screen.getByTestId("hg-code-first");
    const hgLastCodes = screen.getAllByTestId("hg-code-last");

    expect(hgFirstCode).toBeInTheDocument();
    hgLastCodes.forEach((hgLastCode) => {
      expect(hgLastCode).toBeInTheDocument();
    });
  });

  test("ReviewInfoForm에 인풋값을 변화시켰을 때 정상적으로 값이 업데이트 되는지 확인", () => {
    render(
      <TestProvider>
        <ReviewForm />
      </TestProvider>
    );

    const reviewInfoFormInput = screen.getByPlaceholderText("제목을 입력하세요");
    const reviewInfoFormTextArea = screen.getByPlaceholderText("문제상황을 입력하세요");

    fireEvent.change(reviewInfoFormInput, { target: { value: "test" } });
    fireEvent.change(reviewInfoFormTextArea, { target: { value: "test" } });

    expect(reviewInfoFormInput.value).toBe("test");
    expect(reviewInfoFormTextArea.value).toBe("test");
  });

  test("ReviewInfoForm에 값을 잘못읿력 했을 경우에 validation이 정상적으로 동작하는지 확인", () => {
    render(
      <TestProvider>
        <ReviewForm />
      </TestProvider>
    );

    const reviewInfoFormButton = screen.getByText("등록");

    fireEvent.click(reviewInfoFormButton);

    const options = { timeout: 2000 };

    const reviewInfoFormInputValidation = screen.getByText("제목을 입력해주세요", options);
    const reviewInfoFormTextAreaValidation = screen.getByText("문제상황을 입력해주세요", options);

    expect(reviewInfoFormInputValidation).toBeInTheDocument();
    expect(reviewInfoFormTextAreaValidation).toBeInTheDocument();
  });

  test("ReviewForm의 값을 제출했을 때 mutate로 data가 보내지고 값이 초기화 되는 지 확인", async () => {
    render(
      <TestProvider>
        <ReviewForm />
      </TestProvider>
    );

    const reviewInfoFormInput = screen.getByPlaceholderText("제목을 입력하세요");
    const reviewInfoFormTextArea = screen.getByPlaceholderText("문제상황을 입력하세요");
    const reviewInfoFormButton = screen.getByText("등록");

    fireEvent.change(reviewInfoFormInput, { target: { value: "test1234" } });
    fireEvent.change(reviewInfoFormTextArea, { target: { value: "test1234" } });
    fireEvent.click(reviewInfoFormButton);

    const loadingText = screen.findByText("loading....");

    setTimeout(() => {
      expect(loadingText).toBeInTheDocument();
      expect(reviewInfoFormInput.value).toBe("");
      expect(reviewInfoFormTextArea.value).toBe("");
      expect(window.location.pathname).toEqual("/");
    }, 0);
  });
  test("ReviewForm에 취소 버튼을 눌렀을 때 메인페이지로 이동하는지 확인", () => {
    render(
      <TestProvider>
        <ReviewForm />
      </TestProvider>
    );

    const reviewInfoFormInput = screen.getByPlaceholderText("제목을 입력하세요");
    const reviewInfoFormTextArea = screen.getByPlaceholderText("문제상황을 입력하세요");
    const reviewCancelButton = screen.getByText("취소");

    fireEvent.change(reviewInfoFormInput, { target: { value: "test1234" } });
    fireEvent.change(reviewInfoFormTextArea, { target: { value: "test1234" } });
    fireEvent.click(reviewCancelButton);

    const loadingText = screen.findByText("loading....");

    setTimeout(() => {
      expect(loadingText).not.toBeInTheDocument();
      expect(reviewInfoFormInput.value).toBe("");
      expect(reviewInfoFormTextArea.value).toBe("");
      expect(window.location.pathname).toEqual("/");
    }, 0);
  });
});
