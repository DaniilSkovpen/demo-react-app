import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { Component } from "react";
import { initializeApp } from "./Redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Preloader from "./Components/common/Preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";
import React from "react";
import ProfileContainer from "./Components/Profile/ProfileContainer";

// const DialogsContainer = React.lazy(() =>
//   import("./Components/Dialogs/DialogsContainer")
// );
// const ProfileContainer = React.lazy(() =>
//   import("./Components/Profile/ProfileContainer")
// );

function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class App extends Component {
  componentDidMount() {
    //this.props.initializeApp();
  }
  render() {
    // if (!this.props.initialized) return <Preloader />;

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userID" element={<ProfileContainer />} />

            <Route
              path="/profile/"
              element={<ProfileContainer />}/>

            <Route
              path="/dialogs/*"
              element={<DialogsContainer />}/>

            <Route path="/news" element={<News />} />

            <Route path="/music" element={<Music />} />

            <Route path="/settings" element={<Settings />} />

            <Route path="/users" element={<UsersContainer />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);

const ReactJSApp = (props) => {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
    </BrowserRouter>
  );
};

export default ReactJSApp;
