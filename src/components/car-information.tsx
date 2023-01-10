const CarInformation = ({ car }: CarInformationProps) => {
  return (
    <div
      className={`mx-6 w-full p-12 first:rounded-t-lg last:rounded-b-lg`}
      style={{ background: car.color }}
    >
      <div className="mb-9">
        <img src={`/public/images/icon-${car.name}.svg`} alt="" />
      </div>
      <h1 className="uppercase font-bigShouldersDisplay text-title mb-6 text-[#F2F2F2]">
        {car.name}
      </h1>
      <p className="mb-6">{car.info}</p>
      <button className="bg-white text-[#006971] px-8 py-3 rounded-3xl">
        Learn More
      </button>
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
