import Header from '../../components/Header/Header';
import './Produtos.css';
import whatsIcon from '../../assets/whatsapp.png';
import jacquin404 from '../../assets/jacquin-not-found.png';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosService';
import { useLocation, useParams } from 'react-router-dom';
import CardProduto from '../../components/CardProduto/CardProduto';

export default function Produtos() {

  const [bolos, setBolos] = useState<Bolo[]>([]); //onde: <Bolo[]> define o tipo do estado; ([]) define o valor inicial;
  const { categoria } = useParams<{ categoria: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');


  const fetchBolos = async () => {
    try {
      const data = await getBolos();
      if (categoria) {
        // const filtrados = data.filter(b => b.categorias.includes(categoria)); // Funcionaria, considerando apenas que includes() é caseSensitive. Ou seja, a logica abaixo, com some() é mais robusta, por ser caseInsensitive
        const filtrados = data.filter(b =>
          b.categorias.some(cat => cat.toLowerCase() === categoria.toLowerCase())
        ); // Quero manter no resultado apenas os bolos que têm pelo menos uma categoria igual (ou semelhante) ao termo pesquisado. some(...): vai olhar dentro de cada b.categorias (que é um array de strings), vai retornar true se pelo menos uma das categorias corresponder ao termo pesquisado; filter(...): vai incluir o bolo (b) no resultado se o some(...) retornar true. Ou seja, adiciona ao array final de bolos apenas os que "passam no teste"
        setBolos(filtrados);
      }
      else if (query) {
        const filtrados = data.filter(b =>
          b.nome.toLowerCase().includes(query.toLowerCase()) ||
          b.descricao.toLowerCase().includes(query.toLowerCase()) ||
          b.categorias.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
        );
        setBolos(filtrados);
      } else {
        console.warn("Nenhuma categoria ou termo de busca definido.");
        setBolos([]);
      }
    } catch (error) {
      console.error("Erro ao executar getBolos: ", error);
    }
  };


  useEffect(() => {
    fetchBolos();
  }, [categoria, query]);


  return (
    <>
      <Header />
      <main>
        <section className="banner"></section>
        <section className="container_geral">
          <h1 className="acessivel">produtos de chocoltae</h1>
          <div className="titulo">
            <span>
              {
                categoria
                  ? categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()
                  : query
                    ? `Resultados para: "${query}"`
                    : "Nenhum filtro aplicado"
              }
            </span>

            <hr />
          </div>
          <div className="cards">
            {
              bolos.map((b: Bolo) => (
                <CardProduto
                  key={b.id}
                  nome={b.nome}
                  descricao={b.descricao}
                  preco={b.preco} 
                  imagem={b.imagens[0]}
                />
              ))
            }
            {
              bolos.length == 0 &&
              <div className='jacquin404' ><h3>O termo pesquisado<br /> não foi encontrado</h3>
                <img src={jacquin404} alt="" />
              </div>
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
