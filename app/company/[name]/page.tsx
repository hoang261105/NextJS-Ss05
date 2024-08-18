"use client"
import React from 'react'
interface Props{
    params: {
        name: string
    }
}

export default function B4(props: Props) {
  const {params} = props
  return (
    <div>Company Name: {params.name}</div>
  )
}
