function EditorPickSection() {
  return (
    <div className="w-full bg-[#FAFAFA] py-20">

      <div className="max-w-6xl mx-auto px-4 text-center font-montserrat">
        <h3 className="text-[#252B42] font-bold text-2xl">EDITOR’S PICK</h3>
        <p className="text-[#737373] mt-1">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div
        className="
          max-w-6xl mx-auto px-4 py-10 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-4
        "
      >
        <div className="relative h-[300px] sm:h-[350px] lg:h-[500px] overflow-hidden">
          <img src= "/images/home/men.jpg" 
          alt="men" 
          className="w-full h-full object-cover" />
          <button className="absolute bottom-5 left-5 bg-white px-4 py-2 w-[150px] text-[#252B42] shadow font-semibold">
            MEN
          </button>
        </div>

        <div className="relative h-[300px] sm:h-[350px] lg:h-[500px] overflow-hidden">
          <img src= "/images/home/women.jpg" 
          alt="women" 
          className="w-full h-full object-cover" />
          <button className="absolute bottom-5 left-5 bg-white px-4 py-2 text-[#252B42] shadow font-semibold">
            WOMEN
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative h-[300px] lg:h-[242px] overflow-hidden">
            <img src= "/images/home/accessories.jpg" 
            alt="accessories" 
            className="w-full h-full object-cover object-[center_20%]" />
            <button className="absolute bottom-5 left-5 bg-white px-4 py-2 text-[#252B42] shadow font-semibold">
              ACCESSORIES
            </button>
          </div>

          <div className="relative h-[300px] lg:h-[242px] overflow-hidden">
            <img src= "/images/home/kids.jpg" 
            alt="kids" 
            className="w-full h-full object-cover object-[center_10%]" />
            <button className="absolute bottom-5 left-5 bg-white px-4 py-2 text-[#252B42] shadow font-semibold">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPickSection;