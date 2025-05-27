import './styles.css';
import lostKeys from '../../assets/losts/objetoperdido.jpg';

export default function LostDetailsCard() {
  return (
    <div className="dsc-card dsc-mb20">
        <div className="dsc-product-details-top dsc-line-bottom">
          <img src={lostKeys} alt="Computador" />
        </div>
        <div className="dsc-product-details-bottom">
          <h4>Objeto Perdido</h4>
            <p>
            Descrição do objeto perdido Lorem, ipsum dolor sit amet consectetur admi similique, ad placeat doloribus. Quidem, adipisci fuga.
            </p>
            <p>
            Data em que foi encontrado: 
            <input 
              type="date" 
              onChange={(e) => console.log(e.target.value)} 
            />
            </p>
          <div className="dsc-category-container">
             
              <div className="dsc-category">
                  ComValor
              </div>
          </div>
        </div>
      </div>
  );
}