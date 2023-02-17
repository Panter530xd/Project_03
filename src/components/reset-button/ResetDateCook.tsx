import { useRouter } from "next/router";

const ResetDateCook = () => {
  const router = useRouter();

  const handleReset = () => {
    router.push({
      pathname: `${router.query.id}`,
    });
  };

  return (
    <div>
      {router.query.selectedDate && (
        <button
          className="text-white text-center bg-OrangeSecondary rounded-[20px] px-4 py-2"
          onClick={handleReset}
        >
          Ресетирај Филтри
        </button>
      )}
    </div>
  );
};

export default ResetDateCook;
