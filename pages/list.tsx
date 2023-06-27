import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import { Filters } from '@/components'


const List: NextPageWithLayout = () => {
    const [model, setModel] = useState('');
    return (

        <>
            {/* <select name="cars" id="cars" 
            onChange={(e) => {
                setModel(e.target.value);
            }}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select> */}
            <Filters searchParams={{ model: '', manufacturer: '', fuel: ''}} />X
        </>
    )
}


List.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>{page}</Layout>
    )
}

export default List