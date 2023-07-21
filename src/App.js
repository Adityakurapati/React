import logo from './logo.svg';
import './index.css';
import Header from './Header';
import Content from './Content';
import { useState } from 'react';
import Footer from './Footer';
const App=() =>
{
  const [ items, setItems ]=useState( [
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
  ] );

  const handleCheck=( key ) =>
  {
    const listItems=items.map( item => item.id===key? { ...item, checked: !item.checked }:item );
    setItems( listItems );
    localStorage.setItem( 'shoppingList', JSON.stringify( listItems ) )

  }
  const handleDelete=( key ) =>
  {
    const listItems=items.filter( item => item.id!=key );
    setItems( listItems );
  }
  return (
    <div className='App'>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      <Header />
      <Content
        items={ items }
        setItems={ setItems }
        handleCheck={ handleCheck }
        handleDelete={ handleDelete }
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
