import React from 'react';
import './Panel.css';

interface PanelProps {
  headerTitle: string;
  headerIcon?: string;
  headerTextColor?: string;
  headerButtonCloseColor?: string;
  headerButtonCloseVisible?: boolean;
  headerButtonCloseOnClick?: () => void;
  headerButtonCollapseColor?: string;
  headerButtonCollapseVisible?: boolean;
  headerButtonCollapseOnClick?: () => void;
  contentBackgroundColor?: string;
  contentTextColor?: string;
  contentText: string;
  contentButtonColor?: string;
}

export const AldonaPanel: React.FC<PanelProps> = ({
  headerTitle,
  headerIcon,
  headerTextColor = 'black',
  headerButtonCloseColor = 'black',
  headerButtonCloseVisible = false,
  headerButtonCloseOnClick,
  headerButtonCollapseColor = 'black',
  headerButtonCollapseVisible = false,
  headerButtonCollapseOnClick,
  contentBackgroundColor = 'white',
  contentTextColor = 'black',
  contentText,
  contentButtonColor = 'blue',
}) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2 className="panel-header-title" style={{ color: headerTextColor }} >{headerTitle}</h2>
        {headerIcon && <span className={`icon-${headerIcon}`}>{headerIcon}</span>}
        <div className="panel-header-buttons">
          {headerButtonCloseVisible && (
            <button
              onClick={headerButtonCloseOnClick}
              className="panel-header-button"
              style={{ color: headerButtonCloseColor }}
            >
              ✖
            </button>
          )}
          {headerButtonCollapseVisible && (
            <button
              onClick={headerButtonCollapseOnClick}
              className="panel-header-button"
              style={{ color: headerButtonCollapseColor }}
            >
              ⬇
            </button>
          )}
        </div>
      </div>
      <div className="panel-content" style={{ backgroundColor: contentBackgroundColor, color: contentTextColor }}>
        <p>{contentText}</p>
        <button className="panel-content-button" style={{ color: contentButtonColor }}>
          Action
        </button>
      </div>
    </div>
  );
};
