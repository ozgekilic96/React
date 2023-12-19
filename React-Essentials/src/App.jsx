// app.js
import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept {...conceptItem} />
          ))}

        </ul>
      </section>
      <section id="examples">
        <h2> Examples </h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Component</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        {!selectedTopic ? <p> Please select a topic </p> : null}
        {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p> {EXAMPLES[selectedTopic].description} </p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code} </code>
            </pre>
          </div>
        ) : null}
        
      </section>
    </div>
  );
}

export default App;
