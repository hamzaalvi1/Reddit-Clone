import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
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
      <Modal isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent sx={styleProps}>
          <ModalHeader paddingBottom={0}>
            <Heading
              as="h6"
              fontWeight={500}
              fontSize={"20px"}
              lineHeight={"24px"}
            >
              {title}
            </Heading>
          </ModalHeader>
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
