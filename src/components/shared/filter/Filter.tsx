import "./Filter.scss";
import React, {useState} from "react";
import Select from "react-select";
import {MdAdd, MdClose} from "react-icons/md";
import ReactModal from 'react-modal';

export const Filter = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([
        {category: "make", value: "Citroen"},
        {category: "model", value: "C4"},
        {category: "transmission", value: "Automatica"},
        {category: "year", value: "2016"},
        {category: "year", value: "2015"},
        {category: "year", value: "2014"},
    ]);

    const options = [
        {value: "Relevancia", label: "Relevancia"},
        {value: "Menor precio", label: "Menor precio"},
        {value: "Mayor precio", label: "Mayor precio"},
        {value: "Más antiguos", label: "Más antiguos"},
        {value: "Más recientes", label: "Más recientes"},
        {value: "Menos km", label: "Menos km"},
        {value: "Más km", label: "Más km"},
    ]

    const removeFilter = (elem: any) => {
        const newState = selectedFilters.filter(value => value !== elem);
        console.log(elem)
        setSelectedFilters(newState);
    }

    const makeFilterBadges = () => {
        return selectedFilters.map((filter, index) => {
            return (
                <button onClick={() => removeFilter(filter)} key={`${filter.category}.${filter.category}.${index}`} className={"filter__box__badge"}>
                    <div>
                        { filter.value }
                    </div>
                    <div className={"filter__box__badge__remove"}>
                        <MdClose/>
                    </div>
                </button>
            )
        })
    }

    return <div className={"filter"}>
        <div>
            Tu busqueda
        </div>
        <div className={"filter__box"}>
            <button className={"filter__box__badge"}>
                <div>
                    Filtros
                </div>
                <div onClick={() => {
                    setModalIsOpen(true)
                }} className={"filter__box__badge__remove"}>
                    <MdAdd/>
                </div>
            </button>
            { makeFilterBadges() }
        </div>
        <ReactModal
            isOpen={modalIsOpen}
            style={{
                content: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }
            }}
        >
            <button onClick={() => setModalIsOpen(false)}>Close modal</button>
        </ReactModal>
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