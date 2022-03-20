import './App.css';
import { useForm } from 'react-hook-form';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {

  const {register, handleSubmit, setValue} = useForm();

  const onSubmit = (e) => {
    console.log (e)
  }

  const validarCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch (`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json())
    .then(data => {
      
      setValue('rua', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
      
    });
  }

  return (
    
    <div className="Container">
      
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='form-control'>
            <label for="pais">
              País:

            </label>
            <select id="pais" {...register("pais")}>
              <option selected disabled value="" >Selecione</option>
              <option>Brasil</option>
              <option>Canada</option>
              <option>Estados Unidos</option>
              <option>Russia</option>
            </select>
          </div>

          <div className='form-control'>
            <label>
              CEP:
              <input className='form-control' type="text" {...register("cep")} onBlur={validarCep} />
            </label>
          </div>
        
          <div className='form-control'>
            <label>
              Estado: 
              <input className='form-control' type="text" {...register("estado")} />
            </label>
          </div>

          <div className='form-control'>
            <label>
              Cidade:
              <input className='form-control' type="text" {...register("cidade")} />
            </label>
          </div>

          <div className='form-control'>
            <label>
              Bairro:
              <input className='form-control' type="text" {...register("bairro")} />
            </label>
          </div>

          <div className='form-control'>
            <label>
              Rua:
              <input className='form-control' type="text" {...register("rua")} />
            </label>
          </div>

          <div className='div_Botao'><input className="Botao" type="submit" value="Confirmar " /></div>
          
        </form>
      </div>
      <Footer/>
    </div>
        
    
  );
}

export default App;
