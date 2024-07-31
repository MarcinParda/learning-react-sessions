import React from 'react';
import './Panel.css';

// Panel Component
export const Panel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="panel">{children}</div>;
};

// PanelHeader Component
interface PanelHeaderProps {
  textColor?: string;
  text: string;
  headerIcon?: string;
  children?: React.ReactNode; // For buttons
}

export const PanelHeader: React.FC<PanelHeaderProps> = ({
  textColor = 'black',
  text,
  headerIcon,
  children,
}) => {
  return (
    <div className="panel-header">
      <h2 className="panel-header-title" style={{ color: textColor }}>
        {text}
      </h2>
      {headerIcon && <span>{headerIcon}</span>}
      <div className="panel-header-buttons">{children}</div>
    </div>
  );
};

// PanelHeaderButton Component
interface PanelHeaderButtonProps {
  onClick: () => void;
  color?: string;
}

export const PanelHeaderButton: React.FC<PanelHeaderButtonProps & {children: React.ReactNode}> = ({
  onClick,
  color = 'black',
  children,
}) => {
  return (
    <button onClick={onClick} className="panel-header-button" style={{ color }}>
      {children}
    </button>
  );
};

// PanelContent Component
export const PanelContent: React.FC<{ children: React.ReactNode; backgroundColor?: string; textColor?: string }> = ({
  children,
  backgroundColor = 'white',
  textColor = 'black',
}) => {
  return (
    <div className="panel-content" style={{ backgroundColor, color: textColor }}>
      {children}
    </div>
  );
};

// PanelContentButton Component
interface PanelContentButtonProps {
  onClick: () => void;
  color?: string;
}

export const PanelContentButton: React.FC<PanelContentButtonProps & {children: React.ReactNode}> = ({
  onClick,
  color = 'blue',
  children,
}) => {
  return (
    <button onClick={onClick} className="panel-content-button" style={{ color }}>
      {children}
    </button>
  );
};