import { createContext, useState } from "react";

export interface MobileMenuContextType {
  opened: boolean;
  changeOpened: () => void;
}

export const MobileMenuContext = createContext<MobileMenuContextType>({
  opened: false,
  changeOpened: () => {},
});

const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [opened, setOpened] = useState<boolean>(false);

  const changeOpened = () => {
    setOpened((prev) => !prev);
  };

  return (
    <MobileMenuContext.Provider value={{ opened, changeOpened }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuProvider;
