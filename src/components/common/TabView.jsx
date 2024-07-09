import { useState } from "react"
//import '../styles/components/tabs.css';

export function TabView({headings=[], contents=[]}) {
  const [selectedHeading, setSelectedHeading] = useState((headings.length) ? 0 : -1);
  const handleClick  = (index) => {
    setSelectedHeading(index);
  }

  return (
    <div class="tabs" onClick={handleClick}>
      <ul class="tabs-header">
      {headings.map((heading, index) => {
        return <li 
                id={index} 
                style={
                  (selectedHeading === index) ? {color: '#A741FF'} : null
                } 
                onClick={() => console.log('link clicked')}
                >
                  {heading}
                </li>
      })}
      </ul>
      <ul class="tabs-content">
        {
          (selectedHeading === -1) ? null : contents[selectedHeading]
        }
      </ul>
    </div>
  )
}
