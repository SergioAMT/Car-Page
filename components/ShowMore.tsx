"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '@/types';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore: React.FC<ShowMoreProps> = ({ pageNumber, isNext } ) => {

    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = pageNumber + 5;
        const newPathName = updateSearchParams('limit', `${newLimit}`);

        router.push(newPathName);
    }

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton
                    title='Show More'
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}

        </div>
    )
}

export default ShowMore