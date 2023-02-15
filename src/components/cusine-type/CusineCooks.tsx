import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface CusinesTypes {
  id: number;
  name: string;
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
  { id: 11, name: "Нискокалорична храна" },
  { id: 12, name: "Мексиканска кујна" },
];

const CusineCooks = () => {
  const [selectedCusine, setSelectedCusine] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!selectedCusine) {
      setSelectedCusine("Здрава храна");
    }
  }, [selectedCusine]);

  const handleClick = (name: string) => {
    setSelectedCusine(name);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        cusines: name,
      },
    });
  };

  return (
    <>
      <div className="w-10/12 mx-auto pb-4">
        <h3 className="text-lg text-blac">Вид на кујна:</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 w-11/12 mx-auto">
        {cusines.map((cusine) => (
          <button
            className={`text-sm font-semibold mb-2 rounded-lg py-1 px-1 truncate  text-ellipsis ${
              selectedCusine === cusine.name
                ? "bg-OrangeSecondary text-white"
                : "bg-white text-black border border-OrangePrimary shadow-lg"
            }`}
            key={cusine.id}
            onClick={() => handleClick(cusine.name)}
          >
            {cusine.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default CusineCooks;
