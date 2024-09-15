import { createContext, useState } from "react";

export const CharacterContext = createContext(undefined);

export default function CreateContextProvide({ children }) {
  const [characters, setCharacters] = useState([]);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
}
