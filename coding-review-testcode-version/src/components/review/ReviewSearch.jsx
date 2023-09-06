import { styled } from "styled-components";
import { Button } from "../ui";
import { useState } from "react";

const ReviewSearch = () => {
  const [form, setForm] = useState({ title: "", tag: "", tags: [] });

  const onKeyDownTag = (e) => {
    if (e.key === " ") {
      const newValue = e.target.value + " ";
      const tags = newValue.match(/#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+)/g);
      setForm((prev) => ({ ...prev, tags }));
    }

    if (e.key === "Backspace") {
      const newValue = e.target.value.slice(0, -1);
      const tags = newValue.match(/#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+) /g);
      setForm((prev) => ({ ...prev, tags }));
    }
  };

  const onChangeTitle = (e) => {
    const tag = e.target.value.replace(
      /#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+) /g,
      '<span class="colorful-text">#$1 </span>'
    );
    setForm((prev) => ({ ...prev, title: e.target.value, tag }));
  };

  const onSubmitInput = (e) => {
    e.preventDefault();
  };

  return (
    <StReviewSearch onSubmit={onSubmitInput}>
      <ReviewSearchInput>
        <pre dangerouslySetInnerHTML={{ __html: form.tag }} />
        <input
          type="text"
          value={form.title}
          onChange={onChangeTitle}
          onKeyDown={onKeyDownTag}
          placeholder="검색어를 입력하세요"
          autoComplete="false"
          spellCheck="false"
        />
      </ReviewSearchInput>
      <Button size="small">검색</Button>
    </StReviewSearch>
  );
};

const StReviewSearch = styled.form`
  width: 100%;
  height: 84px;
  padding: 16px 0;
  margin-bottom: 48px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewSearchInput = styled.div`
  position: relative;
  width: 85%;
  height: 100%;
  padding: 0 12px;
  border: 2px solid #bbb;
  border-radius: 8px;
  background: transparent;

  pre,
  input {
    position: absolute;
    left: 12px;
  }

  pre {
    width: calc(100% - 24px);
    height: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Jua", sans-serif;
    color: #333;
    background: transparent;
    z-index: 0;
    display: flex;
    align-items: center;

    .colorful-text {
      color: rgb(64, 58, 107, 0.8);
    }
  }

  input {
    width: calc(100% - 24px);
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Jua", sans-serif;
    color: transparent;
    caret-color: #333;
    background: transparent;
    z-index: 1;
  }
`;

export { ReviewSearch };
