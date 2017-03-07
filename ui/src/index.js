import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout';
import JWTToken from "./views/jwt/JWTToken";

// applications
import ListApplications from './views/applications/ListApplications';
import CreateApplication from "./views/applications/CreateApplication";
import UpdateApplication from "./views/applications/UpdateApplication";

// nodes
import ListNodes from './views/nodes/ListNodes';
import UpdateNode from './views/nodes/UpdateNode';
import CreateNode from "./views/nodes/CreateNode";
import ActivateNode from "./views/nodes/ActivateNode";

// channels
import ChannelLists from "./views/channels/ChannelLists";
import ChannelListDetails from "./views/channels/ChannelListDetails";
import CreateChannelList from "./views/channels/CreateChannelList";

// users
import CreateUser from "./views/users/CreateUser";
import ListUsers from "./views/users/ListUsers";
import UpdateUser from "./views/users/UpdateUser";
import UpdatePassword from "./views/users/UpdatePassword";

// styling
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';
import './index.css';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ListApplications}></IndexRoute>
      <Route path="applications" component={ListApplications}></Route>
      <Route path="applications/create" component={CreateApplication}></Route>
      <Route path="applications/:applicationID/edit" component={UpdateApplication}></Route>
      <Route path="applications/:applicationID/nodes/create" component={CreateNode}></Route>
      <Route path="applications/:applicationID/nodes/:devEUI/edit" component={UpdateNode}></Route>
      <Route path="applications/:applicationID/nodes/:devEUI/activation" component={ActivateNode}></Route>
      <Route path="applications/:applicationID" component={ListNodes}></Route>
      <Route path="channels" component={ChannelLists}></Route>
      <Route path="channels/create" component={CreateChannelList}></Route>
      <Route path="channels/:id" component={ChannelListDetails}></Route>
      <Route path="users/create" component={CreateUser}></Route>
      <Route path="users/:userID/edit" component={UpdateUser}></Route>
      <Route path="users/:userID/password" component={UpdatePassword}></Route>
      <Route path="users" component={ListUsers}></Route>
      <Route path="jwt" component={JWTToken}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
