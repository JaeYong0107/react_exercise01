import { useState } from "react";
import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TapButton from "./components/TapButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js"


function App() {

  const [Selected, setSelected] = useState(null);

  const handleSelected = (selectedButton) => {
    setSelected(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!!</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelected={() => handleSelected('components')}>Components</TapButton>
            <TapButton onSelected={() => handleSelected('jsx')}>Jsx</TapButton>
            <TapButton onSelected={() => handleSelected('props')}>Props</TapButton>
            <TapButton onSelected={() => handleSelected('state')}>State</TapButton>
          </menu>
          {!Selected ? <p>Click Topic!</p> :
            <div id="tab-content">
              <h3>{EXAMPLES[Selected].title}</h3>
              <p>{EXAMPLES[Selected].description}</p>
              <pre>
                <code>{EXAMPLES[Selected].code}</code>
              </pre>
            </div>}

        </section>
      </main>

    </div>
  );
}

export default App;
