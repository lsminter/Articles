import { of } from "rxjs";
import { map, repeat, first } from 'rxjs/operators';

// of is an example of a Creation Operator
let foo = of('a', 'b', 'c', 'd')

foo.subscribe(
  (x) => console.log('Of Operator Example: ' + x)
)

// first is an example of a Pipeable Operator
let firstLetter = foo.pipe(first())

firstLetter.subscribe(
  (x) => console.log('First Operator Example ' + x)
)

// map and repeat are examples of Pipeable Operators
let mapExample = foo.pipe(map(x => x.toUpperCase()), repeat(2));

mapExample.subscribe(
  (x) => console.log('Map and Repeat Operator Examples: ' + x),
);