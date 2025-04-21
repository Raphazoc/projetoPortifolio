import './Inicio.css';
import minhaFoto from "./minhaFoto.png";  // Ajuste o caminho relativo



export const Inicio = () => { 

    return (
        <div className="inicio">
  <div className="retangulo">
  <div className="foto-container">
    <img src={minhaFoto} alt="Minha foto" className="foto-perfil" />
  </div>


    <h1 className='fonte'>Bem-vindo ao meu portfólio!</h1>
    <p className='fonte'>Meu nome é Raphael Martins Pimenta e sou um desenvolvedor web.</p>
    <p className='fonte'>Aqui você encontrará alguns dos meus projetos e informações sobre mim.</p>
  </div>
</div>

    );
}
