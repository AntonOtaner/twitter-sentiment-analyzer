// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import { createContext, useState } from "react";

//Create the context which will allow us to access data from different components of the app
export const Context = createContext();

//Create the provider that will wrap the application and set some data
export const Provider = ({ children }) => {
  const [tweets, setTweets] = useState(); // Storing tweets as data in the provider

  return (
    //Pass tweets and setTweets as value so we can access and set the tweets from different components
    <Context.Provider value={{ tweets, setTweets }}>
      {children}
    </Context.Provider>
  );
};
