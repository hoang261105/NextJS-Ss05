import React from 'react'
interface Props{
    params: {
        id: string
    }
}

export default function page(props: Props) {
    const {params} = props
  return (
    <div>User Id: {params.id}</div>
  )
}
