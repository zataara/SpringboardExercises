import {choice, remove} from './helpers.js';
import foods from '/.foods.js';




let r = choice(foods);
console.log(`I'd like one ${r}, please`);
console.log(`Here you go: ${r}`)
console.log(`Delicious! MayI have another?`)
remove(r,foods);
conole.log(`I'm sorry, we're all out. We have ${foods.length} left`)