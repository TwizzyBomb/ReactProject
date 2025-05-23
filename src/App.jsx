import { useState, Fragment } from 'react';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data-with-examples.js';
import CoreConcept from './components/CoreConcept.jsx'
import Header from './components/Header/Header.jsx'
import TabButton from './components/TabButton.jsx'



function App() { // spread operator

const [selectedTopic , setSelectedTopic ] = useState();

function handleSelect(selectedButton) {
  // selectedButton => 'components', 'jsx', 'props', 'state' 4 identifiers that should be recieved through that parameter
  setSelectedTopic(selectedButton);
  console.log(selectedTopic);
}

let tabContent = <p>Please select a topic.</p>;

if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div> 
  )
}

  return (
    <Fragment>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelected={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelected={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}  onSelected={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}  onSelected={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
