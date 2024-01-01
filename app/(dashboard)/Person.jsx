import Image from "next/image";

const Person = (person) => {
    const { id, image, name, age, birthdate } = person;
    return (
      <article className="person" key={id}>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          <p className="pt-2" >{birthdate}</p>
        </div>
      </article>
    );
  };
  
  export default Person;