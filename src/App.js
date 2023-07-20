import logo from './logo.svg';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
const App=() =>
{
  return (
    <div className='App'>
      <Header />
      <Content />
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
