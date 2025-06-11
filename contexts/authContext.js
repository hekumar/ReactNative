import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const initialAuth = {
  isAuthenticated: false,
  user: null
};

export default ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// create a list component (ScrollView, flat) -> products -> each product is going to have add to cart and buynow, you need to show cart icon with badges
