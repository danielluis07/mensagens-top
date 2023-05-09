import { BsChatDots } from "react-icons/bs";

const EmptyState = () => {
  return (
    <div
      className="
          px-4 
          py-10 
          sm:px-6 
          lg:px-8 
          lg:py-6 
          h-full 
          flex 
          justify-center 
          items-center 
          bg-gray-100
        ">
      <div className="text-center items-center flex flex-col gap-y-8">
        <h3 className="mt-2 text-2xl font-bold text-gray-400">
          Começe ou continue uma conversa
        </h3>
        <BsChatDots className="text-5xl font-bold text-gray-400" />
      </div>
    </div>
  );
};

export default EmptyState;
