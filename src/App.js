import { Route, Switch } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./pages/Home";
import Twinkie from "./pages/Twinkie";
import Dorinda from "./pages/ Dorinda";
import Karen from "./pages/Karen";
import Jacky from "./pages/Jacky";
import Mattie from "./pages/Mattie";
import Whoops404 from "./pages/Whoops404";

function App() {
    return (
        <div>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/twinkie" component={Twinkie} />
                <Route path="/dorinda" component={Dorinda} />
                <Route path="/karen" component={Karen} />
                <Route path="/jacky" component={Jacky} />
                <Route path="/mattie" component={Mattie} />
                <Route path="*" component={Whoops404} />
            </Switch>
        </div>
    );
}

export default App;
