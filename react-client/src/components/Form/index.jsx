import React from 'react';

export default function Form(props) {
  return (
    <form className={props.classForm}>
      {props.children}
    </form>
  )
}