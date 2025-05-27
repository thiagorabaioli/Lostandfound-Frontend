import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { UserAppDTO } from '../../models/userapp';

const  userApp: UserAppDTO = {
    id: 1,
    name: "Isaura Silva",
    email: "isaurasilva@gmail.com",
    porNumber: "0242526",
    birthDate: "1990-01-01"
}
export default function ProductDetails() {

    return (
        <>
        <HeaderClient />
        <main>
          <section id="product-details-section" className="dsc-container">
            <ProductDetailsCard userapp = {userApp} />
            <div className="dsc-btn-page-container">
              <ButtonPrimary />
              <ButtonInverse />
            </div>
          </section>
        </main>
      </>
    );
}
