import React from 'react'
import Button from 'react-bootstrap/Button';

type buttonType = {
    buttonTitle?:string,
    handler?:()=>void,
    
}

const button = (props:buttonType) => {
  return (
    <>
    <Button variant="info" onClick={props.handler}>{props.buttonTitle}  </Button>{' '}
    </>
  )
}

export default button