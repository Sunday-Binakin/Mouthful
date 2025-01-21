import React from "react";
import pasta from "../assets/food/pasta.jpg";
import greens from "../assets/food/greens.jpg";
import salad from "../assets/food/salad.jpg";
import yummy from "../assets/food/yummy.jpg";
// import CategoryComponent from './layout/CategoryComponent'
import CategoryButton from "../components/common/CategoryButton";

const foodItems = [
  {
    id: 1,
    image: pasta,
    name: "CHICKEN WINGS",
    category: "N",
  },

  {
    id: 2,
    image: yummy,
    name: "CAESAR SALAD",
    category: "V",
  },
  {
    id: 3,
    image: salad,
    name: "CAESAR SALAD",
    category: "V",
  },
  {
    id: 4,
    image: greens,
    name: "SUMMER SALAD",
    category: "N",
  },
  {
    id: 2,
    image: yummy,
    name: "CAESAR SALAD",
    category: "V",
  },
  {
    id: 3,
    image: salad,
    name: "CAESAR SALAD",
    category: "V",
  },
  {
    id: 4,
    image: greens,
    name: "SUMMER SALAD",
    category: "N",
  },
  {
    id: 4,
    image: greens,
    name: "SUMMER SALAD",
    category: "N",
  },
  {
    id: 2,
    image: yummy,
    name: "CAESAR SALAD",
    category: "V",
  },
  {
    id: 3,
    image: salad,
    name: "CAESAR SALAD",
    category: "V",
  },
  {
    id: 4,
    image: greens,
    name: "SUMMER SALAD",
    category: "N",
  },
  {
    id: 4,
    image: greens,
    name: "SUMMER SALAD",
    category: "N",
  },
];

const HomeComponent = () => {
  return (
    <>
      <div className="md:w-[60%]  md:mt-4 md:mr-4 md:rounded-md">
        <div className="md:flex md:flex-wrap md:justify-between md:mt-6 md:px-4 md:py-4">
          {foodItems.map((item) => (
            <div key={item.id} className="md:w-[23%] md:mb-4 md:rounded-md">
            {/* <div key={item.id} className="md:w-[23%] md:mb-4 md:rounded-md"> */}
              <img
                src={item.image}
                className="md:w-full md:h-[5.4rem] md:rounded-t-md object-cover"
                alt={item.name.toLowerCase()}
              />
              <div className="md:flex md:flex-col md:h-[3rem] md:mb-2 bg-[rgb(216,230,233)] md:rounded-md">
                <p className="md:flex md:justify-center md:m-1 md:text-[0.8rem] font-semibold">
                  {item.name}
                </p>
                <div className="md:flex md:justify-around md:mb-2 md:rounded-lg">
                  <p className="md:text-[0.8rem] md:font-semibold md:ml-2">
                  {/* <p className="md:text-xs md:font-semibold md:ml-2"> */}
                    CATEGORY:
                  </p>
                  <div className="md:h-[1.2rem] md:w-[1.2rem]  md:rounded-[50%] md:bg-[#E1B284] text-black font-semibold md:flex md:items-center md:justify-center">
                    {item.category}
                  </div>
                </div>
              </div>
                {/* <div className="md:flex md:flex-col md:mb-2 bg-[rgb(216,230,233)] md:rounded-md">
                  <p className="md:flex md:justify-center md:m-2 font-semibold">
                    {item.name}
                  </p>
                  <div className="md:flex md:justify-around md:mb-2 md:rounded-lg">
                    <p className="md:text-xs md:font-semibold md:ml-2">
                      CATEGORY:
                    </p>
                    <div className="md:h-[1.2rem] md:w-[1.2rem] md:rounded-[50%] md:bg-[#E1B284] text-black font-semibold md:flex md:items-center md:justify-center">
                      {item.category}
                    </div>
                  </div>
                </div> */}
            </div>
          ))}
        </div>
        {/* <CategoryComponent/> */}
        <div className="md:flex md:justify-around md:py-6 md:-mt-10 md:bg-[#D8E6E9] md:h-20">
          <CategoryButton name={"STARTER"} />
          <CategoryButton name={"MAIN COURSE"} />
          <CategoryButton name={"DRINKS"} />
          <CategoryButton name={"DESSERT"} />
        </div>

        
      </div>
      <div className="h-[84vh] w-[0.1px] mx-4 border-r border border-gray"></div>
      <div className="w-[25%]   mb-6 mt-4 mr-4 rounded-md ">
        <div className="md:flex  md:font-semibold md:justify-between md:mx-6">
          <h1 className="md:text-2xl">ORDER #</h1>
          <h1 className="md:text-2xl">12345678</h1>
        </div>

        <div className="md:flex md:flex-col">
  {[{ name: 'CHICKEN WINGS', price: '$20', quantity: 1, imgSrc: salad },
    { name: 'CAESAR SALAD', price: '$20', quantity: 1, imgSrc: greens },
    { name: 'SUMMER SALAD', price: '$20', quantity: 1, imgSrc: yummy }].map((item, index) => (
    <div key={index} className="md:bg-[rgb(216,230,233)] md:flex md:justify-around h-[6rem] md:mt-3 md:mx-6 md:rounded-lg md:shadow-md">
      <div className="md:w-[6rem] md:h-[4rem] md:my-4">
        <img
          src={item.imgSrc}
          alt={item.name}
          className="md:mx-1 md:w-[6rem] md:h-[4rem] md:object-cover md:rounded-md"
        />
      </div>
      <div className="md:flex  md:flex-col md:text-[1rem] md:mt-3 md:font-semibold">
        <p>{item.name}</p>
        <p className="md:mx-2 md:text-2xl">{item.price}</p>
      </div>
      <div className="md:flex md:flex-col md:text-[1rem] md:mt-3 md:font-semibold">
        <p>QUANTITY</p>
        <p className="md:text-2xl md:flex md:justify-center">{item.quantity}</p>
      </div>
    </div>
  ))}
</div>
        <div className="w-4/3 h-[12rem]  mx-6 mt-3 border-2 border-dashed border-gray-400 rounded-lg">
          <div className="flex justify-between mx-4 mt-2 font-semibold text-lg">
            <p>SUBTOTAL</p>
            <p>GHC 35.00</p>
          </div>
          <div className="flex justify-between mx-4 mt-2 font-semibold text-lg">
            <p>
              SERVICE CHARGE <span className="font-bold">10%</span>
            </p>
            <p>GHC 3.50</p>
          </div>
          <div className="md:border-[0.9px] md:border-dashed md:mt-1 md:border-gray-400"></div>
          <div className="md:flex md:justify-between md:text-3xl md:mx-4 md:mt-2 md:font-bold">
            <p>TOTAL</p>
            <p>GHC38.50</p>
          </div>
          <div className="flex justify-between mx-6 mt-3">
            <button className="bg-red-400 md:h-[3rem] md:w-[7rem] md:text-[0.8rem] md:font-bold md:rounded-md">
              CANCEL ORDER
            </button>
            <button className="bg-[#B1CED4] md:h-[3rem] md:w-[7rem] md:text-[1rem] md:font-semibold md:rounded-md">
              SEND ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
