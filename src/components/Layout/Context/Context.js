import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [tweets, setTweets] = useState();

  return (
    <Context.Provider value={{ tweets, setTweets }}>
      {children}
    </Context.Provider>
  );
};
