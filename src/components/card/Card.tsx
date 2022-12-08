import "./Card.scss";
import {ICard} from "./ICard";

export const Card = (props: ICard) => {

    const currencyFormat = (currency: string, price: number) => {
        return `${currency} ${price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
    }

    const kmFormat = (km: number) => {
        return km.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return <div className={"card"}>
        <div className={"card__badge"}>
            <div className={"card__badge__text"}>
                NUEVO
            </div>
        </div>
        <img alt={`${props.make} ${props.model} ${props.version}`} className={"card__image"} src={props.image}/>
        <div className={"card__information"}>
            <div className={"card__information__line"}>
                <div className={"card__information__title"}>
                    {props.make} {props.model}
                </div>
                <div className={"card__information__title card__information__price"}>
                    {currencyFormat(props.currency, props.price)}
                </div>
            </div>
            <div className={"card__information__line"}>
                <div className={"card__information__subtitle"}>
                    {props.version}
                </div>
                <div className={"card__information__subtitle"}>
                    {kmFormat(props.km)} km - {props.year}
                </div>
            </div>
            <div className={"card__information__line"}>
                <div></div>
                <div className={"card__information__subtitle"}>
                    {props.location}
                </div>
            </div>
        </div>
    </div>
}