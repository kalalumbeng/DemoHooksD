import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DemoUseState from './DemoUseState';
//
import DemoUseEffect from './DemoUseEffect';
//
import UseCallBack from './UseCallBack';
// 
import AppMemo from './AppMemo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
     
    {
    // 1 Demo useState
    //
     //<DemoUseState/>  
    
    // 2 Demo useRef
    //
     //<App /> 

    // 3 Demo useEffect 
    // <DemoUseEffect/>

    // 4 Demo UseCallBack
     // <UseCallBack/>

    // 5 Demo useMemo
       <AppMemo/>

    
    }
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
