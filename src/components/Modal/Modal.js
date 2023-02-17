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
    isOpen,
    onClose,
    title,
    styleProps,
    children,
    isFooterEnabled,
    footerChildren,
    ...rest
  } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} {...rest } >
        
        <ModalOverlay bg='blackAlpha.300' />
        <ModalContent   sx={styleProps}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody >{children}</ModalBody>
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
