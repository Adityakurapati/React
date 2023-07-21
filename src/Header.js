import React from 'react';

const headerStyle={
     backgroundColor: '#2b3246',
     color: '#fff',
     padding: '-3px',
     position: 'fixed',
     top: '0',
     height: 'fit-content',
     width: "100%",
     zIndex: '10'
};
const Header=( { title } ) => (
     <header style={ headerStyle }>
          <div className='user-discount'>
               <i class="uil uil-ticket user-discount-logo"></i>
               <label title='Hey You Got Coupon Of Rs400 .. Book Now Any Movie'>400/-</label>
          </div>
          <div className='user-icon'>
               <i class="uil uil-user-circle user-icon-logo"></i>
               <label>Guest</label>
          </div>
          <h1 style={ {
               padding: '1rem',
               margin: '0',
               paddingLeft: '2rem',
          } }>
               { title }
               {/* { props.title } */ }
               <i class="uil uil-clapper-board" style={ { color: 'red', marginLeft: '1rem' } }></i>
          </h1>
     </header>
);

// Default Props - Allow Us To Set Values For Components To Be Expected Or Set default Values If Not Provided 
// If Prop Value Is Provided Then It Will Override The Default Value

Header.defaultProps={
     title: "BMShow"
};

export default Header