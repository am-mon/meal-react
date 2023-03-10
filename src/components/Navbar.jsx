import React, { useEffect, useState } from 'react'
import {GiKnifeFork} from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const [selectCategory, setSelectCategory] = useState('Beef');
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
        const data = await api.json();
        setCategories(data.meals);
        console.log(data.meals);
    }


    
    useEffect(() => {
    //   console.log("UseEffect: " + selectCategory); 
      navigate('/category/' + selectCategory);
    },[selectCategory]);

    const onChange = (e) =>  {
        setSelectCategory(e.target.value);
    }
    

    return (
        <div className='p-4 mb-10 md:mb-20 bg-amber-300'>
            <div className='w-[100%] md:w-[100%] lg:w-[1024px] mx-auto flex items-center justify-between '>
                <div>
                    <Link to='/'>
                        <GiKnifeFork className='text-5xl'/>
                    </Link>
                </div>
                <div>
                    <form>
                        <select 
                        name="selectCategory" value={selectCategory} 
                        onChange={onChange}
                        className='outline-0 py-2 px-3 rounded appearance-none min-w-[70%] md:min-w-[220px]'
                        >
                            {
                                categories.map(cate => {
                                    return(
                                        <option value={cate.strCategory}>{cate.strCategory}</option>
                                    )
                                })
                            }
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Navbar