import React from 'react';
import './App.css';
import { createMuiTheme, CssBaseline, Theme, ThemeProvider } from '@material-ui/core';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header className="App-header">
        <Login />
        {/* <BrowserRouter>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
        <Link to="/login">login</Link>
      </BrowserRouter> */}
      </header>
    </ThemeProvider>
  );
}

export default App;
