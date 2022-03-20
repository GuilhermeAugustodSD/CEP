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

          <div className='from-control'>
            <label>
              País:
              <input className='from-control' type="text" {...register("pais")} />
            </label>
          </div>

          <div className='from-control'>
            <label>
              CEP:
              <input className='from-control' type="text" {...register("cep")} onBlur={validarCep} />
            </label>
          </div>
        
          <div className='from-control'>
            <label>
              Estado: 
              <input className='from-control' type="text" {...register("estado")} />
            </label>
          </div>

          <div className='from-control'>
            <label>
              Cidade:
              <input className='from-control' type="text" {...register("cidade")} />
            </label>
          </div>

          <div className='from-control'>
            <label>
              Bairro:
              <input className='from-control' type="text" {...register("bairro")} />
            </label>
          </div>

          <div className='from-control'>
            <label>
              Rua:
              <input className='from-control' type="text" {...register("rua")} />
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
