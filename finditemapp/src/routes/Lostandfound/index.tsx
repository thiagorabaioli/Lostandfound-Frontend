import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import LostDetailsCard from '../../components/LostDetailsCard';

export default function Lostandfound() {

    return (
        <>
        <HeaderClient />
        <main>
          <section id="product-details-section" className="dsc-container">
            <LostDetailsCard />
            <div className="dsc-btn-page-container">
              <ButtonPrimary />
              <ButtonInverse />
            </div>
          </section>
        </main>
      </>
    );
}
