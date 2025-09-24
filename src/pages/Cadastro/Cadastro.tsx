import { useEffect, useState, type ChangeEvent } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Cadastro.css'
import { enviarFoto, getBolos } from "../../services/bolosService";
import type { Bolo } from "../../types/Bolo";
import { formatosService } from "../../services/formatosService";
import axios from "axios";

export default function Cadastro() {

  const [nomeBolo, setNomeBolo] = useState<string>("");
  const [categorias, setCategorias] = useState<string>("");
  const [imagem, setImagem] = useState<File | undefined>(undefined);
  const [preco, setPreco] = useState<number>();
  const [peso, setPeso] = useState<number | undefined>();
  const [descricao, setDescricao] = useState<string>("");

  const [bolos, setBolos] = useState<Bolo[]>([]);

  const fetchBolos = async () => {
    try {
      const dados = await getBolos();
      setBolos(dados);
    } catch (error) {
      console.error("Erro ao executar getBolos: ", error);
    }
  }

  const limparDados = () => {
    setNomeBolo("");
    setCategorias("");
    setImagem(undefined);
    setPreco(undefined);
    setPeso(undefined);
    setDescricao("");
  }

  const extrairImagem = (img: ChangeEvent<HTMLInputElement>) => {
    const file = img.target.files?.[0];
    if (file) setImagem(file);
    else setImagem(undefined);
  }



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomeBolo || !categorias || !preco) {
      alert("Preencha os campos: \nNome do bolo; categorias e preço");
      return
    }

    let uploadedFileName: string | undefined;
    if (imagem) {
      uploadedFileName = await enviarFoto(imagem);

      if (!uploadedFileName) {
        return;
      }
    }

    const novoBolo: Bolo = {
      id: undefined,
      nome: nomeBolo,
      descricao: descricao,
      preco: preco,
      peso: peso ?? undefined,
      categorias: categorias.toLowerCase().split(",").map(c => c.trim()),
      imagens: uploadedFileName ? [uploadedFileName] : []
    }

    try {
      const postResponse = await axios.post("http://localhost:3000/bolos", novoBolo);
      if (postResponse.status === 201) {
        alert("Novo bolo cadastrado com sucesso!");
        limparDados();
        fetchBolos();
      }
    } catch (error) {
      console.error("Erro ao cadastrar novo bolo: ", error);
      alert("Erro ao cadastrar novo bolo");
    }
  }

  useEffect(() => {
    fetchBolos();
  }, [])


  return (
    <>
      <Header />
      <main className="main_cadastro">
        <h1 className="acessivel">Tela de cadastro e listagem de produtos</h1>
        <form onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <hr />
          <div className="container container_cadastro">
            <div className="cadastro_col1">
              <div className="campo campo_bolo">
                <label htmlFor="bolo">Bolo</label>
                <input
                  id="bolo"
                  type="text"
                  placeholder="Insira o nome do bolo"
                  value={nomeBolo}
                  onChange={e => setNomeBolo(e.target.value)}
                />
              </div>
              <div className="linha_cat_img">
                <div className="campo campo_categoria">
                  <label htmlFor="categoria">Categorias</label>
                  <input
                    id="categoria"
                    type="text"
                    placeholder="Chocolate, Morango, Coco, Cerimonias, Destaque"
                    value={categorias}
                    onChange={c => setCategorias(c.target.value)}
                  />
                </div>
                <div className="campo campo_img">
                  <label htmlFor="img">
                    <span>Imagem</span>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M232 344l0-316.7 106.3 106.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0l-120 120c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L216 27.3 216 344c0 4.4 3.6 8 8 8s8-3.6 8-8zm48-24l104 0c26.5 0 48 21.5 48 48l0 48c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-48c0-26.5 21.5-48 48-48l104 0 0-16-104 0c-35.3 0-64 28.7-64 64l0 48c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-48c0-35.3-28.7-64-64-64l-104 0 0 16zm88 72a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
                      </svg>
                    </div>
                  </label>
                  <input
                    type="file"
                    id="img"
                    alt="imagem_do_bolo"
                    accept="image/*"
                    onChange={extrairImagem}
                  />
                </div>
              </div>
              <div className="linha_val_peso">
                <div className="campo campo_valor">
                  <label htmlFor="valor">Valor</label>
                  <input
                    id="valor"
                    type="number"
                    placeholder="Digite o preço em R$ / kg"
                    value={preco}
                    onChange={p => setPreco(Number(p.target.value))}
                  />
                </div>
                <div className="campo campo_peso">
                  <label htmlFor="peso">Peso</label>
                  <input
                    id="peso"
                    type="number"
                    placeholder="Qtde disponível (em g)"
                    value={Number(peso)}
                    onChange={p => setPeso(Number(p.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className="campo cadastro_col2">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                maxLength={200}
                placeholder="Insira breves informações sobre o bolo"
                value={descricao}
                onChange={d => setDescricao(d.target.value)}
              />
            </div>
          </div>
          <button type="submit">Cadastrar</button>
        </form>

        <section className="container_lista">
          <h2>Lista</h2>
          <hr />

          <table>
            <thead>
              <tr>
                <th>Bolo</th>
                <th>Categoria</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Peso</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {
                bolos.map((b: Bolo) => (
                  <tr id={b.id}>
                    <td data-cell="Bolo">{b.nome}</td>
                    <td data-cell="Categorias">{b.categorias.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}</td>
                    <td data-cell="Descrição">{b.descricao}</td>
                    <td data-cell="Preço">{formatosService.PrecoBR(b.preco)}</td>
                    <td data-cell="Peso">{b.peso ? formatosService.PesoEmGramas(b.peso) : "Não cadastrado"}</td>
                    <td>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640">
                        <path fill="currentColor"
                          d="M247.4 79.1C251 70 259.9 64 269.7 64L370.3 64C380.1 64 388.9 70 392.6 79.1L412.2 128L227.8 128L247.4 79.1zM210.6 128L104 128C99.6 128 96 131.6 96 136C96 140.4 99.6 144 104 144L536 144C540.4 144 544 140.4 544 136C544 131.6 540.4 128 536 128L429.4 128L407.5 73.1C401.4 58 386.7 48 370.3 48L269.7 48C253.3 48 238.6 58 232.6 73.1L210.6 128zM128 192L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 192L496 192L496 512C496 538.5 474.5 560 448 560L192 560C165.5 560 144 538.5 144 512L144 192L128 192zM224 264C224 259.6 220.4 256 216 256C211.6 256 208 259.6 208 264L208 472C208 476.4 211.6 480 216 480C220.4 480 224 476.4 224 472L224 264zM328 264C328 259.6 324.4 256 320 256C315.6 256 312 259.6 312 264L312 472C312 476.4 315.6 480 320 480C324.4 480 328 476.4 328 472L328 264zM432 264C432 259.6 428.4 256 424 256C419.6 256 416 259.6 416 264L416 472C416 476.4 419.6 480 424 480C428.4 480 432 476.4 432 472L432 264z" />
                      </svg>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </>
  )
}
