import React, { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <>
            <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
          </>
        ) : (
          <input type="text" required value={name}/>
        )}
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
