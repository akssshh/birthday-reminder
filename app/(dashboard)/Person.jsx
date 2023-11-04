import Image from "next/image";

const Person = (person) => {
    const { id, image, name, age } = person;
    return (
      <article className="person" key={id}>
        <Image src={image} width={100} height={100} className="img" alt="avatar" />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    );
  };
  
  export default Person;