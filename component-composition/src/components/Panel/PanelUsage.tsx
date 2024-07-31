import { Panel, PanelHeader, PanelHeaderButton, PanelContent, PanelContentButton } from './Panel';

export const  PanelUsage = () => {
  const handleClose = () => {
    console.log('Close button clicked');
  };

  const handleCollapse = () => {
    console.log('Collapse button clicked');
  };

  const handleAction = () => {
    console.log('Action button clicked');
  };

  return (
    <>
    <Panel>
      <div>123</div>
    </Panel>
    <Panel>
      <PanelHeader text="My Panel" textColor="blue" headerIcon="🔵">
        <PanelHeaderButton onClick={handleClose} color="black">✖</PanelHeaderButton>
        <PanelHeaderButton onClick={handleCollapse} color="green">⬇</PanelHeaderButton>
      </PanelHeader>
      <PanelContent backgroundColor="lightgray" textColor="black">
        <p>This is the content of the panel.</p>
        <PanelContentButton onClick={handleAction} color="purple">Action</PanelContentButton>
      </PanelContent>
    </Panel></>
  );
};
