"use client"
import React from 'react'
interface Props{
    params: {
        idProduct: string
    }
}

export default function B3(props: Props) {
    const {params} = props
  return (
    <div>Product Id: {params.idProduct}</div>
  )
}
