const Experience = () => {
  return (
    <div className="py-[20px] text-black">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center py-[20px] font-[800]">
        Experience
      </h1>
      <div className="grid grid-cols-1 ">
        <div className="company-name-time flex justify-evenly pb-[10px] p-[10px]">
          <div>
            <p className="font-bold pb-[4px]">Veltris</p>
            <p>FullStack Developer</p>
          </div>
          <p>Sept 2022 - Present</p>
        </div>
        <div className="company-name-time flex justify-evenly p-[10px]">
          <div>
            <p className="font-bold pb-[4px]">Veltris</p>
            <p>Trainee Engineer</p>
          </div>
          <p>Feb 2022 - Sept 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
