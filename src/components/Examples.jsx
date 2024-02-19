import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js"
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [Selected, setSelected] = useState(null);

    const handleSelected = (selectedButton) => {
        setSelected(selectedButton);
    }

    const tabContent = !Selected ? <p>Click Topic!</p> :
        <div id="tab-content">
            <h3>{EXAMPLES[Selected].title}</h3>
            <p>{EXAMPLES[Selected].description}</p>
            <pre>
                <code>{EXAMPLES[Selected].code}</code>
            </pre>
        </div>

    return (
        <Section title="Examples" id="examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TabButton isSelected={Selected === 'components'} onClick={() => handleSelected('components')}>Components</TabButton>
                        <TabButton isSelected={Selected === 'jsx'} onClick={() => handleSelected('jsx')}>Jsx</TabButton>
                        <TabButton isSelected={Selected === 'props'} onClick={() => handleSelected('props')}>Props</TabButton>
                        <TabButton isSelected={Selected === 'state'} onClick={() => handleSelected('state')}>State</TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    )
}


