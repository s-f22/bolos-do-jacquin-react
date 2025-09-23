import Header from '../../components/Header/Header'
import './Produtos.css'
import whatsIcon from '../../assets/whatsapp.png';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosService';
import { formatosService } from '../../services/formatosService';
import { useParams } from 'react-router-dom';

export default function Produtos() {

  const [bolos, setBolos] = useState<Bolo[]>([]); //onde: <Bolo[]> define o tipo do estado; ([]) define o valor inicial;
  const { categoria } = useParams<{ categoria: string }>();


  const fetchBolos = async () => {
    try {
      const data = await getBolos();
      if (categoria) {
        const filtrados = data.filter(b => b.categorias.includes(categoria));
        setBolos(filtrados);
      } else {
        console.warn("Categoria não definida na URL.");
        setBolos([]);
      }
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
            <span>{ categoria ? categoria?.charAt(0).toUpperCase() + categoria?.slice(1).toLowerCase() : "Categoria não definida na URL" }</span>
            <hr />
          </div>
          <div className="cards">
            {
              bolos.map((b: Bolo) => (
                <div id={b.id} className="card">
                  <img src={`http://localhost:3000/static/${b.imagens[0]}`} alt="" />
                  <div className='card_textos'>
                    <h2>{b.nome}</h2>
                    <p>{b.descricao}</p>
                    <span>{formatosService.PrecoBR(b.preco)}</span>
                  </div>
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
