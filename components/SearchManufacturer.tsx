"use client";
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, setmanufacturer }: SearchManufacturerProps) => {

  const [query, setquery] = useState('');

  const filteredManufacturers = query === ""
    ? manufacturers
    : manufacturers.filter((item) => (
      item
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setmanufacturer}>
        <div className='relative w-full'>
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Volkswagen...'
            displayValue={(item: string) => item}
            onChange={(e) => setquery(e.target.value)} // Update the search query when the input changes
          />


          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setquery('')}
          >
            <Combobox.Options
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option
                ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                    value={item}>
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer