# Let's Talk About RxJS Operators

To be able to first understand Operators, you need to grok what Observables are. An Observable is basically a function that can return a stream of values to an observer over time, this can either be synchronously or asynchronously. In vanilla JavaScript, they can be compared to Arrays.

### So what are Operators?

Operators are what we use to manipulate Observables and then return an entirely new Observable. Now there are two different types of Operators. There are **Pipeable Operators** and **Creation Operators**. Pipeable Operators are Operators that can be piped to Observables to manipulate the data that way.

```js
Observable.pipe(PipeableOperator)
```

Now Creation Operators are operators that make functions that create a new Observable. 

```js
var variable = CreationOperator(data)
```

Operators can be compared to Methods in JavaScript. A great example would be the JavaScript method `map` and the RxJS Operator, `map`! These two are used EXACTLY the same way, `map(x => 10 * x)`.

### Why Use Operators in the First Place?
Now the above example easiest example out there but there is a HUGE [list of Operators](https://www.learnrxjs.io/learn-rxjs/operators) to use! The operators are very aptly named as well with operators such as `merge`, `catchError`, `first`, `repeat`, and `filter`. With such a long list, it's an amazing and very readable way of mutating your data.

I've written up an example of a Creation Operator and a few Pipeable Operators that you can mess around with in [codesandbox](https://codesandbox.io/s/wild-dawn-23lup?fontsize=14&hidenavigation=1&theme=dark&file=/src/script.js)!

<iframe src="https://codesandbox.io/embed/wild-dawn-23lup?fontsize=14&hidenavigation=1&theme=dark"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
title="wild-dawn-23lup"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
---

Sources:

[Coursetro Article](https://coursetro.com/posts/code/150/RxJS-Operators-Tutorial---Learn-How-to-Transform-Observables#:~:text=What%20is%20an%20RxJS%20Operator,and%20return%20a%20new%20observable.&text=Operators%20are%20known%20as%20pure,variables%20outside%20of%20its%20scope.)

[Logrocket Understanding RxJS Observables Blog](https://blog.logrocket.com/understanding-rxjs-observables/)

[RxJS Operators guide](https://rxjs-dev.firebaseapp.com/guide/operators)