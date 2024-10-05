import { Footer, Header } from "../components";
import React from "react";

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="selection:bg-[#00bb1c]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
