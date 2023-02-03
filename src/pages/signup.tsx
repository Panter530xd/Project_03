import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

enum GenderEnum {
  cook = "cook",
  gurman = "gurman",
}

interface InputTypes {
  email: string;
  password: string;
  full_name: string;
  user_adress: string;
  username: string;
  user_tel: string;
  user_age: string;
  avatar_url: string;
  user_tipe: GenderEnum;
  user_cusine: CusinesTypes;
}

interface CusinesTypes {
  id: number;
  name: string | undefined;
  checked?: boolean;
}

const cusines: CusinesTypes[] = [
  { id: 1, name: "Традиционална кујна" },
  { id: 2, name: "Вегетаријанска кујна" },
  { id: 3, name: "Десерти" },
  { id: 4, name: "Пецива" },
  { id: 5, name: "Италијанска кујна" },
  { id: 6, name: "Здрава храна" },
  { id: 7, name: "Безглутенска храна" },
  { id: 8, name: "Чорби и супи" },
  { id: 9, name: "Raw храна" },
  { id: 10, name: "Домашни бургери и пици" },
  { id: 11, name: "Десерти" },
  { id: 12, name: "Нискокалорична храна" },
  { id: 13, name: "Мексиканска кујна" },
  { id: 14, name: "Вегетаријанска кујна" },
];

const User = () => {
  const router = useRouter();
  const [checkedList, setCheckedList] = useState<CusinesTypes[]>(
    uncheckAll(cusines)
  );

  function uncheckAll(cusines: CusinesTypes[]) {
    return cusines.map((cusin) => ({
      ...cusin,
      checked: false,
    }));
  }

  function toggleOption(cusines: CusinesTypes[], id: number, checked: boolean) {
    return cusines.map((cusin) =>
      cusin.id === id ? { ...cusin, checked } : cusin
    );
  }

  const changeList = (id: number, checked: boolean) => {
    setCheckedList((checkedList) => toggleOption(checkedList, id, checked));
  };

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

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.full_name,
          user_adress: data.user_adress,
          username: data.username,
          user_tel: data.user_tel,
          user_age: data.user_age,
          user_tipe: data.user_tipe,
          avatar_url: data.avatar_url,
          user_cusine: [...checkedList],
        },
        emailRedirectTo: "http://localhost:3000/user",
      },
    });
    if (error) {
      alert("There is an error!");
    }

    if (!error) {
      setCheckedList((prevCheckedList) =>
        prevCheckedList.map((item) => ({ ...item, checked: false }))
      );
      e?.target.reset();
      alert(`Успешно се регистриравте`);
      router.push("/successful registration");
    }
  };

  return (
    <div className="xl:w-6/12  mx-auto py-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <div className="py-3">
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("full_name", { required: true })}
            placeholder="име и презиме"
          />
          {errors.full_name && (
            <span className=" text-red-600 font-semibold">
              ова поле e задолжително
            </span>
          )}
        </div>
        <div className="py-3">
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("user_adress", { required: true })}
            placeholder="адреса"
          />
          {errors.user_adress && (
            <span className=" text-red-600 font-semibold">
              ова поле e задолжително
            </span>
          )}
        </div>
        <div className="py-3">
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("username", { required: true })}
            placeholder="корисничко име"
          />
          {errors.username && (
            <span className=" text-red-600 font-semibold">
              ова поле e задолжително
            </span>
          )}
        </div>
        <div className="py-3">
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            {...register("user_tel", { required: true })}
            placeholder="телефонски број"
          />
          {errors.user_tel && (
            <span className=" text-red-600 font-semibold">
              ова поле e задолжително
            </span>
          )}
        </div>
        <div className="py-3">
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            {...register("user_age", { required: true })}
            placeholder="колку години"
          />
          {errors.user_age && (
            <span className=" text-red-600 font-semibold">
              ова поле e задолжително
            </span>
          )}
        </div>
        <div className="py-3">
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("avatar_url", { required: true })}
            placeholder="линк од ваша фотографија"
          />
          {errors.avatar_url && (
            <span className=" text-red-600 font-semibold">
              ова поле e задолжително
            </span>
          )}
        </div>

        <div className="py-3 relative">
          <select
            defaultValue=""
            {...register("user_tipe", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              Одберете тип на профил
            </option>
            <option value="cook">готвач</option>
            <option value="gurman">гурман</option>
          </select>
          {errors.user_tipe && (
            <span className=" text-red-600 font-semibold">
              ова поле e задолжително
            </span>
          )}
          <div className="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div>
          <div className=" grid grid-cols-2 xl:grid-cols-3 gap-3 py-3">
            {checkedList.map(({ id, name, checked }) => (
              <label
                htmlFor={id.toString()}
                key={id}
                className={`${
                  checked ? " bg-OrangePrimary text-white" : ""
                } border rounded py-1 px-1 text-center w-full h-full`}
              >
                {name}
                <input
                  id={id.toString()}
                  checked={checked}
                  onChange={(e) => changeList(id, e.target.checked)}
                  className="hidden"
                  type="checkbox"
                  value={name}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="pt-3">
          <button className=" py-2 px-4 rounded w-full bg-OrangePrimary text-white">
            Заврши регитрација
          </button>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id);

    if (data) {
      if (data[0].user_tipe === "cook") {
        return {
          redirect: {
            destination: "/cook",
            permanent: false,
          },
        };
      } else {
        return {
          redirect: {
            destination: "/gurman",
            permanent: false,
          },
        };
      }
    }
  }

  return {
    props: {},
  };
};

export default User;
