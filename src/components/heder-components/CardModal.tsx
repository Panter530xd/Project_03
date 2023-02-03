import { ToastId, useToast } from "@chakra-ui/react";

export default function CardModal(): ToastId {
  const toast = useToast();
  return toast({
    position: "top-right",
    title: "Account created.",
    description: "We've created your account for you.",
    status: "success",
    duration: 9000,
    isClosable: true,
  });
}
