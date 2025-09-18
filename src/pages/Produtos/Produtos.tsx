import Header from '../../components/Header/Header'
import './Produtos.css'
import chocolateBelga from '../../assets/imgs/choc-belga.png'
import whatsIcon from '../../assets/whatsapp.png';

export default function Produtos() {
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
            <div className="card">
              <img src={chocolateBelga} alt="" />
              <h2>Chocolate Belga</h2>
              <p>Bolo macio de chocolate, aplicado granulado que traz crocância e um sabor irresistível.</p>
              <span>R$ 50,00/kg.</span>
            </div>
            <div className="card">
              <img src={chocolateBelga} alt="" />
              <h2>Chocolate com Ninho</h2>
              <p>Bolo macio de chocolate com creme de leite Ninho, um sabor irresistível.</p>
              <span>R$ 50,00/kg.</span>
            </div>
            <div className="card">
              <img src={chocolateBelga} alt="" />
              <h2>Cenoura com Chocolate</h2>
              <p>Bolo macio cenoura com cobertura de chocolate, um sabor família e irresistível.</p>
              <span>R$ 50,00/kg.</span>
            </div>
            <div className="card">
              <img src={chocolateBelga} alt="" />
              <h2>Ninho com Morango</h2>
              <p>Bolo macio de chocolate com recheio de leite ninho e morango. A melhor combinação para seu dia.
              </p>
              <span>R$ 50,00/kg.</span>
            </div>
            <div className="card">
              <img src={chocolateBelga} alt="" />
              <h2>Chocolate com Pistache</h2>
              <p>Bolo macio de leite Ninho, com creme delicado e crocante de amendoim para um sabor irresistível.
              </p>
              <span>R$ 50,00/kg.</span>
            </div>
            <div className="card">
              <img src={chocolateBelga} alt="" />
              <h2>Chocolate com Oreo</h2>
              <p>Bolo macio de leite Ninho, com creme delicado e crocante de amendoim para um sabor irresistível.
              </p>
              <span>R$ 50,00/kg.</span>
            </div>
          </div>
        </section>
        <a className="whatsapp" href="https://wa.me/5511999998888?text=Olá%20quero%20saber%20mais!" target="_blank">
          <img src={whatsIcon} alt="icone do whatsapp" />
        </a>
      </main>
    </>
  )
}
