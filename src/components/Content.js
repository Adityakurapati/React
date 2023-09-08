import React from "react";
import '../css/index.css';
import '../css/dave.css';
import ItemsList from './ItemsList';
const styles1={
        padding: '.8rem',
        borderRadius: '.6rem',
        marginBottom: '0.9rem'
};
// <> Fragment 
const Content=( { items, handleCheck, handleDelete } ) => ( <>
        <article className='G-Item'>
                { ( items.length )? (
                        <ItemsList
                                items={ items }
                                handleCheck={ handleCheck }
                                handleDelete={ handleDelete } />
                ):
                        (
                                <h2>List Is Empty</h2>
                        )
                }
                {/* <colorProject
                        color={ color }
                        setColor={ setColor } /> */}
        </article>
</>
);
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
