import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routers/Routes";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { useEffect} from "react";
import { fetchUser } from "./store/Slices/userSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      dispatch(fetchUser(decodedToken.userId));
    }
  }, [dispatch]);
    return (
      <>
        <BrowserRouter>
        <AppRoutes/>
        </BrowserRouter>
      </>
    );
  }

export default App;
