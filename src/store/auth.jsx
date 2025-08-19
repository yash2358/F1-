import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const storeToken = (tok) => {
        setToken(tok)
        return localStorage.setItem("token", tok)
    }
    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token")
    }

    let isLoggedIn = !!token;
    let apiUrl = import.meta.env.VITE_API_URL
  useEffect(() => {
  const fetchUser = async () => {
    try {
      setLoading(true); // start loading before fetch

      const res = await fetch(`${apiUrl}/api/auth/user`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUser(data.message);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false); // stop loading after success/error
    }
  };

  fetchUser(); // call the async function
}, [apiUrl, token]); // added dependencies

    return <AuthContext.Provider value={{ storeToken, logoutUser, isLoggedIn, user, token, loading, apiUrl }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}