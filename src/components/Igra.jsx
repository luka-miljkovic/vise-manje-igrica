import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

export default function Igra(props) {
    const [broj, setBroj] = useState(Math.floor(props.maxBroj / 2));
    const [ulog, setUlog] = useState(props.minUlog);
    const [novac, setNovac] = useState(props.pocetniNovac);
    const [krajIgre, setKrajIgre] = useState(false);

    useEffect(() => {
        if (novac < props.minUlog) {
            setKrajIgre(true);
            return;
        }
    }, [novac, props.minUlog])
    useEffect(() => {
        if (ulog > Math.min(novac, props.maxUlog)) {
            setUlog(Math.min(novac, props.maxUlog));
        }
    }, [novac, ulog, props.maxUlog]);
    const onClick = (vece) => {

        let val = broj;
        while (val === broj) {
            val = Math.floor(Math.random() * (props.maxBroj)) + 1;
        }
        if ((val > broj) === vece) {

            setNovac(prev => parseInt(prev) + parseInt(ulog));
        } else {
            setNovac(prev => parseInt(prev) - parseInt(ulog));

        }
        setBroj(val);

    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row mt-2'>
                    <div className='col-8'>
                        <div className='row'>
                            <label >Ulog</label>
                            <input disabled={krajIgre} type="number" onChange={(e) => {
                                const value = e.target.value
                                setUlog(value);
                            }} className='form-control' value={ulog} min={props.minUlog} max={Math.min(props.maxUlog, novac)} />
                            <button disabled={krajIgre} onClick={() => {
                                onClick(true);
                            }} className='btn btn-primary mt-2'>Vece</button>
                            <button disabled={krajIgre} onClick={() => {
                                onClick(false);
                            }} className='btn btn-danger ml-2 mt-2'>Manje</button>
                        </div>
                        <div className='row mt-2'>
                            <h2>Broj: {broj}</h2>
                        </div>
                    </div>
                    <div className='col-4'>
                        <label >Najveci broj</label>
                        <input type="text" disabled className='form-control' value={props.maxBroj} />
                        <label >Minimalni ulog</label>
                        <input type="text" disabled className='form-control' value={props.minUlog} />
                        <label >Maksimalni ulog</label>
                        <input type="text" disabled className='form-control' value={props.maxUlog} />
                        <label >Stanje</label>
                        <input type="text" disabled className='form-control' value={novac} />
                    </div>
                </div>
            </div>
        </>
    )
}
