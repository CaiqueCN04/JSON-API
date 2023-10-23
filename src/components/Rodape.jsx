import {} from 'react';
import { RodapeSyled } from '../css/estilo';
import {FaFacebook} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa6";

function Rodape() {
  return (
    <RodapeSyled>
      <section className="rodape">
        <h3>@2023</h3>
        <FaFacebook className="redes" />
        <FaGithub className="redes"/>
      </section>
    </RodapeSyled>
  );
}

export default Rodape;
