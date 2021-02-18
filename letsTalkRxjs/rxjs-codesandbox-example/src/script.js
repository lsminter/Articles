import { of } from "rxjs";
import { map, repeat, first } from 'rxjs/operators';

// of is an example of a Creation Operator
let foo = of('a', 'b', 'c', 'd')

// Example of first Operator, Pipeable Operator
let firstLetter = foo.pipe(first())

firstLetter.subscribe(
  (x) => console.log('First Operator Example ' + x)
)

// Example of map and repeat Operators, Pipeable Operators
let mapExample = foo.pipe(map(x => x.toUpperCase()));

let result = mapExample.pipe(repeat(1));


result.subscribe(
  (x) => console.log('next ' + x),
);