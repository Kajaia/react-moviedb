function Modal(props) {
  if (!props.isOpen) return null;

  return (
    <>
      <div className="overlay"></div>
      <div className="portal-modal">
        <div className="card rounded-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="fw-bold text-white mb-0 text-dark">
                Watch {props.title} trailer
              </h5>
              <i
                className="fas fa-times fa-lg text-dark cursor-pointer"
                onClick={props.close}
              ></i>
            </div>
            <hr className="text-secondary" />
            <div className="mt-2">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
