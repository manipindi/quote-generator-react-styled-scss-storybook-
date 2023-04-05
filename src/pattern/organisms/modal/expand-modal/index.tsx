import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'


export default function ExpandModal({children, isOpen, closeHanlder}:any) {
  return (
    <Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={closeHanlder}>
        <ModalOverlay />
        <ModalContent w={"auto"}>
          <ModalCloseButton position="absolute" right={"-80px"} top="-30px"/>
          <ModalBody padding={0}>
           {children}
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}