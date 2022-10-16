import { useState, useEffect } from 'react';
import StoreRoutes from './routes/StoreRoutes';
import Navigation from './components/nav/Navigation';
import UserContext from './auth/UserContext';
import useLocalStorage from "./hooks/useLocalStorage";
import E_StoreApi from "./api/DatabaseApi";
import jwt_decode from "jwt-decode";
import LoadingSpinner from './common/LoadingSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "eStore-token";

/** React eStore application.
 *
 * - infoLoaded: has user data been pulled from API? 
 *   (this manages spinner for "loading...")
 *
 * - currentUser: user obj from API. Tells if someone is logged in. 
 *    This is passed around via context throughout app.
 *
 * - token: for logged in users, this is their authentication JWT.
 *   Is required to be set for most API calls. This is initially read from
 *   localStorage and synced to there via the useLocalStorage hook.
 */

function App() {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    "App",
    "infoLoaded=", infoLoaded,
    "currentUser=", currentUser,
    "token=", token
  );

  /**Load user info from API.
 * This should not run until a user is logged in and have a token.
 * It only needs to re-run when a user logs out, so the value of the token is a dependency for this effect.
 */
  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt_decode(token);
          E_StoreApi.token = token;
          let currentUser = await E_StoreApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    /**
     * LoadingSpinner management.
     * set infoLoaded to false while async getCurrentUser runs;
     * once the data is fetched (or even if an error happens!),
     * this will be set back to false to control the spinner.
     */
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  //Handles React eStore User logout//

  function logout() {
    setTimeout(() => {
      setCurrentUser(null);
      setToken(null);
    })
  };


  /**
* Handles React eStore User signup.
* Automatically logs them in (set token) upon signup.
*/
  async function signup(signupData) {
    try {
      let token = await E_StoreApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errs) {
      console.log(errs);
      console.error("Signup failed!", errs);
      return { success: false, errs };
    }
  }

  /**
   * Handles React eStore User login
   */
  async function login(loginData) {
    try {
      let token = await E_StoreApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errs) {
      console.log(errs);
      console.error("Login failed!", errs);
      return { success: false, errs };
    }
  };

  if (!infoLoaded)
    return <LoadingSpinner />;



  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Navigation logout={logout} />
        <StoreRoutes login={login} signup={signup} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
