import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='flex flex-col gap-5 mx-3 my-4'>
            <h1 className='text-[#262626] font-medium text-2xl'>Explore Our Menu</h1>
            <p className='max-w-8/12 text-[#808080]'>  Choose from a diverse menu filled with fresh ingredients, authentic
          recipes, and culinary expertise. Every dish is crafted to create a
          delightful dining journey—one that satisfies your cravings and brings
          people together around the table.</p>

          <div className='flex justify-between items-center gap-[30px] text-center overflow-scroll md:overflow-hidden'>
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=> setCategory(prev=> prev === item.menu_name?"All":item.menu_name)} key={index}>
                            <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full duration-200 ${category===item.menu_name? "border-4 border-[#ee6242] p-0.5":""}`} src={item.menu_image} alt="" />
                            <p className='mt-3 text-[#747474] text-xl cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })}
          </div>
          <hr className='bg-[#e2e2e2] h-0.5' />
        </div>
    );
};

export default ExploreMenu;