// import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./Store/index";

// export const Photocontext = createContext(null)

// const ContextPhoto = () => {
  // const [initialState, setInitialState] = useState({
  //   photos:[]
  // })

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch ("https://picsum.photos/v2/list?page=2&limit=8");
  //     const formattedResponse  = response.json();
  //     setInitialState(state => ({
  //       ...state,
  //       photos: formattedResponse
  //     }));
  //   })()
  // }, [])
  // return <Photocontext.Provider value={{ ...initialState}}>
  //   <App/>
  // </Photocontext.Provider>
// }




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store} >
        <App />
        {/* <ContextPhoto/> */}
    </Provider>
  </BrowserRouter>

);


