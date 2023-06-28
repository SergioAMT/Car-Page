import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import SearchBar from './SearchBar'
import CustomFilter from './CustomFilter'
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils';
import CarCard from './CarCard';
import ShowMore from './ShowMore';
import { fuels, yearsOfProduction } from '@/constants';


const Filters: React.FC = () => {
    const [cars, setCars] = useState([]);
    const [onSkit, setOnSkit] = useState(0)
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
            limit: limit || 10,
            model: model || "",
            skip: 0
        });

        if (allCars?.length) {
            setCars(allCars);
        }

    }

    useEffect(() => {
        getCars();
    }, [params]);

    const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

    return (
        <main className='overflow-hidden'>

            <div className='mt-12 mb-4 padding-x padding-y max-width'>
                <div className='home__text-container'>
                    <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                    <p>Explore out cars you might like</p>
                </div>


                <div className='home__filter-container'>
                    <SearchBar />
                    {/* Filtros por tipo de combustible and year */}
                    <CustomFilter title='fuel' options={fuels} />
                    <CustomFilter title='year' options={yearsOfProduction} />
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className='home__cars-wrapper'>
                            {cars?.map((car, index) => (
                                <CarCard key={index} car={car} />
                            ))}
                        </div>


                        <ShowMore
                            pageNumber={(limit || 10) / 10}
                            isNext={(limit || 10) > cars.length}
                        />
                    </section>
                ) : (
                    <div className='home__error-container'>
                        <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Filters