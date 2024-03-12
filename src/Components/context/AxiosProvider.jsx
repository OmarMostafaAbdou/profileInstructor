import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [UserID, setUserID] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUserID = localStorage.getItem("userID");
    if (storedUserID) {
      setIsAuthenticated(true);
      setUserID(storedUserID);
    }
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUserID(userData._id);
    setUserRole(userData.role);
    localStorage.setItem("userID", userData._id);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserID(null);
    setUserRole(null);
    localStorage.removeItem("userID");
  };

  const isAdmin = () => userRole === "admin";
  const isInstructor = () => userRole === "instructor";
  const isStudent = () => userRole === "student";

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        UserID,
        userRole,
        login,
        logout,
        isAdmin,
        isInstructor,
        isStudent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
