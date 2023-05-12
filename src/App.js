import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './fb.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Ch1 from './1.js'
import Ch3 from './3.js'

const provider = new GoogleAuthProvider();
class App extends React.Component {

  constructor(){
    super();
    this.state={
      userInfo : null
    }
  }

  render(){
    let loginBtn = null;
    const auth = getAuth(app);

    if (this.state.userInfo === null){
      loginBtn = <p id="auth" onClick={(event)=>{
        event.preventDefault();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            return user;
          })
          .then(((result)=> this.setState({userInfo : result})))
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          });
      }}>로그인</p>
    } else {
      loginBtn = <p id="auth" onClick={()=>{
        auth.signOut();
        this.setState({userInfo : null});
      }}>{this.state.userInfo.displayName}</p>
    }
  return (
    <div className="App">
    <header className="header">
    {loginBtn}
      IEC 미궁 : 재회
      <hr width="80%" className='centered'></hr>
    </header>
    <BrowserRouter>
      <Routes>
        <Route path='/1' element={<Ch1/>}></Route>
        <Route path='/3' element={<Ch3/>}></Route>
      </Routes>
    </BrowserRouter>
      <link href="https://webfontworld.github.io/naver/MaruBuri.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>
    </div>
  );
}
}

export default App;
