# Component Composition

1. Show BadPanel
2. Ask them to try add swappable component, (context and action button) and let them do it
3. Then ask for two things. Ask them to implement swappable panel header & panel content + make a error panel. But only ask how them would gonna do it without forcing them to do it. The point is to let know that it would take a bunch of time.
4. Show how it is done in HTML & some UI libraries
5. Show simple impmlementation of Panel
6. Task: Rewrite `BadPanel.tsx` to usage look something like this Copy `PanelUsage.tsx` create `Panel.tsx` and work on it:
```tsx
    <Panel>
      <PanelHeader text="My Panel" textColor="blue" headerIcon="🔵">
        <PanelHeaderButton onClick={handleClose} color="red">✖</PanelHeaderButton>
        <PanelHeaderButton onClick={handleCollapse} color="green">⬇</PanelHeaderButton>
      </PanelHeader>
      <PanelContent backgroundColor="lightgray" textColor="black">
        <p>This is the content of the panel.</p>
        <PanelContentButton onClick={handleAction} color="purple">Action</PanelContentButton>
      </PanelContent>
    </Panel>
```
7. Show how component composition helps with rerenders optimalizations on BadCounter & Counter example