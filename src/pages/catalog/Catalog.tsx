import {Card} from "../../components/card/Card";
import React from "react";
import {ICard} from "../../components/card/ICard";
import "./Catalog.scss";
import {Navbar} from "../../components/shared/navbar/Navbar";
import {Filter} from "../../components/shared/filter/Filter";
import {Paginate} from "../../components/shared/paginate/Paginate";

export const Catalog = () => {

    const card: ICard = {
        id: 1,
        currency: "$",
        image: "https://www.deruedas.com.ar/images/autos/Citroen-C4-Lounge-2015/559/559126_1_im.jpg?edit=7",
        make: "Citroen",
        model: "C4",
        version: "Lounge",
        year: 2015,
        km: 59500,
        price: 3100000,
        location: "Buenos Aires, Argentina"
    }

    return <div>
        <Navbar/>
        <div className="catalog">
            <Filter/>
            <div className={"catalog__publications"}>
                <Card location={card.location} model={card.model} make={card.make} year={card.year} price={card.price} km={card.km} version={card.version} currency={card.currency} id={card.id} image={card.image}/>
                <Card location={card.location} model={card.model} make={card.make} year={card.year} price={card.price} km={card.km} version={card.version} currency={card.currency} id={card.id} image={card.image}/>
                <Card location={card.location} model={card.model} make={card.make} year={card.year} price={card.price} km={card.km} version={card.version} currency={card.currency} id={card.id} image={card.image}/>
                <Card location={card.location} model={card.model} make={card.make} year={card.year} price={card.price} km={card.km} version={card.version} currency={card.currency} id={card.id} image={card.image}/>
            </div>
            <Paginate/>
        </div>
    </div>
}