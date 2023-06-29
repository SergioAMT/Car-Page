import { fetchCars } from '@/utils';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CarCard from './CarCard';

const Trending: React.FC = () => {
    const [cars, setCars] = useState([]);
    const params = useSearchParams();
    const manufacturer = params?.get('manufacturer');
    const year = params?.get('year');
    const fuel = params?.get('fuel');
    const limit = Number(params?.get('limit'));
    const model = params?.get('model');


    const getCars = async (): Promise<void> => {
        // parametros iniciales de busqueda
        const allCars = await fetchCars({
            manufacturer: manufacturer || "",
            year: 2022,
            fuel: fuel || "",
            limit: 4,
            model: model || "",
            skip: 0
        });

        if (allCars?.length) {
            setCars(allCars);
        }

    }
    console.log(cars)

    useEffect(() => {
        getCars();
    }, [params]);

    return (
        <div className='mb-32'>
            <div className='flex-1 pt-20 padding-x flex flex-col items-center' >
                <h1 className='hero__title'>
                    Trending Cars
                </h1>


                <p className='hero__subtitle'>
                    Explore the most popular cars in rent
                </p>
            </div>
            <section>
                <div className='home__cars-wrapper'>
                    {cars?.map((car, index) => (
                        <CarCard key={index} car={car} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Trending