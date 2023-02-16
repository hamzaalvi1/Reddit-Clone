import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function ModalUI(props) {
  const {
    open,
    onClose,
    title,
    styleProps,
    children,
    isFooterEnabled,
    footerChildren,
  } = props;
  return (
    <>
      <Modal isOpen={open} onClose={onClose} sx={styleProps}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          {isFooterEnabled && (
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              {footerChildren && { footerChildren }}
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalUI;
