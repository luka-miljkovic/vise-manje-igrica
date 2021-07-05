import React, { useState } from 'react'
import Navbar from './Navbar'
import PoljeForme from './PoljeForme';

export default function Konfiguracija(props) {
    const [maxBrojGreska, setMaxBrojGreska] = useState('');
    const [minUlogGreska, setMinUlogGreska] = useState('');
    const [maxUlogGreska, setMaxUlogGreska] = useState('');

    const [pocetniNovacGreska, setPocetniNovacGreska] = useState('')
    return (
        <>
            <Navbar />
            <div className='container'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }} >

                    <PoljeForme naziv='Maksimalni broj' value={props.maxBroj} greska={maxBrojGreska} onChange={(val) => {
                        if (val < 2) {
                            setMaxBrojGreska('Maksimalni broj mora biti veci od 1');
                            return;
                        }
                        setMaxBrojGreska('');
                        props.setMaxBroj(val);
                    }} />
                    <PoljeForme naziv='Minimalni ulog' value={props.minUlog} greska={minUlogGreska} onChange={(val) => {
                        if (val < 1) {
                            setMinUlogGreska('Minimalni ulog mora biti veci od 1');
                            return;
                        }
                        console.log(val);
                        console.log(props.pocetniNovac)
                        if (val > props.pocetniNovac) {
                            setMinUlogGreska('Minimalni ulog ne sme biti veci od pocetne sume');
                            return;
                        }
                        if (val > props.maxUlog) {
                            setMinUlogGreska('Minimalni ulog ne sme biti veci od maksimalnog uloga');
                            return;
                        }
                        setMinUlogGreska('');
                        props.setMinUlog(val);
                    }} />
                    <PoljeForme naziv='Maksimalni ulog' value={props.maxUlog} greska={maxUlogGreska} onChange={(val) => {

                        if (val < 1) {
                            setMaxUlogGreska('Maksimalni ulog mora biti veci od 1');
                            console.log('greska');
                            return;
                        }
                        if (val < props.minUlog) {
                            setMinUlogGreska('maksimalni ulog ne sme biti manji od minimalnog uloga');
                            return;
                        }
                        console.log(val)
                        setMaxUlogGreska('');
                        props.setMaxUlog(val);
                    }} />
                    <PoljeForme naziv='Pocetni novac' value={props.pocetniNovac} greska={pocetniNovacGreska} onChange={(val) => {
                        console.log(val);
                        console.log(props.minUlog);
                        if (val < 1) {
                            setPocetniNovacGreska('Pocetni novac mora biti veci od 1');

                            return;
                        }
                        if (val < props.minUlog) {
                            console.log('greska');
                            setPocetniNovacGreska('Pocetni novac ne sme biti manji od minimalnog uloga');
                            return;
                        }

                        setPocetniNovacGreska('');
                        props.setPocetniNovac(val);
                    }} />
                </form>
            </div>
        </>
    )
}
