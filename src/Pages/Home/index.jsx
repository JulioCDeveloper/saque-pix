import { useEffect, useState } from "react";
import logo from '../../assets/logo-software.jpeg';
import './App.css';

function HomePage() {
    const [messages, setMessages] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [showPixButton, setShowPixButton] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [logoPosition, setLogoPosition] = useState({ top: 0 });
    // const [extraMessages, setExtraMessages] = useState([]);
    // const [extraMessageCount, setExtraMessageCount] = useState(0);
  
    useEffect(() => {
      // Animação dos três pontos por um tempo
      const loadingAnimation = setTimeout(() => {
        setShowLoading(false);
      }, 3000); // 3 segundos
  
      // Mensagens iniciais após a animação dos três pontos
      const messageTimeout = setTimeout(() => {
        const initialMessages = [
          {
            text: 'Bem vindo(a) ao Software! ',
            textChildren: 'Inicie o Software e ganhe dinheiro a cada Captcha que ele responde!',
            sender: 'bot',
          },
        ];
        setMessages(initialMessages);
      }, 3500); // 3.5 segundos
  
      return () => {
        clearTimeout(loadingAnimation);
        clearTimeout(messageTimeout);
      };
    }, []);
  
    const additionalMessages1 = [
      {
        image: 'https://storage.googleapis.com/kagglesdsdata/datasets/38019/306654/samples/226md.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230829%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230829T025600Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=24097e7df8a1c19535ad38638225496e6e03bc39f4c9f70e0748ccb27cc6417f41fdb9b05e0a32fff069e200f36f1a48c57b6088e2fbe537da250459504245fafa457bd205d761d44e0e991d489f6402f7312c244538e7bdc1b5911dd384203c1fe6cfc7107e8efe1fe0c28fbb1239b55c07182776dc846d72c60efaad777f73fee51164d35c8a559e7df28ffa0be75eaa7256ec6dcd0c2ba6070bdb270ea6c4270e8721251f953245018ab5bf1aaaf26ab1ac7ad865ae8e851ccb66613533075f408f0bbcea04b5fb3767ba0879cbfbcf9cbc6dbbf0da95916b48494ae1845f94c81ea05f680bb8ce5e8e5d662b3a14212fcbb059ddd226540779e63f154dd1',
        text: 'Software: 226md',
        sender: 'bot',
  
      },
      {
        text: 'Mensagem enviada !',
        textChildren: 'Sua comissão: R$7,70',
        sender: 'bot',
  
      },
      {
        text: 'Software:',
        textChildren: ' procurando por mais Captchas...',
        sender: 'bot',
  
      },
    ];
  
    const additionalMessages2 = [
      {
        image: 'https://storage.googleapis.com/kagglesdsdata/datasets/38019/306654/samples/24f6w.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230829%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230829T025601Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=0d640abb63b5c34f965e8d31d991760e1b55771e980e926a22d6d2abec228af3cfb96839709149058a4c4b386c9ef13410e7cab93c3ba41729f16559989642e13bca000a431ba75725a3cf02a8da21785d9d272c89c15661ee1807ae898f23215f9a01df83965ad229317e69892f46ba7ce04975501390c74ba2235cf3fc00ceffb78100565d75d7413d3782a212b25566dfa55401f9f339d8e87f234845eb8d2f954f674048799e180a644f539ce903254514688d1bed2c662ab5054e65370bda12955d3d20d4fe39648acee056b4d9e2250f101558d4d230b8b04e78d2b8baab7166b773c1933c9e23f03bdd81180e5d6b3a1ae4e339cd7173a7d35cc80055',
        text: 'Software: 24f6W',
        sender: 'bot',
  
      },
      {
        text: 'Mensagem enviada !',
        textChildren: 'Sua comissão: R$11,57',
        sender: 'bot',
  
      },
      {
        text: 'Software:',
        textChildren: ' procurando por mais Captchas...',
        sender: 'bot',
  
      },
    ];
    const additionalMessages3 = [
      {
        image: 'https://storage.googleapis.com/kagglesdsdata/datasets/38019/306654/samples/268g2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230829%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230829T025601Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=4fec8f87e0c18fb5d47d6da23ee92ec346b53c5d0b53a9db63ded382de3a7095d26197619f3cf6f690b1da648d32e473c8b74ff6244b8ed710273d7925d0a7968db66ecd919874b2bb68cbc758ec6cd273571799ddd909a5d74ed8e74f75b7429657cfdb5af21a3054d322138ec50982645ce751d157c200c33af77285233c7e269690ffe79b7d7933a48f94d81ca0338b973be8f857f2af806e9b068157b2d9ad890fa361dcb4466bd79df165f30b30d5b64860853e72b2ba5667489441903410ceb00f4960a5b8272e53bc540df55281e16f61f677085307e0c348f19824c850b78aa8c71021484ae5623cb40f7a921902870141469acd2323d146d315e0b7',
        text: 'Software: 268g2',
        sender: 'bot',
  
      },
      {
        text: 'Parabéns!',
        textChildren: 'Você acaba de ganhar R$ 54,70 do Software!',
        sender: 'bot',
  
      },
      {
        text: 'Seu saldo é de R$ 286,70 do Software!',
        textChildren: 'chave pix: gabrielas97@gmail.com',
        sender: 'bot',
  
      },
    ];
  
    const handleStartButtonClick = () => {
      setShowButton(false); // Oculta o botão
      setShowContent(true);
  
      // Adiciona as mensagens do primeiro conjunto
      addMessages(additionalMessages1);
    };
  
    // Função para adicionar as mensagens ao estado
    const addMessages = (messagesToAdd, isAdditionalMessages3) => {
      messagesToAdd.forEach((message, index) => {
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, message]);
  
          // Atualiza a posição da logo para a próxima mensagem
          setLogoPosition(prevPosition => ({
            ...prevPosition,
            top: prevPosition.top + 60, // Ajuste a altura conforme necessário
          }));
  
          // Se chegou ao final das mensagens do conjunto 3, mostrar o botão "Sacar PIX"
          if (isAdditionalMessages3 && index === messagesToAdd.length - 1) {
            setShowPixButton(true);
          }
        }, (index + 1) * 900); // Atraso de 5 segundos entre mensagens
      });
    };
  
    useEffect(() => {
      if (showContent) {
        // Aguarda o término das mensagens do primeiro conjunto e então adiciona as do segundo conjunto
        setTimeout(() => {
          addMessages(additionalMessages2);
  
          // Aguarda o término das mensagens do segundo conjunto e então adiciona as do terceiro conjunto
          setTimeout(() => {
            addMessages(additionalMessages3, true);
          }, (additionalMessages2.length + 1) * 900); // Atraso após o término das mensagens do segundo conjunto
        }, (additionalMessages1.length + 1) * 900); // Atraso após o término das mensagens do primeiro conjunto
      }
    }, [showContent]);
  
    return (
      <div className="chatbot-container">
        <div className="chatbot-messages">
  
          {showLoading && (
            <div className="loading-container">
              <div className="avatar-container">
                <img
                  src={logo}
                  width={100}
                  alt="Bot Avatar"
                  className="avatar"
                />
              </div>
              <div className="bounce-container">
                <span className="bounce-dot"></span>
                <span className="bounce-dot"></span>
                <span className="bounce-dot"></span>
              </div>
            </div>
  
          )}
  
          {!showLoading && (
            <>
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender === 'bot' ? 'bot' : 'user'} ${!showLoading ? 'fade-in' : ''}`}>
                  <div className="message-content">
                    {message.sender === 'bot' && (
                      <div className="avatar-container">
                        <img
                          src={logo}
                          width={100}
                          alt="Bot Avatar"
                          className={`avatar`}
                          style={{ top: `${logoPosition.top}px` }}
                        />
                      </div>
                    )}
                    {message.image && (
                      <div className="">
                        <img src={message.image} alt="Message Image" className="" />
                      </div>
                    )}
                    <div className="text-container">
                      <p>{message.text}</p>
                    </div>
  
                  </div>
                  <div className="text-item">
                    {message.textChildren && <p>{message.textChildren}</p>}
                  </div>
                </div>
              ))}
  
              {showButton && (
                <div className="button-item">
                  <button className="button-19" role="button" onClick={handleStartButtonClick}>
                    INICIAR SOFTWARE
                  </button>
                </div>
              )}
  
              {showPixButton && (
                <div className="button-item">
                  <a href="/saque-seu-pix" style={{textDecoration: 'none'}} className="button-88">
                    SACAR VIA PIX
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    )
  }

  export default HomePage;
