const Experience = () => {
  return (
    <div className="py-[20px]">
      <h1
        className="text-3xl text-center py-[20px]"
        style={{ fontWeight: "bolder" }}
      >
        Experience
      </h1>
      <div className="grid grid-cols-1 ">
        <div className="company-name-time flex justify-evenly pb-[20px]">
          <div>
            <p className="font-bold pb-[5px]">Veltris</p>
            <p>FullStack Developer</p>
          </div>
          <p>Sept 2022 - Present</p>
        </div>
        <div className="company-name-time flex justify-evenly">
          <div>
            <p className="font-bold pb-[5px]">Veltris</p>
            <p>Trainee Engineer</p>
          </div>
          <p>Feb 2022 - Sept 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
