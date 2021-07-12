import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './component/layout'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoginPage from "./pages/auth/Login";
// import RegisterPage from "./pages/auth/Register";
import ListTodoPage from "./pages/todo";
import DetailTodoPage from "./pages/todo/detail";
// import UpdateTodoPage from "./pages/todo/Update-todo";
// import AddTodoPage from "./pages/todo/Add-todo";
// import DeleteTodoPage from "./pages/todo/Delete-todo";
// import NotFoundPage from "./pages/Notfound";
// import ProtectedLayout from './component/protectedLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
              {/* <Route component={LoginPage} path="/login"/> */}
              {/* <Route component={RegisterPage} path="/register"/> */}
              
              {/* <ProtectedLayout component={AddTodoPage} path="/todo/add"/> */}
              {/* <Route component={UpdateTodoPage} path="/todo/:id/update"/> */}
              {/* <ProtectedLayout component={DeleteTodoPage} path="/todo/:id/delete"/> */}
              <Route component={DetailTodoPage} path="/todo/:id"/>
              <Route component={ListTodoPage} exact path="/"/>
              {/* <ProtectedLayout component={NotFoundPage} /> */}
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
