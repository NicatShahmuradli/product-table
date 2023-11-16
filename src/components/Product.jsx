import { Button } from '@chakra-ui/react'
import { getAllProducts, deleteProductByID } from '../api/httprequest.js';
import React, { useState, useEffect } from 'react';

import {
    Tbody,
    Tr,
    Td,
  } from '@chakra-ui/react'



function Product() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getAllProducts().then((res)=>{
            setProducts(res)
        })
    },[])


    
    
  return (
    <>
         {products && products.map((products, idx)=>{
         return <Tbody key={idx}>
            <Tr>
              <Td>{products.id}</Td>
              <Td>{products.name}</Td>
              <Td>{products.unitPrice}</Td>
              <Td>{products.unitsInStock}</Td>
              <Td>
                
            <Button colorScheme='blue'>Edit</Button>
              <Button onClick={()=>{
                deleteProductByID(products.id)
                setProducts()
              }} colorScheme='red'>Delete</Button>
              </Td>

            </Tr>
          </Tbody>
          

          
        })}
    </>
  )
}

export default Product