import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminNavbar from './BarsFooters/AdminNavbar';
import Sidebar from "./BarsFooters/Sidebar";
import HeaderStats from './HeaderStats';
import Dashboard from "./Dashboard";
import Settings from './Settings';
import Tables from "./Tables";
import FooterAdmin from './BarsFooters/FooterAdmin';
import Trainingtable from './Cards/TrainingsTable';
export default function Admin() {
  return (
    <div>
      <Sidebar/>
      <div className="relative md:ml-64 bg-sky-900">   
      <AdminNavbar/> 
      <HeaderStats />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/Usertables" exact component={Tables} />
            <Route path="/admin/Trainingtables" exact component={Trainingtable} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div> 
    </div> 
  );
}
