import { Modal } from "@/components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { isModalOpen } from "@/store/Slices/AuthModalSlice";

function AuthModal(props) {
  const { open, view } = useSelector(({ authModal }) => authModal);
  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(isModalOpen({ open: false }));

  const styleProps = {
    boxShadow: "2xl",
    maxHeight: "640px",
    maxWidth: "400px",
    width: "100%",
    height: "100%",
    padding: "50px",
    // margin: "20px"
  };

  return (
    <>
      <Modal
        title={view}
        isOpen={open}
        onClose={handleModalClose}
        styleProps={styleProps}
        isCentered={true}
        blockScrollOnMount={true}
      >
        <>HELLO WORLD</>
      </Modal>
    </>
  );
}

export default AuthModal;
