import React from 'react'
import {useParams} from 'react-router-dom';

export default function Detalle() {
    let {id} = useParams();
  return (
    <div>
        {id}
    </div>
  )
}
