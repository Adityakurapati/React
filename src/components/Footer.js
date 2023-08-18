import React from 'react';

//Gettting Date
const today=new Date();

const Footer=() => (
     <footer>
          <article>
               <ul>
                    <li>
                         <a href="/home">Home</a>
                         <a href="/about">About</a>
                         <a href="/contact">Contact</a>
                    </li>
               </ul>
          </article>
          <article>
               <a href=''>Aditya</a>
          </article>
          <article>
               <h4>CopyRight &copy; { today.getFullYear() }</h4>
          </article>
     </footer>
);
export default Footer;