import { css, styled } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";

const EditorCode = ({ code, hash, hashs, onMouseUpHash, onSubmitHash }) => {
  const codeRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    hljs.highlightAll();
  }, [code]);

  console.log(hash, hashs);

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUpHash);

    return () => document.removeEventListener("mouseup", onMouseUpHash);
  }, [code]);

  return (
    <StEditorCodeBox $disbled={hash}>
      <StEditorCodeNumber>
        {code.split("\n")?.map((_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </StEditorCodeNumber>
      <StEditorCode>
        <pre className="javascript">
          <code ref={codeRef}>{code}</code>
        </pre>
        {hash && (
          <StEditorCodeModal>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="댓글을 입력하세요"
            />
            <span onClick={() => onSubmitHash(value)}>추가</span>
          </StEditorCodeModal>
        )}
      </StEditorCode>
    </StEditorCodeBox>
  );
};

const StEditorCodeBox = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100%;
  border: none;
  outline: none;
  background: rgb(41, 44, 51);
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: #eee;
  caret-color: red;
  z-index: 0;

  ${(props) =>
    props.$disbled &&
    css`
      z-index: 1;
    `}
`;

const StEditorCodeNumber = styled.ul`
  position: absolute;
  left: 0;
  width: 5%;
  padding: 1rem 0;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  font-family: "monospace";
  color: #888;
  background: rgb(41, 44, 51);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: pre-wrap;
  overflow-y: hidden;
  line-height: 1.5rem;
`;

const StEditorCode = styled.div`
  position: absolute;
  right: 0;
  width: 95%;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: #eee;
  caret-color: red;
  white-space: pre-wrap;
  overflow-y: hidden;
  line-height: 1.5rem;

  .highlight {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: underline;
    color: #333;
    background: yellow;
  }
`;

const StEditorCodeModal = styled.div`
  width: 230px;
  padding: 8px;
  border: 2px solid #bbb;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 100;

  input {
    width: 180px;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Jua", sans-serif;
    color: #333;
    caret-color: #333;
    z-index: 9999;
  }

  span {
    width: 50px;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 0.925rem;
    font-weight: 400;
    font-family: "Jua", sans-serif;
    color: #333;
    background: transparent;
    text-align: right;
    z-index: 9999;
    display: inline-block;
    cursor: pointer;
  }
`;

export { EditorCode };
