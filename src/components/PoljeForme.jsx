import React from 'react'

export default function PoljeForme(props) {

    return (
        <>
            <label >{props.naziv}</label>
            <input type="number" className='form-control' value={props.value} onChange={(e) => {
                const value = e.target.value;
                props.onChange(parseInt(value));
            }} />

            {props.greska && (
                <span className='text-danger'>{props.greska}</span>
            )}
            <br />
        </>
    )
}
