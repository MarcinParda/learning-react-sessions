interface PanelProps {
    title: string;
  }
  
  interface ParentProps {
    children: React.ReactNode;
  }

interface PanelProps {
  title: string;
}

export const Panel = ({ title, children }: PanelProps & ParentProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

// PanelHeader.tsx
export const PanelHeader = ({ children }: ParentProps) => {
  return <header>{children}</header>;
};

export const PanelBody = ({ children }: ParentProps) => {
    return <main>{children}</main>;
};


{/* <Panel title="Panel">
  <PanelHeader>
    <h3>Header</h3>
  </PanelHeader>
  <PanelBody>
    <p>Body</p>
  </PanelBody>
</Panel> */}