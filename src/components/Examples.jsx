import { EXAMPLES } from "../data";
import { TabButton } from "./TabButton";
import { useState } from "react";
import { Section } from "./Section";
import Tabs from "./Tabs";

export function Examples(){
    const [content, setContent] = useState("")

    function handleSelect(selectedButton){
      setContent(selectedButton)
    }
    return(
        <>
          <Section title="Examples" id="examples">
             <Tabs ButtonsContainer = "menu" buttons={<> 
                <TabButton isSelected={content ==='components'} onSelect= {() => handleSelect ('components')}>Components</TabButton>
                <TabButton isSelected={content ==='props'} onSelect= {() => handleSelect ('props')}>Props</TabButton>
                <TabButton isSelected={content ==='jsx'} onSelect= {() => handleSelect ('jsx')}>JSX</TabButton>
                <TabButton isSelected={content ==='state'} onSelect= {() => handleSelect ('state')}>State</TabButton>
             </>}/>
              {content && <div id="tab-content">
                  
                  <h3>{EXAMPLES[content].title}</h3>
                  <p>{EXAMPLES[content].description}</p>
                  <pre>
                  <code>{EXAMPLES[content].code}</code>
                  </pre>
              </div>}
              {!content && <p>Please select a Topic</p>}
          </Section>
        </>
    )

}