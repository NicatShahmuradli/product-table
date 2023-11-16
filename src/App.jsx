import Products from "./components/Products.jsx"
import * as React from 'react'


import { ChakraProvider } from '@chakra-ui/react'
import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Products/>
      </ChakraProvider>
    </>
  );
}

export default App;
