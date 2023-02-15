/* eslint-disable react/jsx-no-undef */
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import ShareIcon from "../../../public/images/Icons/share-icon.svg";

const ShareButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <button
        onClick={onOpen}
        className=" flex items-center justify-evenly text-lg text-black"
      >
        <ShareIcon className=" mr-3" />
        сподели
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Сподели</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex justify-evenly items-center">
              <FacebookShareButton
                url={"https://www.facebook.com/home.php"}
                quote={
                  "Јади Домашно поврзува талентирани готвачи со локални клиенти."
                }
                hashtag={"#јади домашно"}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://twitter.com/"}
                title={
                  "Јади Домашно поврзува талентирани готвачи со локални клиенти."
                }
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={"https://www.linkedin.com/feed/"}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <ViberShareButton
                url={"https://github.com/next-share"}
                title={
                  "Јади Домашно поврзува талентирани готвачи со локални клиенти."
                }
              >
                <ViberIcon size={32} round />
              </ViberShareButton>
              <WhatsappShareButton
                url={"https://github.com/next-share"}
                title={
                  "Јади Домашно поврзува талентирани готвачи со локални клиенти."
                }
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ShareButton;
