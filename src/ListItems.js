import { FaTrashAlt } from 'react-icons/fa';

const ListItems=( { item, handleCheck, handleDelete } ) => (
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
);
export default ListItems;