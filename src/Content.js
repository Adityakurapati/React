import React from "react";
import './index.css';
import { useState } from 'react';
const styles1={
               padding: '.8rem',
               borderRadius: '.6rem',
               marginBottom: '0.9rem'
};
const Content=() =>
{
               var handleClick2=( para ) =>
               {
                              // alert( `Helllo ${ para }` );
               }
               var handleClickMe=( e ) =>
               {
                              // e.target.backgroundColor='red';
                              alert( e.target.innerText )
               }

               const [ feeling, setFeelings ]=useState( 'Brave' );
               const [ count, setCount ]=useState( 0 );
               const handleFeelings=() =>
               {
                              const feelings=[ 'soft', 'rude', 'good', 'Aggresive', 'Emotional' ];
                              const int=Math.floor( Math.random()*5 );
                              setFeelings( feelings[ int ] );
                              setCount( count+1 );
                              setCount( count+1 );
                              alert( count );

               }
               return ( <main className='G-List'>

                              <article className='G-Item'>
                                             <img src='https://api.unsplash.com/photos' className='G-img' />
                                             <h2>
                                                            Your R { feeling }
                                             </h2>
                                             <center><button onClick={ handleFeelings } style={ styles1 }>Add Cart </button></center>
                                             <center><button onClick={ handleClick2( 'Dave' ) } style={ styles1 }>Add Cart </button></center>
                                             <center><button onClick={ ( e ) => handleClickMe( e ) } style={ styles1 }>Add Cart </button></center>
                              </article>
               </main>
               );
}
export default Content;