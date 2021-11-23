import { PERSON_UPDATE } from "../action/personUpdate";

const initState = {
  personData: [],
};

export const personReducer = (state = initState, action) => {
  // const = action
  switch (action.type) {
    case PERSON_UPDATE:
      console.log(action);
      let newPersonState = [...state.personData];

      if (action.payload.action === "delete") {
        newPersonState = newPersonState.filter((person) => {
          return person.id !== action.payload.person.id;
        });
      } else if (action.payload.action === "add") {
        newPersonState.push(action.payload.person);
      }
      console.log(newPersonState);
      return { ...state, personData: newPersonState };
    default:
      return state;
  }
};
