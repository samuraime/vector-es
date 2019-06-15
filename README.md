# vector-2d [![CircleCI](https://circleci.com/gh/samuraime/vector-2d.svg?style=svg)](https://circleci.com/gh/samuraime/vector-2d) [![Coverage Status](https://coveralls.io/repos/github/samuraime/vector-2d/badge.svg?branch=master)](https://coveralls.io/github/samuraime/vector-2d?branch=master)

a 2d vector `{ x, y }` for math / physics

## Install

```sh
npm install vector-2d
```

## Usage

```js
import Vector from 'vector-2d';

const vector = new Vector(1, 2);
vector.mult(2); // { x: 2, y 4}
```

or

```js
import { create, mult } from 'vector-2d';

const vector = create(1, 2);
const doubleVector = mult(vector, 2); // { x: 2, y 4}
```

## API

### Vector

`constructor :: (Number, Number) -> Vector`

### Properties

  a vector is shape of `{ x, y }`

  - `x`
  - `y`

### Static methods

All static methods are immutable.

#### operators

- `add :: (Vector, Vector) -> Vector`
  
  add two vectors

- `sub :: (Vector, Vector) -> Vector`

  subtract one vector from another.

- `mult :: (Vector, Number) -> Vector`
  
  multiply by scalar

- `div :: (Vector, Number) -> Vector`
  
  divide by scalar

- `dot :: (Vector, Vector) -> Number`

  dot product

- `cross :: (Vector, Vector) -> Number`

  cross product

#### evaluate

- `mag :: Vector -> Number`

  the magnitude of a vector

- `magSq :: Vector -> Number`

  the square of the magnitude

- `dir :: Vector -> Number`

  the direction of a vector

- `dist :: (Vector, Vector) -> Number`

  the distance between two vectors

- `distSq :: (Vector, Vector) -> Number`

  the square of the distance between two vectors

- `angle :: (Vector, Vector) -> Number`

  the angle between two vectors, range [0, PI]

#### create

- `create :: (Number, Number) -> Vector`

  create a vector by rectangular form

- `fromAngle :: (Number, Number) -> Vector`

  create a vector by angle

- `normalize :: Vector -> Vector`

  normalize the vector to a length of 1

- `clone :: Vector -> Vector`

  create a new vector copy

### Instance methods

All instance methods are very similar to the statics. there're two differences.

  - `first argument`

    instance methods don't need first argument, it's itself.

  - `mutable`

    most of methods are mutable.

#### operators

- `add :: Vector -> Vector`

  adds a vector

- `sub :: Vector -> Vector`

  subtract from another vector

- `mult :: Number -> Vector`

  multiply a vector by a scalar

- `div :: Number -> Vector`

  divide a vector by a scalar

- `dot :: Vector -> Number`

  dot product

- `cross :: Vector -> Number`

  cross product

#### evaluate

- `mag :: () -> Number`

  the magnitude of a vector

- `magSq :: () -> Number`

  the square of the magnitude

- `dir :: () -> Number`

  the direction of a vector

- `dist :: Vector -> Number`

  the distance between two vectors

- `distSq :: Vector -> Number`

  the square of the distance between two vectors

- `angle :: Vector -> Number`

  the angle between two vectors, range [0, PI]

#### create

- `clone :: () -> Vector`

  create a vector copy, this's an immutable method

- `normalize :: () -> Vector`

  create a unit vector

#### manipulate

- `set :: (Number, Number) -> Vector`
  
  set x, y of this vector

- `setX :: Number -> Vector`

  set x of this vector

- `setY :: Number -> Vector`

  set y of this vector

- `setMag :: Number -> Vector`

  set the magnitude of this vector

- `limit :: Number -> Vector`

  limit the magnitude of this vector

## License

[MIT](./LICENSE)
