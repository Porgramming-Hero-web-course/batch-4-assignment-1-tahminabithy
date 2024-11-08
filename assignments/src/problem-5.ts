{
    const getProperty = <T, K extends keyof T>(person: T, value: K): T[K] => {
        console.log(person[value]);
        return person[value]
    }
    const person = {
        name: 'Alice',
        age: 30,
        value: 10
    }
    const output = getProperty(person, "name");
}