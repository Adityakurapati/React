import React from "react";
import './index.css';
import './dave.css';
import ListItems from './ListItems';

const ItemsList=( { items, handleCheck, handleDelete } ) => (
     <ul className="item-list">
          { items.map( ( item ) => (
               <ListItems item={ item } handleCheck={ handleCheck } handleDelete={ handleDelete } />
          ) ) }
     </ul> );
// setItems={ setItems }
export default ItemsList;