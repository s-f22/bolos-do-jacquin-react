import Header from '../../components/Header/Header'
import './Produtos.css'
import whatsIcon from '../../assets/whatsapp.png';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosService';
import { formatosService } from '../../services/formatosService';

export default function Produtos() {

  const [bolos, setBolos] = useState<Bolo[]>([]); //onde: <Bolo[]> define o tipo do estado; ([]) define o valor inicial;

  const fetchBolos = async () => {
    try {
      const data = await getBolos();
      setBolos(data);
    } catch (error) {
      console.error("Erro ao executar getBolos: ", error);
    }
  }

  useEffect(() => {

    fetchBolos();

  }, [])


  return (
    <>
      <Header />
      <main>
        <section className="banner"></section>
        <section className="container">
          <h1 className="acessivel">produtos de chocoltae</h1>
          <div className="titulo">
            <span>Chocolate</span>
            <hr />
          </div>
          <div className="cards">
            {
              bolos.map((b: Bolo) => (
                <div id={b.id} className="card">
                  <img src={`http://localhost:3000/static/${b.imagens[0]}`} alt="" />
                  <h2>{b.nome}</h2>
                  <p>{b.descricao}</p>
                  <span>{formatosService.PrecoBR(b.preco)}</span>
                </div>
              ))
            }
          </div>
        </section>
        <a className="whatsapp" href="https://wa.me/5511999998888?text=Olá%20quero%20saber%20mais!" target="_blank">
          <img src={whatsIcon} alt="icone do whatsapp" />
        </a>
      </main>
      <Footer />
    </>
  )
}
