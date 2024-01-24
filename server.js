import client from "./src/db/index.js"

const listOfUsers = [
    {
        name: "Vignesh",
        age: 21,
        skills: ['React JS', 'Node JS', 'Redux']
    },
    {
        name: "Shyam",
        age: 22,
        skills: ['React JS', 'Node JS', 'Express JS']
    },
    {
        name: "Magesh",
        age: 23,
        skills: ['Node JS', 'React JS', 'Fastify']
    }
]


async function run() {
    try {
        const dataBase = client.db('mongo_testing')
        const persons = dataBase.collection('persons')

        // const response = await persons.insertMany(listOfUsers)

        const users = await persons.find()
        const data = await users.toArray()
        
        console.log("Response", data);
    }
    catch (error) {
        console.log("Error :", error)
    }
    finally {
        client.close();
    }
}

run();