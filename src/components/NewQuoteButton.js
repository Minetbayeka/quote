import React from 'react'

const NewQuoteButton = ({onclick}) => {
  return (
    <div className='button'>
        <button onClick={onclick}>Fetch New Quote</button>
      
    </div>
  )
}
/*function NewQuoteButton({ onClick }) {
  return <button onClick={onClick}>New Quote</button>;
}*/

export default NewQuoteButton
