import { useState } from "react";
import InputMask from 'react-input-mask';
import "./App.css";
import imgCheck from "./assets/ShieldCheck.svg";
import topInfo from "./assets/TopInfo.svg";


function App() {

  
  const [numCard, setNumCard] = useState("");
  const [titular, setTitular] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  
  function numberCard () {
    if(!numCard.trim()) {
      setErrors ({...errors, ...{'numCard': 'por favor, iserir número do cartão'}})
    }
    else (
       setErrors ("")  
    )
  };

  function click () {
    setErrors ("")
  }
  function validateCode() {
    if (!cvv) {
      setErrors({...errors, ...{'cvv': 'por favor, inserir cvv'}})
    }
  };
   
  function validateTitular () {
    if (!titular) {
      setErrors ({...errors, ...{'titular':'por favor, inserir o nome do titular'}})
    }
  };

  function validateData () {

    if (!validade) {
      setErrors ({...errors, ...{'validade':'por favor, inserir validade'}})
    }
  };

  return (
    <div className="main-container">
      <section className="app">
        <div className="conteiner">
          <div className="form">
            <div className="form-line">
              <label htmlFor="num-cartao">Número do cartão</label>
              <InputMask
                mask="9999 9999 9999 9999"
                maskChar=" "
                type="string"
                placeholder="**** **** **** ****"
                id="num-cartao"
                value={numCard}
                onChange={(e) => setNumCard(e.target.value)}
                onBlur={(e) => numberCard()}
                onKeyDown={click}
                />
                {errors.numCard && <span className="span-errorNum-cartao">{errors.numCard} </span>}
            </div>
            <div className="form-line">
              <label htmlFor="nome-titular">Nome do títular</label>
              <input
                type="text"
                placeholder="Nome..."
                id="nome-titular"
                value={titular}
                onChange={(e) => setTitular(e.target.value)}
                onBlur={(e) => validateTitular()}
                onKeyDown={click}
               />
                {errors.titular && <span className="span-errorNome">{errors.titular} </span>}
                
            </div>
            <div className="forms-validade">
              <div className="validade">
                <label htmlFor="validaty">Validade</label>
                <input className="input-validade"
                  type="month"
                  id="validty"
                  value={validade}
                  onChange={(e) => setValidade(e.target.value)}
                  onBlur={(e) => validateData()}
                  onKeyDown={click}
                 />
                  {errors.validade && <span className="span-errorValidade">{errors.validade} </span>}
              </div>
              
              <div className="codigo-cvv">
                <label htmlFor="code">CVV</label>
                <input className="input-cvv"
                  placeholder="***"
                  id="code"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  onBlur={(e) => validateCode()}
                  onKeyDown={click}
                  maxLength={3}
                  />
                   {errors.cvv && <span className="span-errorcard">{errors.cvv} </span>}

              </div>
            </div>
          </div>
          <div className="cartao">
            <div className="card-container">
              <img src={topInfo} className="top-info" alt="TopInfo"/>
              <span className="numcard">{numCard}</span>
              <span className="titular">{titular}</span>
              <span className="span-cvv">{cvv}</span>
            </div>
            <div className="check-msg">
              <img src={imgCheck} alt="check" />
              <span>Seus dados estão seguros</span>
            </div>
          </div>
        </div>
        <div>
        <div className="check-msg2">
              <img src={imgCheck} alt="check" />
              <span>Seus dados estão seguros</span>
            </div>
          <button>Adicionar cartão</button>
        </div>
      </section>
    </div>
  );
}

export default App;
