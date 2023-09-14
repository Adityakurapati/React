
// Imports 
import './css/index.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import { useState, useEffect } from 'react';
import apiRequest from './components/apiRequest';

// Hoooks 

// useState('defaultValue');
// useRef();
// UseEffect(()=>{},[dependancy])

//  Snipet - Ctrl + Alt + R

// Functional Components  => Components Was Created Broke Down Into Functions And All Components Are Injected Into DOm 

// JSX = JS In XML (Allows To Put javascript Expression Into Code ) 
// JSX Render as String => {[1,2,3]}.. 123
// Object  Was Not Rendered In JSX and Booleans Was Same 
// {} commented

const App=() =>
{
  var list=[
    {
      id: 1,
      checked: false,
      link: 'https://www.kollywoodzone.com/boxoffice/wp-content/uploads/2022/01/Pushpa-The-Rise-Movie-Poster.jpg',
      item: "Pushpa"
    },
    {
      id: 2,
      checked: false,
      link: 'https://images.justwatch.com/poster/303328524/s718/season-1.%7Bformat%7D',
      item: "ferzi"
    },
    {
      id: 3,
      checked: false,
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzkyLjJLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-jylnkbfyan-portrait.jpg",
      item: "OpennHeimer - Free 7 Seats For You"
    },
    {
      id: 4,
      checked: false,
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzkyLjJLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-jylnkbfyan-portrait.jpg",
      item: "OpennHeimer-2 "
    },
    {
      id: 5,
      checked: false,
      link: "https://upload.wikimedia.org/wikipedia/en/4/4f/Insidious_the_red_door.png",
      item: "Insidius"
    },
    {
      id: 6,
      checked: false,
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAzOS42SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363274-yjxvbzhdbc-portrait.jpg",
      item: "Baby"
    },
    {
      id: 7,
      checked: false,
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi42SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363695-smchggxllp-portrait.jpg",
      item: "Hatya"
    },
    {
      id: 7,
      checked: false,
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi42SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363695-smchggxllp-portrait.jpg",
      item: "Hatya"
    },
    {
      id: 8,
      checked: false,
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICA2NS44SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
      item: "Misson Impossible"
    },
  ];

  const API_URL="http://localhost:3500/items";

  // states 
  // [item,setItem] Is Destruct From useState items is the Current State (getter) and setItem(setter)

  // const [ items, setItems ]=useState( list );
  const [ items, setItems ]=useState( [] );
  // [] short circuit bcoz avoid problem (filter on array) for new user

  const [ newItem, setNewItem ]=useState( '' );

  const [ search, setSearch ]=useState( '' );

  const [ fetchError, setFetchError ]=useState( null );

  const [ isLoading, setIsLoading ]=useState( true ); // When App Loads It Initially True 

  // Function Is Asynchronous
  // Effects

  // if We search Item Then Complete Script Will Be Rerendered But When Only Items was Changed Then Only Then The Asynchronous Effect Function Will Be Called 

  useEffect( () =>
  {
    const fetchItems=async () =>
    {
      try
      {
        const response=await fetch( API_URL );// By Default It  Makes Get Request
        if ( !response.ok ) // response.ok => 200 code 
          throw new Error( 'Did Not Received Expected Data ' );

        const listItems=await response.json();
        // console.log( listItems );
        setItems( listItems );
        setFetchError( null ); // Setting FetchError Back To Null
      } catch ( err )
      {
        console.log( err.stack );
        setFetchError( err.message );
      } finally
      {
        setIsLoading( false );
        // Executes Whether We Received Error Or WE Got Expected Data 
      }
    }



    setTimeout( () =>
    {
      // IIFE(Instantly Invoked Function Expression)
      ( async () =>
      {
        await fetchItems();
      } )()
    }, 2000 )
    // localStorage.setItem( 'MovieList', JSON.stringify( items ) )  // correct bacuse 1st Everything loads then items got form LS
  }, [] )

  // }, [ items ] ) /// Loads Each Time When items changes  
  // useEffect(()=>....,[])   Runs Only On Page Loaded   and [] is Like Dependancy
  // useEffect(()=>{ ... })   Runs Each Time When Components were Rendered  (nothing Special)


  console.log( 'After useEffect' );

  // Handling Functions

  // const setAndSaveItems=( newItems ) =>
  // {
  //   setItems( newItems );
  //   localStorage.setItem(JSON.stringify(newItems);
  // }
  const addItem=async ( item ) =>
  {
    const id=items.length? items[ items.length-1 ].id+1:1;
    const myNewItem={ id: id, checked: false, item: item };
    const listItems=[ ...items, myNewItem ];
    setItems( listItems )

    //Rest Api
    const postOptions={
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( myNewItem )
    }

    // Sending Post Request 
    const result=await apiRequest( API_URL, postOptions );
    if ( result ) setFetchError( result )
  }
  const handleCheck=async ( key ) =>
  {
    const listItems=items.map( item => item.id===key? { ...item, checked: !item.checked }:item );// map create a new array 

    setItems( listItems );

    // Rest Api
    // We Can Use ListItems because We Already Updated That In useEffect

    const myItem=items.filter( item => item.id===key );
    const updateOptions={
      method: "PATCH",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( { checked: myItem[ 0 ].checked } ),
    }
    const reqUrl=`${ API_URL }/${ key }`;
    const result=await apiRequest( reqUrl, updateOptions );
    if ( result ) setFetchError( result );
  }
  const handleDelete=async ( key ) =>
  {
    const listItems=items.filter( item => item.id!=key );
    setItems( listItems );

    // Working With Rest API
    const deleteOptions={ method: 'DELETE' }


    const reqUrl=`${ API_URL }/${ key }`;

    const result=await apiRequest( reqUrl, deleteOptions );
    if ( result ) setFetchError( result )
  }
  const handleSubmit=( e ) =>
  {
    e.preventDefault();   // Avoiding From Reloading Page on Submit 
    if ( !newItem ) return  // Check That NewItem Value Is not empty even the input field is required 

    // Add New Item
    addItem( newItem );
    setNewItem( '' );
  }

  return (
    <div className='App'>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      <Header
        title="BookMyShoww"
        length={ items.length }
        search={ search }
        setSearch={ setSearch } />
      {/* Its A Custom Element  */ }
      <main>
        { isLoading&&<center><div class="lds-heart"><div></div></div></center> }
        { fetchError&&<center style={ { color: 'red' } }>`Error : ${ fetchError }`</center> }
        { !fetchError&&!isLoading&&<Content
          items={ items.filter( item => ( item.item )
            .toLowerCase()
            .includes( search.toLowerCase() ) )
          }
          // setItems={ setItems }
          handleCheck={ handleCheck }
          handleDelete={ handleDelete }
        /> }
      </main>
      <AddItem
        newItem={ newItem }
        setNewItem={ setNewItem }
        handleSubmit={ handleSubmit }
      />
      <Footer />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={ logo } className="App-logo" alt="logo" />
    //     <h2>Hey { name }</h2>
    //     <h3>Currently U R { handleFeelings() }</h3>
    //     {/* <p>{ "String" }</p>
    //     <p>{ 1 }</p>
    //     <p>{ [ 1, 2, 3 ] }</p>
    //     <p> [1,2,3] </p>
    //     <p>{ 2===4 }</p>
    //     <p>{ var1 }</p> */}
    //   </header>
    // </div>
  );
}

export default App;
