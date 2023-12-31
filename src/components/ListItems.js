import { FaTrashAlt } from 'react-icons/fa';

const ListItems=( { item, handleCheck, handleDelete } ) => (
     <li className="item">
          {/* key={ item.id }  */ }
          <img src={ item.link } className="item-img" />
          <div className="item-options">
               <input type="checkbox"
                    onChange={ () => handleCheck( item.id ) }
                    checked={ item.checked } />
               <label
                    style={
                         ( item.checked )? { textDecoration: 'line-through' }:null
                    }
                    onDoubleClick={ () => handleCheck( item.id ) }
               >


                    { item.item }
               </label>

               <FaTrashAlt
                    role="button"
                    tabIndex="0"
                    className="deleteBtn"
                    onClick={ () => handleDelete( item.id ) } />
          </div>
     </li>
);
export default ListItems;