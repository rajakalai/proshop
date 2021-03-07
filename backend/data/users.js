import bcrypt from 'bcryptjs'
const users = [
    {
        name:"Abdul fasith",
        email:"abdul13@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name:"Raja sekar",
        email:"raja123@gmail.com",
        password:  bcrypt.hashSync('123456', 10),
    },
    {
        name:"Natrajan Vasan",
        email:"nat123@gmail.com",
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;