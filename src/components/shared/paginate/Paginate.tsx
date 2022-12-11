import "./Paginate.scss";
import {MdNavigateBefore, MdNavigateNext, MdOutlineFirstPage, MdOutlineLastPage} from "react-icons/md";

export const Paginate = () => {
    return <div className={"paginate"}>
        <div className={"paginate__button"}>
            <MdOutlineFirstPage/>
        </div>
        <div className={"paginate__button"}>
            <MdNavigateBefore/>
        </div>
        <div className={"paginate__counter"}>
            <div>
                1
            </div>
            <div>
                de
            </div>
            <div>
                2
            </div>
        </div>
        <div className={"paginate__button"}>
            <MdNavigateNext/>
        </div>
        <div className={"paginate__button"}>
            <MdOutlineLastPage/>
        </div>
    </div>
}