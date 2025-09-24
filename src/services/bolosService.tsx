import axios from "axios";
import type { Bolo } from "../types/Bolo";

export const getBolos = async (): Promise<Bolo[]> => {
  try {
    const res = await axios.get("http://localhost:3000/bolos");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar os dados: ", error);
    throw error; // Propaga o erro para quem chamou
  }
};

export const enviarFoto = async (file: File): Promise<string | undefined> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post("http://localhost:3000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data.filename;
  } catch (error) {
    console.error("Erro no upload da imagem: ", error);
    alert("Erro ao realizar o upload da imagem");
    return undefined;
  }
};