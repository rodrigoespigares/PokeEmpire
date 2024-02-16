import React from 'react'
import { Button } from 'react-bootstrap'
import { Icon } from '@iconify/react'
import './Search.css'

export default function Search({busqueda}) {
    function devuelveBuscar(e){
      let buscar = document.getElementById("search").value;
        if((e.key == "Enter" || e.target.id=="butonSearch") && buscar!="")
        busqueda(buscar)
        else 
        document.getElementById("search").classList.remove("err")
    }
  return (
    <div className='d-flex searching'>
        <input id='search' type="text" className='fs-1' onKeyUp={devuelveBuscar}/>
        <Button id="butonSearch" variant='secondary' className='fs-1 d-flex align-items-center' onClick={devuelveBuscar}><Icon id="butonSearch" icon="gala:search" /></Button>
    </div>
  )
}
