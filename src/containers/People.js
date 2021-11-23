import React, { useState } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { personUpdate } from "../action/personUpdate";

const People = ({ data, personUpdateFunc }) => {
  /* 
    　　const [people, setPeople] = useState([]);
  */

  const personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "John",
      age: Math.floor(Math.random() * 40),
    };

    personUpdateFunc("add", newPerson);

    /*
        setPeople((prevState) => {
        return [...prevState, newPerson];
        });
    */
  };

  const personDeletedHandler = (person) => {
    /*
        setPeople((prevState) => {
        return prevState.filter((person) => person.id !== personId);
        });
    */
    personUpdateFunc("delete", person);
  };

  return (
    <div>
      <AddPerson personAdded={personAddedHandler} />
      {data.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => personDeletedHandler(person)}
        />
      ))}
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    data: state.personData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    personUpdateFunc: (action, key) => dispatch(personUpdate(action, key)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(People);
