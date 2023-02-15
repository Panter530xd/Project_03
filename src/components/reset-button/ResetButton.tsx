import { useRouter } from "next/router";

const ResetButton = () => {
  const router = useRouter();

  const handleReset = () => {
    router.push({ pathname: router.pathname });
  };

  return (
    <div>
      {router.query.cuisine ||
      router.query.selectedDate ||
      router.query.address ||
      router.query.available ||
      router.query.price ||
      router.query.allergens ||
      router.query.rating ||
      router.query.delivery ? (
        <button
          className="text-white text-center  bg-OrangeSecondary rounded-[20px] px-4 py-1"
          onClick={handleReset}
        >
          Ресетирај Филтри
        </button>
      ) : null}
    </div>
  );
};

export default ResetButton;
