import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import ShopingCard from "/public/images/Icons/shopping-bag-svgrepo-com.svg";
import Image from "next/image";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <ShopingCard width={40} height={40} />
      </button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Card Details</DrawerHeader>

          <DrawerBody>
            <div className="flex justify-between items-center">
              <Image
                src="/images/images-static/tavce gravce.png"
                alt="tavce gravce.png"
                width={100}
                height={100}
              />
              <div>
                <p className="text-right">Тафче Гравче</p>
                <p className="text-right">Готвач Наташа</p>
              </div>
            </div>
            <div className="flex justify-between items-center pb-3">
              <p className=" font-semibold text-black">Цена 200 ден</p>
              <p className="text-right text-2xl">- 1 +</p>
            </div>
            <hr />
          </DrawerBody>

          <DrawerFooter>
            <div className=" flex justify-center">
              <Link href="/checkout">
                <button className="bg-OrangePrimary w-full text-white font-semibold py-2 px-4">
                  Plece Proceed Checkout
                </button>
              </Link>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
