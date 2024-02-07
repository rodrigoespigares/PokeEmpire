import React from 'react'
import {Button} from 'react-bootstrap'
import Ajax from '../../utils/Ajax';

let result = <Ajax inicio="true"/>
console.log(result);
export default function Pokedex() {
    
  return (
    <>
        <Button variant='secondary'></Button>
        {result}
        <Button variant='secondary'></Button>
    </>
  )
}
