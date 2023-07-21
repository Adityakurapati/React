import React from "react";
import './index.css';
import './dave.css';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'


const styles1={
        padding: '.8rem',
        borderRadius: '.6rem',
        marginBottom: '0.9rem'
};
const Content=( { items, setItems, handleCheck, handleDelete } ) =>
{
        return ( <main className='G-List'>

                <article className='G-Item'>
                        { ( items.length )? (
                                <ul className="item-list">
                                        { items.map( ( item ) => (
                                                <li key={ item.id } className="item">
                                                        <img src={ item.link } className="item-img" />
                                                        <div className="item-options">
                                                                <input type="checkbox"
                                                                        onChange={ () => handleCheck( item.id ) }
                                                                        checked={ item.checked } />
                                                                <label
                                                                        onDoubleClick={ () => handleCheck( item.id ) }
                                                                        style={
                                                                                ( item.checked )? { textDecoration: 'line-through' }:null
                                                                        }>
                                                                        { item.item }
                                                                </label>

                                                                <FaTrashAlt
                                                                        role="button"
                                                                        tabIndex="0"
                                                                        className="deleteBtn"
                                                                        onClick={ () => handleDelete( item.id ) } />
                                                        </div>
                                                </li>
                                        ) ) }
                                </ul>
                        ):
                                (
                                        <h2>List Is Empty</h2>
                                )
                        }
                </article>
        </main>
        );
}
export default Content;




// var handleClick2=( para ) =>
//                {
//                               // alert( `Helllo ${ para }` );
//                }
//                var handleClickMe=( e ) =>
//                {
//                               // e.target.backgroundColor='red';
//                               alert( e.target.innerText )
//                }

//                const [ feeling, setFeelings ]=useState( 'Brave' );
//                const [ count, setCount ]=useState( 0 );
//                const handleFeelings=() =>
//                {
//                               const feelings=[ 'soft', 'rude', 'good', 'Aggresive', 'Emotional' ];
//                               const int=Math.floor( Math.random()*5 );
//                               setFeelings( feelings[ int ] );
//                               setCount( count+1 );
//                               setCount( count+1 );
//                               alert( count );

//                }
{/* <center><button onClick={ handleFeelings } style={ styles1 }>Add Cart </button></center>
                                             <center><button onClick={ handleClick2( 'Dave' ) } style={ styles1 }>Add Cart </button></center>
                                             <center><button onClick={ ( e ) => handleClickMe( e ) } style={ styles1 }>Add Cart </button></center> */}
