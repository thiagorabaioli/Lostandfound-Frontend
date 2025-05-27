import './styles.css';
import computerImg from '../../assets/computer.png';
import ProductCategory from '../ProductCategory';
import { UserAppDTO } from '../../models/userapp';


type Props = {
    userapp: UserAppDTO;
}

export default function ProductDetailsCard({userapp}: Props) {

    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={computerImg} alt="Computador" />
            </div>
            <div className="dsc-product-details-bottom">
                <h3>{userapp.id}</h3>
                <h4>{userapp.name}</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="dsc-category-container">
                    <ProductCategory name = "Com Valor" />
                    <ProductCategory name = "Sem valor"  />
                </div>
            </div>
        </div>
    );
}