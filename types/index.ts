import { MouseEventHandler } from "react";

// Props del boton customizable, se le pasa un titulo obligatorio
//un containstyles que puede ser opcional y de tipo string
//una funcion handleclick que puede ser opcional 
// el tipo de boton que puede ser button o submit opcional
// textStyles opcional, righticon opcional ambas de tipo string
// isdisable opcional y de tipo booleano
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
}

//Interfaz que recibe dos parametros
//manufacture que es tipo string y set manufacture que es una funcion
// que recibe un parametro de tipo string y no devuelve nada VOID
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CardProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
// Filters props espera propiedades desde la api
// El tipo de prop a recibir viene dado por esta misma
export interface FilterProps {
    manufacturer: string,
    year: number
    fuel: string
    limit: number
    model: string
}

export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFiltersProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export interface HomeProps {
    searchParams: FilterProps;
}