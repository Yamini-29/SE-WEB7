import React, { useEffect, useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductsItem from '../components/ProductsItem';
import VideoGallery from '../components/VideoGallery'; // Ensure correct path
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Ensure correct path
import { SidebarWithBurgerMenu } from '../components/Sidebar';

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState(products);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');
    const [loading, setLoading] = useState(false);

    // Toggle Category Selection
    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory((prev) =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    // Toggle Subcategory Selection
    const toggleSubcategory = (e) => {
        const value = e.target.value;
        setSubCategory((prev) =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    // Apply Filters
    const applyFilter = () => {
        setLoading(true);
        setTimeout(() => { // Simulate loading
            let filtered = products.slice();
            if (category.length > 0) filtered = filtered.filter(item => category.includes(item.category));
            if (subCategory.length > 0) filtered = filtered.filter(item => subCategory.includes(item.subCategory));
            setFilterProducts(filtered);
            setLoading(false);
        }, 500); // Simulating a delay
    };

    // Apply Filters When Category, Subcategory, or Products Change
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, products]);

    return (
        <div className="homepage flex flex-col min-h-screen">
            {/* Sidebar */}
            <div className="w-64">
                <SidebarWithBurgerMenu />
            </div>

            <div className="p-6 pl-6 bg-gray-900 min-h-screen mr-20 ml-40">
                {/* Collections Title */}
                <h1 className="text-5xl font-bold text-gray-100 text-center mb-8">
                    Collections
                </h1>

                {/* Tutorials Section */}


                <div className="grid grid-cols-3 gap-6 mt-4 ml-4">
                    <Link to="/simulation" className='relative cursor-pointer transform transition duration-300 hover:scale-105'>
                        <img
                            src="/src/assets/tarkashi.jpg"
                            alt="Tarkashi"
                            className="w-full h-36 object-cover rounded-lg shadow-md"
                        />
                        <h3 className="mt-2 text-gray-300 text-center">Tarkashi Wood Carving</h3>
                    </Link>

                    <Link to="/thattu" className="cursor-pointer transform transition duration-300 hover:scale-105">
                        <img
                            src="/src/assets/tj_thattu.jpeg"
                            alt="Model 2"
                            className="w-full h-36 object-cover rounded-lg shadow-md"
                        />
                        <h3 className="mt-2 text-gray-300 text-center">Thanjavur Thattu</h3>
                    </Link>

                    <Link to="/kalam1" className="cursor-pointer transform transition duration-300 hover:scale-105">
                        <img
                            src="/src/assets/kalamkari_tut.jpg"
                            alt="Kalamkari"
                            className="w-full h-36 object-cover rounded-lg shadow-md"
                        />
                        <h3 className="mt-2 text-gray-300 text-center">Kalmakari</h3>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Collection;