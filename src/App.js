import Home from "./pages/home/Home";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import '../src/components/style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./components/context/DarkMode";



function App() {

  const {darkmode} = useContext(DarkModeContext)

  return (
    <div className={darkmode ? "app dark" : "app"}>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>   
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element= {<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>

            <Route path="/product">
              <Route index element={<List/>}/>
              <Route path=":productId" element= {<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
