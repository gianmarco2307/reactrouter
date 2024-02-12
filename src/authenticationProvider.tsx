import { ReactNode, createContext, useEffect, useState } from "react";

interface AContext {
  isAuthenticated: boolean;
  setAuthenticated: (el: boolean) => void;
}
export const authenticationContext = createContext<AContext>({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <authenticationContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setAuthenticated: setAuthenticated,
      }}
    >
      {children}
    </authenticationContext.Provider>
  );
};
