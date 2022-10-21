import { createPortal } from "react-dom";

function Modal(props) {
  if (!props.isOpen) return null;

  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="portal-modal">
        <div className="card bg-light-blue rounded-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="fw-bold text-white mb-0">
                Watch "{props.title}" trailer
              </h5>
              <i
                className="fas fa-times fa-lg text-white cursor-pointer"
                onClick={props.close}
              ></i>
            </div>
            <hr className="text-secondary" />
            <div className="mt-2">{props.children}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
