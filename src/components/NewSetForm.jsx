import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { flashActions } from '../store/flashcards';

const NewSetForm = () => {
  const nameRef = useRef();
  const descrRef = useRef();
  const dispatch = useDispatch();

  const createSet = (event) => {
    event.preventDefault();

    const response = fetch(
      'https://flashcards-app-c0c92-default-rtdb.firebaseio.com/flashcards/sets.json',
      {
        method: 'POST',
        body: JSON.stringify({
          name: nameRef.current.value,
          description: descrRef.current.value,
          flashcards: [{ term: 'chair', def: 'стул' }],
        }),
      }
    );

    // if (!response.ok) {
    //   throw new Error('Could not fetch cart data!');
    // }
    // const data = response.json();

    dispatch(
      flashActions.createSet({
        name: nameRef.current.value,
        description: descrRef.current.value,
        flashcards: [],
      })
    );
  };
  return (
    <form onSubmit={createSet}>
      <label htmlFor="name">Term</label>
      <input
        ref={nameRef}
        type="text"
        name="name"
        id="name"
        placeholder="Enter Term"
        // defaultValue={props.name}
      />

      <label htmlFor="description">Definition</label>
      <input
        ref={descrRef}
        type="text"
        name="description"
        id="description"
        placeholder="Enter Description"
        // defaultValue={props.def}
      />
      <button>Create new set</button>
    </form>
  );
};

export default NewSetForm;
