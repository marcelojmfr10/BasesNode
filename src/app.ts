// const {getAge, getUUID} = require('./plugins');

import { getPokemonById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugin";

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
// const {buildMakePerson} = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises');

// const logger = buildLogger('app.js');
// logger.log('Hola Mundo');
// logger.error('Esto es algo malo');

// getPokemonById(4, (pokemon) => console.log({pokemon}));
getPokemonById(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log(err))
  .finally(() => console.log("finalmente"));

// token de acceso
// públicas

// console.log(name);

// const makePerson = buildMakePerson({getUUID, getAge})
// const obj = {
//     name: 'John',
//     birthdate: '1997-01-15'
// };

// const john = makePerson(obj);

// console.log(john);

// const id = 2;
// getUserById(id, (error, user) => {
//     if (error) throw new Error(error);

//     console.log({user});
// });

// console.log(emailTemplate);

// console.log('hola mundo desde app.js');
