"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function Post() {
    const {id} = useParams()
  return (
    <div>Danh sách bài viết của user id: {id}</div>
  )
}
