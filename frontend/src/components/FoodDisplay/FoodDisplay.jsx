import { useContext } from 'react';
import StoreContext from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

    return (
        <div className='mt-[30px] mx-3'>
            <h2 className='text-2xl font-bold'>Top dishes near you</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {food_list.map((item, index)=>{
                    return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;