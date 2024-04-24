import React from "react";
import './Panel.css'
import AdminPage from "./WorkerCRUD/AdminPage";

const Panel = () => {
  return (
    <div>
      <div className="admin-panel clearfix">
        <div className="slidebar">
          <div className="logoPanel">
            <a href=""></a>
          </div>
          <ul>
            <li>
              <a href="#dashboard" id="targeted">
                dashboard
              </a>
            </li>
            <li>
              <a href="#posts">posts</a>
            </li>
            <li>
              <a href="#media">media</a>
            </li>
            <li>
              <a href="#pages">pages</a>
            </li>
            <li>
              <a href="#links">links</a>
            </li>
            <li>
              <a href="#comments">comments</a>
            </li>
            <li>
              <a href="#widgets">widgets</a>
            </li>
            <li>
              <a href="#plugins">plugins</a>
            </li>
            <li>
              <a href="#users">users</a>
            </li>
            <li>
              <a href="#tools">tools</a>
            </li>
            <li>
              <a href="#settings">settings</a>
            </li>
          </ul>
        </div>
        <div className="main">
        
          <div className="mainContent clearfix">
            <div id="dashboard">
              <h2 className="header">
                <span className="icon"></span>Dashboard
              </h2>
              <AdminPage/>
            </div>
            <div id="posts">
              <h2 className="header">posts</h2>
            </div>
            <div id="media">
              <h2 className="header">media</h2>
            </div>
            <div id="pages">
              <h2 className="header">pages</h2>
            </div>
            <div id="links">
              <h2 className="header">links</h2>
            </div>
            <div id="comments">
              <h2 className="header">comments</h2>
            </div>
            <div id="widgets">
              <h2 className="header">widgets</h2>
            </div>
            <div id="plugins">
              <h2 className="header">plugins</h2>
            </div>
            <div id="users">
              <h2 className="header">users</h2>
            </div>
            <div id="tools">
              <h2 className="header">tools</h2>
            </div>
            <div id="settings">
              <h2 className="header">settings</h2>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Panel;
