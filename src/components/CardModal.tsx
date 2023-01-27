import { Button, useToast } from "@chakra-ui/react";

type Props = {};

export default function CardModal({}: Props) {
  const toast = useToast();
  return (
    <button
      onClick={() =>
        toast({
          position: "top-right",
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </button>
  );
}
