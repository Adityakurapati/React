import React from 'react';

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
                                             <h2>React</h2>
                              </article>
                              <article>
                                             <h4>CopyRight &copy; { today.getFullYear() }</h4>
                              </article>
               </footer>
);
export default Footer;