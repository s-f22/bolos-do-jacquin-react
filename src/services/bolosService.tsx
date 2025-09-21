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