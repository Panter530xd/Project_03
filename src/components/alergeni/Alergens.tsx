import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface AlergensTypes {
  id: number;
  name: string;
}

const allergens: AlergensTypes[] = [
  { id: 1, name: "Јатки" },
  { id: 2, name: "Риба" },
  { id: 3, name: "Лактоза" },
  { id: 4, name: "Глутен" },
  { id: 5, name: "Соја" },
  { id: 6, name: "Чоколадо" },
  { id: 7, name: "Пченица" },
  { id: 8, name: "Мед" },
  { id: 9, name: "Морско" },
];

const Alergens = () => {
  const [selectedAlergen, setSelectedAlergen] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!selectedAlergen) {
      setSelectedAlergen("Риба");
    }
  }, [selectedAlergen]);

  const handleClick = (name: string) => {
    setSelectedAlergen(name);
    router.push({
      pathname: "/menu",
      query: {
        ...router.query,
        allergens: name,
      },
    });
  };

  return (
    <>
      <div className="w-9/12 mx-auto pb-4">
        <h3 className="text-lg text-blac">Алергени:</h3>
      </div>

      <div className="grid grid-cols-3 gap-2 w-11/12 mx-auto">
        {allergens.map((allergen) => (
          <button
            className={`text-base font-semibold mb-2 rounded-lg py-1 ${
              selectedAlergen === allergen.name
                ? "bg-OrangeSecondary text-white"
                : "bg-white text-OrangeSecondary"
            }`}
            key={allergen.id}
            onClick={() => handleClick(allergen.name)}
          >
            {allergen.name}
          </button>
        ))}
      </div>
      <div className="py-5">
        <hr className="w-11/12 mx-auto bottom-2 border-[#808080]" />
      </div>
    </>
  );
};

export default Alergens;
