const CarInformation = ({ car }: CarInformationProps) => {
  return (
    <div
      className="w-full sm:w-[19.25rem] p-12 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-tr-none sm:first:rounded-l-lg sm:last:rounded-bl-none sm:last:rounded-r-lg"
      style={{ background: car.color, color: car.color }}
    >
      <div className="mb-9">
        <img
          src={`/images/icon-${car.name.toLowerCase()}.svg`}
          aria-hidden="true"
        />
      </div>
      <h2 className="uppercase font-bigShouldersDisplay text-title mb-6 text-[#F2F2F2]">
        {car.name}
      </h2>
      <p className="mb-6 sm:mb-[5.25rem] text-white">{car.info}</p>
      <a
        href="#"
        className="bg-white px-8 text-inherit py-3 rounded-3xl hover:bg-transparent hover:text-white border-2 border-white"
      >
        Learn More
      </a>
    </div>
  );
};

type CarInformationProps = {
  car: {
    name: string;
    info: string;
    color: string;
  };
};

export default CarInformation;
