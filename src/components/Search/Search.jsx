import React from 'react'
import { Button } from 'react-bootstrap'
import { Icon } from '@iconify/react'

export default function Search({busqueda}) {
    function devuelveBuscar(e){
        if(e.key == "Enter" && e.target.value!="")
        busqueda(e.target.value)
    }
  return (
    <div className='d-flex'>
        <input type="text" className='fs-1 text-black' onKeyUp={devuelveBuscar}/>
        <Button variant='secondary' className='fs-1 d-flex align-items-center'><Icon icon="gala:search" /></Button>

    </div>
  )
}
