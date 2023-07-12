export default function home() {
  return (
    <div  className = {` 
    flex justify-center items-center  rounded-lg
    border-2 m-10 ml-80 mr-80 bg-cyan-500  
    font-verdana
    `}>
    <form action="" className = {` 
     p-20  justify-center items-center
    `}>
    <label htmlFor="nome">Nome:</label> <br />
    <input type="text" name="" id="nome" /> <br />

    <label htmlFor="cpf">CPF:</label> <br />
    <input type="text" name="" id="cpf" /> <br />

    <label htmlFor="ano_nasc">Ano de nascimento:</label> <br />
    <input type="text" name="" id="ano_nasc" /> <br />

    <button type="submit" id="enviar" className={`rounded-md  flex  p-2`}>Enviar</button>    
    </form>
    </div>
  )
}