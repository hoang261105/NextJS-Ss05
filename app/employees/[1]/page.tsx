"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter()
  return (
    <div>
        <a href="">Employee Detail</a>{" "}
        <a href="" onClick={() => router.push("/employees")}>Employee's Project</a> <br />
        <b>Chi tiết nhân viên</b>
        <p>Id: 1</p>
        <p>Name: David</p>
        <p>Age: 20</p>
    </div>
  )
}
