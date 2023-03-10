import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Category_result = () => {
    const [products, setProducts] = useState([]);
    const {cate_name} = useParams();
    // console.log("cate_name: " + cate_name);

    useEffect(()=> {
        fetchData();
    },[cate_name]);

    const fetchData = async() => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate_name}`);
        const data = await api.json();
        setProducts(data.meals);
        console.log(data.meals);
    }

    return (
        <div>
           <ul className='products_list flex flex-wrap justify-center m-[-5px]'>
            {
                products.map(product => {
                    return(
                        <li key={product.idMeal} className="w-[50%] md:w-[33.33%] lg:w-[33.33%] box-border px-[5px] md:px-[10px] mb-7 text-center">
                            <Link to={'/detail/' + product.idMeal}>
                                <img src={product.strMealThumb} className="w-[100%] rounded hover:opacity-70"/>
                                <h4 className='mt-2'>{product.strMeal}</h4>
                            </Link>
                        </li>
                    )
                })
            }
           </ul>
        </div>
    )
}

export default Category_result