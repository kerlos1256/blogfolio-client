import React from "react";

export interface JSCodeProps {
  children: React.ReactNode;
}

export const JSCode: React.FC<JSCodeProps> = ({ children }) => {
  return (
    <pre>
      <code className="language-tsx">{children}</code>
    </pre>
  );
};
