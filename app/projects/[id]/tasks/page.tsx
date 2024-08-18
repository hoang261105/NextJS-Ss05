"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const {id} = useParams()
  return (
    <div>Danh sách nhiệm vụ của dự án có id là: {id}</div>
  )
}
