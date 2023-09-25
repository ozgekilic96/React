import React from "react";

const Hello = () => {
/*   return (
    <div>
      <h1>Hello Ozge</h1>
    </div>
  ) */
  return React.createElement(
    'div',
     {id: 'Hello', className: 'dummyClass'},
     React.createElement('h1', null, 'Hello Ozge')
  )
}
export default Hello
