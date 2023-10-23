import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
  nome: yup.string().required('Campo Nome obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('Campo e-mail obrigatório'),
  cpf: yup.string().min(11, 'CPF deve conter no mínimo 11 dígitos').required('Campo obrigatório')
});

function Cliente() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const [listaCliente, setListaClientes] = useState([]);

  function inserirCliente(cliente) {
    setListaClientes([...listaCliente, cliente]);
  }

  function buscarCep(e) {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue('rua', data.logradouro);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);
        setValue('bairro', data.bairro);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit(inserirCliente)}>
        <fieldset>
          <legend>Dados pessoais:</legend>
          <label>
            Nome:
            <input type="text" {...register('nome')} />
            <span>{errors.nome?.message}</span>
          </label>

          <label>
            E-mail:
            <input type="text" {...register('email')} />
            <span>{errors.email?.message}</span>
          </label>

          <label>
            CPF:
            <input type="text" {...register('cpf')} />
            <span>{errors.cpf?.message}</span>
          </label>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label>
            CEP:
            <input type="text" {...register('cep')} onChange={buscarCep} />
          </label>

          <label>
            Rua:
            <input type="text" {...register('rua')} />
          </label>
          <label>
            Número:
            <input type="text" {...register('numero')} />
          </label>
          <label>
            Bairro:
            <input type="text" {...register('bairro')} />
          </label>
          <label>
            Cidade:
            <input type="text" {...register('cidade')} />
          </label>
          <label>
            Estado:
            <input type="text" {...register('estado')} />
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Cliente;
