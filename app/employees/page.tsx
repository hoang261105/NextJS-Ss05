"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
export const employees = [
    {
        id: 1,
        name: "David",
        age: 20,
    },
    {
        id: 2,
        name: "Linda",
        age: 22,
    },
    {
        id: 3,
        name: "Kavin",
        age: 18,
    }
]

export default function B9() {
    const router = useRouter()
    
    const handleClick = (id: number) => {
        router.push(`/employees/${id}`)
    }
  return (
    <ul>
        {
            employees.map((employee: any) => (
                <li key={employee.id}>
                    <p>Id: {employee.id}</p>
                    <p>Name: {employee.name}</p>
                    <p>Age: {employee.age}</p>
                    <button style={{border: "1px solid black"}} onClick={() => handleClick(employee.id)} children="Xem chi tiết"></button>
                </li>
            ))
        }
    </ul>
  )
}
