import { createPortal } from "react-dom";

function Modal(props) {
  if (!props.isOpen) return null;

  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="portal-modal">
        <div className="card rounded-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="fw-bold">Watch "{props.title}" trailer</h5>
              <button
                className="btn btn-secondary rounded-3"
                onClick={props.close}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mt-2">{props.children}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
