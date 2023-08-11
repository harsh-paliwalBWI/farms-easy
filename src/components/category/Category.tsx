import React from "react";
import CategoryAvl from "./categoryAvl/CategoryAvl";
import CategoryCard from "./categoryCard/CategoryCard";
import img from "../../images/slider-bg-vert-1 1.svg";
import bottomImg from "../../images/slider-bg-vert-1 2.svg";
import Image from "next/legacy/image";

const Category = async () => {
  // const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <div className="bg-category-bg bg-cover bg-no-repeat md:py-[100px] py-[40px] sm:px-[3.5%] px-[7%] relative   ">
      <div className="text-center">
        <div className="text-[#588F27] font-bold md:text-lg sm:text-base text-xs sm:mb-[10px] mb-[5px]">
          What we offer for you
        </div>
        <div className="font-bold md:text-3xl sm:text-2xl text-xl md:pb-[30px] sm:pb-[30px]  text-[#253D4E]">
          Explores by Category
        </div>
        <CategoryAvl/>
      </div>
      <div className="absolute top-0 left-0   ">
        <Image
          src={img}
          alt=""
          width={1000}
          height={1000}
          style={{ width: "100vw", objectFit: "cover" }}
        />
      </div>
      <div className="absolute bottom-0 left-0  ">
        <Image
          src={bottomImg}
          alt=""
          width={1000}
          height={1000}
          style={{ width: "100vw", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Category;
