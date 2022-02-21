import { Link } from "react-router-dom";
import { HeaderStyled } from "./styled/Header.styled";


export default function Header(){
    return (
        <HeaderStyled>
        <ul id="menu">
            <li>
                <Link to={'/create-task'}>Create</Link>
            </li>
        </ul>
        </HeaderStyled>
    )
}