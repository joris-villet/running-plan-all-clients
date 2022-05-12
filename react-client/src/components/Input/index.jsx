import React from 'react';

export default function Input(props) {
  return (
    <label className={props.classLabel}>
      <input className={props.classInput} onChange={props.onChange} type={props.text} placeholder={props.placeholder} />
    </label>
  )
}