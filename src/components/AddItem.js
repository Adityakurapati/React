import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem=( { newItem, setNewItem, handleSubmit } ) =>
{
     const inputRef=useRef();
     return (
          <form onSubmit={ handleSubmit }> {/** Event Is implicitly Passed  */ }
               {/* For Is Reserved Word In JSX And JSX Is Js */ }
               <div className='input-group' >
                    <label htmlFor='' className="user-label"> ADD Item </label>
                    <input
                         autoFocus
                         type='text'
                         ref={ inputRef }
                         placeholder='Item Name'
                         className="input"
                         id='item-name-input'
                         required
                         value={ newItem }
                         onChange={ ( e ) => setNewItem( e.target.value ) } />
               </div>
               <div className='input-group' >
                    <label htmlFor='' className="user-label"> ADD Item </label>
                    <input
                         type='text'
                         placeholder='Image Link'
                         className="input"
                         id='item-name-input' />
               </div>

               <button
                    type='submit'
                    aria-label="Add Item"
                    onClick={ () => inputRef.current.focus() }
               >
                    <FaPlus />
               </button>
          </form>
     )
};

export default AddItem