import React from 'react';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react'

import Header from './components/header';
import Main from './components/main';

function Layout({ children }) {
  return <>
    <div style={{ display: "block", width: "100%", height: "85vh" }}>
      {children}
    </div>
  </>
}

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Header />
        <Main />
      </Layout>

    </ChakraProvider>
  );
}

export default App;
