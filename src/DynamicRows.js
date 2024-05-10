import React from 'react';

export function DynamicRows({ children }) {

  let rows = [];
  const elements = [];

  for (let i = 0; i < children.length; i += 4) {
    elements.push(children.slice(i, i + 4));
  }

  for (let i = 0; i < elements.length; i++) {
    rows.push(
      <div className='row'>
        {elements[i].map((el, j) => {
          return (
            <div className='col-md-3 col-12' key={i * 4 + j}>
              {el}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className='container-fluid'>
      {rows}
    </div>
  );

}
