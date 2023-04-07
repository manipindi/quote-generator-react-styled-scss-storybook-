import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'


export default function ExpandModal({children, isOpen, closeHanlder}:any) {
  return (
    <Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={closeHanlder}>
        <ModalOverlay />
        <ModalContent w={"auto"}>
          <ModalCloseButton color={"#fff"} position="absolute" right={["-20px", null, null, "-30px"]} top="-30px"/>
          <ModalBody padding={0}>
           {children}
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}
