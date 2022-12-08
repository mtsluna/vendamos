import "./Filter.scss";
import React from "react";
import Select from "react-select";

export const Filter = () => {

    const options = [
        {value: "Relevancia", label: "Relevancia"},
        {value: "Menor precio", label: "Menor precio"},
        {value: "Mayor precio", label: "Mayor precio"},
        {value: "Más antiguos", label: "Más antiguos"},
        {value: "Más recientes", label: "Más recientes"},
        {value: "Menos km", label: "Menos km"},
        {value: "Más km", label: "Más km"},
    ]

    return <div className={"filter"}>
        <div className={"filter__box"}>

        </div>
        <div className={"filter__footer"}>
            <div className={"filter__footer__results"}>
                5 Resultados
            </div>
            <div className={"filter__footer__order"}>
                Ordenar por:
                <Select
                    placeholder={"Relevancia"}
                    styles={{
                        dropdownIndicator: (baseStyles) => ({
                            ...baseStyles,
                            padding: "8px 0 8px 8px"
                        }),
                        control: (baseStyles) => ({
                            ...baseStyles,
                            borderStyle: "none",
                            boxShadow: "none",
                        })
                    }}
                    isClearable={false}
                    isSearchable={false}
                    options={options}
                />
            </div>
        </div>
    </div>
}