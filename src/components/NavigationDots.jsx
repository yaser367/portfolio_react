import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about",  "work", "testimonials", "skills","contact"].map(
        (item, i) => (
          <a key={item+i} 
           href={`#${item}`}
           className='app__navigation-dot'
           style={active === item ? {backgroundColor:'#313BAC'}:{}}
           />
        )
      )}
    </div>
  );
};

export default NavigationDots;
