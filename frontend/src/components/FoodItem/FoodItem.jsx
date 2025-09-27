import React, { useContext} from "react";
import { assets } from "../../assets/assets";
import StoreContext from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems,  addToCart,  removeFromCart} = useContext(StoreContext)

  return (
    <div className="w-[100%] m-auto rounded-2xl  shadow-2xl shadow-[#00000015] animate__animated animate__fadeIn">
      <div className="relative">
        <img className="w-[100%] rounded-t-2xl" src={image} alt="" />
        {!cartItems[id] ? (
          <img 
          className="absolute w-8 bottom-4 right-4 cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className=" absolute flex justify-center items-center gap-4 p-1 rounded-3xl bg-white bottom-4 right-4">
            <img className="cursor-pointer" onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img className="cursor-pointer" onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      {/* item info */}
      <div className="p-5 ">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-medium">{name}</p>
          <img className="w-17" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-xs font-medium text-[#676767] ">{description}</p>
        <p className="text-2xl my-2 font-medium text-[#ee6242]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
