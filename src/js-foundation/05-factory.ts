// const { v4: uuidv4 } = require('uuid');
// const getAge = require('get-age')

// const {getUUID} = require('../plugins/get-id.plugin');
// const {getAge} = require('../plugins/get-age.plugin');
// const {getAge, getUUID} = require('../plugins');

interface BuildMakePersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({
  getUUID,
  getAge,
}: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = {
//     name: 'John',
//     birthdate: '1997-01-15'
// };

// const buildPerson = ({name, birthdate}) => {
//     return {
//         id: getUUID(),
//         name,
//         birthdate,
//         age: getAge(birthdate),
//     }
// }

// const john = buildPerson(obj);

// console.log(john);

// module.exports = {
//     buildMakePerson,
// }

// const makeBuildPerson = () => {
//     return () => {
//         return {

//         }
//     }
// }
