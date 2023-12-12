const TitleAndDescription = ({ title, description }) => {
  return (
    <div className="text-center my-5">
      <h5 className="uppercase text-base md:text-lg font-semibold text-colorPrimary">
        {title}
      </h5>
      <h1 className="w-11/12 text-xl md:text-4xl font-bold mt-1 md:mt-3 mb-10 text-center">
        {description}
      </h1>
    </div>
  );
};

export default TitleAndDescription;
