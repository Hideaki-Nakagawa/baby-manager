import React from 'react';
import './App.css';
import { createMuiTheme, CssBaseline, Theme, ThemeProvider } from '@material-ui/core';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Login } from './component/page';

library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理

function App() {
  const theme: Theme = createMuiTheme({
    palette: {
      type: 'dark',
      //type: 'light',
    }
  })

  /** Googleアカウントの認証結果をコンソールに出力 */
  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route exact path="/"></Route>
              <Route path="/login" component={Login}></Route>
            </Switch>
            <Link to="/login">login</Link>
          </BrowserRouter>
          <GoogleLogin
            clientId="dummy"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
