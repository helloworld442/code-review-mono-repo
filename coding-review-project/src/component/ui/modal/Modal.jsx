import "./Modal.scss";
import { Button } from "../button/Button";

const Modal = ({
  content,
  tutalrialRef,
  tutalrialIndex,
  onClickPrevTutalrial,
  onClickNextTutalrial,
}) => {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal-dummy-box" ref={tutalrialRef}></div>
      <div className="modal-content">
        <h2 className="modal-content-title">
          <span>{tutalrialIndex + 1}</span>
          {content}
        </h2>
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
