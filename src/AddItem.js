import { FaPlus } from "react-icons/fa"
const AddItem=( { newItem, setNewItem, handleSubmit } ) => (
     <form className='' onSubmit={ handleSubmit }> {/** Event Is implicitly Passed  */ }
          {/* For Is Reserved Word In JSX And JSX Is Js */ }
          <label htmlFor=''> ADD Item </label>
          <input
               autoFocus
               type='text'
               placeholder='Item Name'
               id='item-name-input'
               required
               value={ newItem }
               onChange={ ( e ) => setNewItem( e.target.value ) } />
          <input
               type='text'
               placeholder='Image Link'
               id='item-name-input' />
          <button
               type='submit'
               aria-label="Add Item"
          >
               <FaPlus />
          </button>
     </form>
)


export default AddItem