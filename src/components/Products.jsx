import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProductByID } from '../api/httprequest.js';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Product from './Product.jsx';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'





function Products() 
{
  let [products, setProducts] = useState([]);



  return (
    <>
    <div>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="username"
          />
          <input
            type="password"
            placeholder="password"
          />
            <Button colorScheme='blue'>click</Button>

          <h2>Login</h2>
          <input
            type="text"
            placeholder="username"
          />
          <input
            type="password"
            placeholder="password"
          />
            <Button colorScheme='blue'>click</Button>
        </div>

    <input placeholder="search student" />
      <button>sort by price</button>
<TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Stock Quantity</Th>
            </Tr>
          </Thead>

          <Product/>

        </Table>
      </TableContainer>

      
    </>
  );
}

export default Products;
