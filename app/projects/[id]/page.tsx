import React from 'react'
interface Props{
    params: {
        id: string
    }
}

export default function page(props: Props) {
    const {params} = props
  return (
    <div>Trang chi tiết có dự án id: {params.id}</div>
  )
}
