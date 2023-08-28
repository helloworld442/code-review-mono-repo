import "./Modal.scss";
import { Button } from "../button/Button";

const Modal = ({ content, onClickPrevTutalrial, onClickNextTutalrial }) => {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal-content">
        <h2 className="modal-content-title">{content}</h2>
        <div className="modal-content-buttons">
          <Button size="small" onClick={onClickPrevTutalrial}>
            이전
          </Button>
          <Button size="small" primary onClick={onClickNextTutalrial}>
            다음
          </Button>
        </div>
      </div>
    </>
  );
};

export { Modal };
