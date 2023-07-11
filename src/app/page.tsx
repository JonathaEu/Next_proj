export default function home() {
  return (
    <div  className = {` 
    flex justify-center items-center  rounded-lg
    border-2 m-10 ml-80 mr-80 bg-cyan-500  p-20
    font-verdana
    `}>
    <form action="" className = {` 
     p-20  justify-between
    `}>
    <label htmlFor="nome">Nome:</label> <br />
    <input type="text" name="" id="nome" /> <br />

    <label htmlFor="especie">Espécie:</label> <br />
    <input type="text" name="" id="especie" /> <br />

    <label htmlFor="peso">Peso:</label> <br />
    <input type="text" name="" id="peso" /> <br />
    
    </form>
    </div>
  )
}