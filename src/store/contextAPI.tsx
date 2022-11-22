import React, { createContext } from 'react';

export const EditorContext = createContext({});

interface InterfaceEditorProvider {
  children: React.ReactNode;
};

export const EditorProvider = ({ children }: InterfaceEditorProvider) => {
  const [blocks, setBlocks] = React.useState([]);

  return (
    <EditorContext.Provider value={{
      blocks,
      setBlocks,
    }}>
      {children}
    </EditorContext.Provider>
  );
};
