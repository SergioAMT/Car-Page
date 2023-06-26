import React from 'react';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";

const AllComponents = async ({ searchParams }: HomeProps) => {

    // parametros iniciales de busqueda
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || "",
    });


    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


    return (
    <main className='overflow-hidden'>


        <div className='mt-12 padding-x padding-y max-width' id='discover'>
            <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                <p>Explore out cars you might like</p>
            </div>

            <div className='home__filters'>
                {/* SearchBar renderiza un componente donde se puede filtrar loas autos por marca y modelo
        para el caso de la marca se hace una consulta a la API */}
                <SearchBar />

                <div className='home__filter-container'>
                    {/* Filtros por tipo de combustible and year */}
                    <CustomFilter title='fuel' options={fuels} />
                    <CustomFilter title='year' options={yearsOfProduction} />
                </div>
            </div>

            {/* Mostrando una cantidad de automoviles al azar */}
            {!isDataEmpty ? (
                <section>
                    <div className='home__cars-wrapper'>
                        {allCars?.map((car) => (
                            <CarCard car={car} />
                        ))}
                    </div>

                    {/* Componente que renderiza un boton en primer lugar
                    y permite aumentar el rango de busqueda inicial sin filtro */}
                    <ShowMore
                        pageNumber={(searchParams.limit || 10) / 10}
                        isNext={(searchParams.limit || 10) > allCars.length}
                    />
                </section>
            ) : (
                <div className='home__error-container'>
                    <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                    <p>{allCars?.message}</p>
                </div>
            )}
        </div>
    </main>
);
}

export default AllComponents