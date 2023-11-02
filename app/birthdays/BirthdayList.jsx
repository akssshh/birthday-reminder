import Person from "../Person"

async function getBirthdays() {
    const res = await fetch('http://localhost:4000/birthdays', {
        next: {
            revalidate: 0
        }
    })

    return res.json()
}

const BirthdayList = async () => {
    const people = await getBirthdays()
  return (
    <>
    {people.map((person) => {
        return <Person {...person} key={person.id} />
    })}
    
    </>
  )
}

export default BirthdayList