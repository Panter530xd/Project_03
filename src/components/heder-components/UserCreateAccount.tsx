import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
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

import UserIcon from "/public/images/Icons/user-regular.svg";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputTypes {
  email: string;
  password: string;
}

export default function UserCreateAccount() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<InputTypes>();
  const session = useSession();
  const supabase = useSupabaseClient();

  const onSubmit: SubmitHandler<InputTypes> = async (data, e) => {
    e?.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) {
      alert("There is an error!");
    }

    if (!error) {
      e?.target.reset();
      alert(`Успешно се најавивте`);
      router.push("/signup");
    }
  };

  return (
    <>
      <button
        className={`text-hederColor xl:text-lg text-xs pt-3 ${
          isOpen
            ? "text-active fill-active stroke-active stroke-2"
            : "stroke-black fill-black"
        }`}
        onClick={onOpen}
      >
        <UserIcon className="mx-auto " width={32} height={32} />
        мој профил
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>

          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-1 border-b-2 border-OrangePrimary">
              <h3 className=" text-OrangePrimary text-2xl">Најависе</h3>
              <Link
                href="/signup"
                className="text-2xl text-black hover:text-OrangePrimary"
              >
                Регистрирај се
              </Link>
            </div>
            <div className="py-3">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                {...register("email", { required: true })}
                placeholder="електронска пошта"
              />
              {errors.email && (
                <span className=" text-red-600 font-semibold">
                  ова поле e задолжително
                </span>
              )}
            </div>
            <div className="py-3">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                {...register("password", { required: true })}
                placeholder="лозинка"
              />
            </div>
            <button className="py-2 px-4 rounded w-full bg-OrangePrimary text-white">
              најависе
            </button>
          </form>
          <ModalFooter>
            <Button onClick={onClose}>Откажи</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
