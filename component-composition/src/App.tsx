import { Panel as BadPanel } from "./components/BadPanel/Panel"
import BadCounter from "./components/Conter/BadCounter"
import FixedCounter from "./components/Conter/FixedCounter"
import { PanelUsage } from "./components/Panel/PanelUsage"
import { Panel, PanelBody, PanelHeader } from "./components/Panel/SimplePanel"
import { PanelWitSwappableContent as BadPanelWitSwappableContent } from "./components/BadPanel/PanelWithSwappableContent"
import { AldonaPanel } from "./components/Aldona/SwappablePanel"
import { AlonaPanel } from "./components/Alona/SwappablePanel"
import { JolantaPanel } from "./components/TemplatePanel Jola/SwappablePanel"
import { WojciechPanel } from "./components/Wojciech/SwappablePanel"

function App() {
  return (
    <div>
      {/* <BadPanel
        headerTitle="Panel title"
        headerIcon="📦"
        headerTextColor="brown"
        headerButtonCloseColor="red"
        headerButtonCloseVisible={true}
        headerButtonCloseOnClick={() => console.log('Close clicked')}
        headerButtonCollapseColor="black"
        headerButtonCollapseVisible={true}
        headerButtonCollapseOnClick={() => console.log('Collapse clicked')}
        contentBackgroundColor="white"
        contentTextColor="black"
        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc tortor aliquam nisl, eget ultricies lorem ipsum vitae nunc."
        contentButtonColor="blue"
      /> */}

      {/* <AldonaPanel
        headerTitle="Aldona"
        headerIcon="📦"
        headerTextColor="brown"
        headerButtonCloseColor="red"
        headerButtonCloseVisible={true}
        headerButtonCloseOnClick={() => console.log('Close clicked')}
        headerButtonCollapseColor="black"
        headerButtonCollapseVisible={true}
        headerButtonCollapseOnClick={() => console.log('Collapse clicked')}
        contentBackgroundColor="white"
        contentTextColor="black"
        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc tortor aliquam nisl, eget ultricies lorem ipsum vitae nunc."
        contentButtonColor="blue"
      />

      <AlonaPanel
        headerTitle="Alona"
        headerIcon="📦"
        headerTextColor="brown"
        headerButtonCloseColor="red"
        headerButtonCloseVisible={true}
        headerButtonCloseOnClick={() => console.log('Close clicked')}
        headerButtonCollapseColor="black"
        headerButtonCollapseVisible={true}
        headerButtonCollapseOnClick={() => console.log('Collapse clicked')}
        contentBackgroundColor="white"
        contentTextColor="black"
        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc tortor aliquam nisl, eget ultricies lorem ipsum vitae nunc."
        contentButtonColor="blue"
        swapContextWithActionButton
      />

      <JolantaPanel
        headerTitle="Jola"
        headerIcon="📦"
        headerTextColor="brown"
        headerButtonCloseColor="red"
        headerButtonCloseVisible={true}
        headerButtonCloseOnClick={() => console.log('Close clicked')}
        headerButtonCollapseColor="black"
        headerButtonCollapseVisible={true}
        headerButtonCollapseOnClick={() => console.log('Collapse clicked')}
        contentBackgroundColor="white"
        contentTextColor="black"
        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc tortor aliquam nisl, eget ultricies lorem ipsum vitae nunc."
        contentButtonColor="blue"
        swapContextWithActionButton
      />

      <WojciechPanel
        headerTitle="Wojciech"
        headerIcon="📦"
        headerTextColor="brown"
        headerButtonCloseColor="red"
        headerButtonCloseVisible={true}
        headerButtonCloseOnClick={() => console.log('Close clicked')}
        headerButtonCollapseColor="black"
        headerButtonCollapseVisible={true}
        headerButtonCollapseOnClick={() => console.log('Collapse clicked')}
        contentBackgroundColor="white"
        contentTextColor="black"
        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc tortor aliquam nisl, eget ultricies lorem ipsum vitae nunc."
        contentButtonColor="blue"
        swapContextWithActionButton
      /> */}
      
      {/* <BadPanelWitSwappableContent
        headerTitle="Panel title"
        headerIcon="📦"
        headerTextColor="brown"
        headerButtonCloseColor="red"
        headerButtonCloseVisible={true}
        headerButtonCloseOnClick={() => console.log('Close clicked')}
        headerButtonCollapseColor="black"
        headerButtonCollapseVisible={true}
        headerButtonCollapseOnClick={() => console.log('Collapse clicked')}
        contentBackgroundColor="white"
        contentTextColor="black"
        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc tortor aliquam nisl, eget ultricies lorem ipsum vitae nunc."
        contentButtonColor="blue"
        swapContextWithActionButton
      />

      <PanelUsage /> */}
      {/* <BadCounter /> */}
      <FixedCounter />
    </div>
  )
}

export default App
