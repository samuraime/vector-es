import Vector from '..';

describe('constrctor', () => {
  test('constructor', () => {
    const vector = new Vector(1, 2);
    expect(vector).toEqual({ x: 1, y: 2 });
  });
});

describe('static methods', () => {
  test('add', () => {
    const a = new Vector(1, 2);
    const b = new Vector(3, 4);
    const result = Vector.add(a, b);
    expect(result).toEqual({ x: 4, y: 6 });
  });

  test('sub', () => {
    const a = new Vector(1, 2);
    const b = new Vector(3, 4);
    const result = Vector.sub(a, b);
    expect(result).toEqual({ x: -2, y: -2 });
  });

  test('mult', () => {
    const a = new Vector(1, 2);
    const result = Vector.mult(a, 2);
    expect(result).toEqual({ x: 2, y: 4 });
  });

  test('div', () => {
    const a = new Vector(1, 2);
    const result = Vector.div(a, 2);
    expect(result).toEqual({ x: 0.5, y: 1 });
  });

  test('dot', () => {
    const a = new Vector(1, 2);
    const b = new Vector(3, 4);
    const result = Vector.dot(a, b);
    expect(result).toEqual(11);
  });

  test('cross', () => {
    const a = new Vector(1, 2);
    const b = new Vector(3, 4);
    const result = Vector.cross(a, b);
    expect(result).toEqual(-2);
  });

  test('mag', () => {
    const b = new Vector(3, 4);
    const result = Vector.mag(b);
    expect(result).toEqual(5);
  });

  test('magSq', () => {
    const b = new Vector(3, 4);
    const result = Vector.magSq(b);
    expect(result).toEqual(25);
  });

  test('dir', () => {
    const a = new Vector(1, 1);
    const result = Vector.dir(a);
    expect(result).toEqual(Math.PI / 4);
  });

  test('dist', () => {
    const a = new Vector(1, 2);
    const b = new Vector(1, 4);
    const result = Vector.dist(a, b);
    expect(result).toEqual(2);
  });

  test('distSq', () => {
    const a = new Vector(1, 2);
    const b = new Vector(1, 4);
    const result = Vector.distSq(a, b);
    expect(result).toEqual(4);
  });

  test('angle', () => {
    const a = new Vector(0, 1);
    const b = new Vector(1, 1);
    const result = Vector.angle(a, b);
    expect(result).toBeCloseTo(Math.PI / 4, 10);
  });

  test('create', () => {
    const result = Vector.create(1, 1);
    expect(result).toEqual({ x: 1, y: 1 });
  });

  test('fromAngle', () => {
    const result = Vector.fromAngle(0, 2);
    expect(result).toEqual({ x: 2, y: 0 });
  });

  test('normalize', () => {
    const a = new Vector(2, 3);
    const result = Vector.normalize(a);
    expect(result.mag()).toEqual(1);
  });

  test('clone', () => {
    const a = new Vector(2, 3);
    const result = Vector.clone(a);
    expect(result).toEqual(a);
  });
});


describe('instance methods', () => {
  test('add', () => {
    const a = new Vector(1, 2);
    const b = new Vector(3, 4);
    a.add(b);
    expect(a).toEqual({ x: 4, y: 6 });
  });

  test('sub', () => {
    const a = new Vector(1, 2);
    const b = new Vector(3, 4);
    a.sub(b);
    expect(a).toEqual({ x: -2, y: -2 });
  });

  test('mult', () => {
    const a = new Vector(1, 2);
    a.mult(2);
    expect(a).toEqual({ x: 2, y: 4 });
  });

  test('div', () => {
    const a = new Vector(1, 2);
    a.div(2);
    expect(a).toEqual({ x: 0.5, y: 1 });
  });

  test('dot', () => {
    const a = new Vector(1, 2);
    const b = new Vector(3, 4);
    const result = a.dot(b);
    expect(result).toEqual(11);
  });

  test('cross', () => {
    const a = new Vector(1, 2);
    const b = new Vector(3, 4);
    const result = a.cross(b);
    expect(result).toEqual(-2);
  });

  test('mag', () => {
    const b = new Vector(3, 4);
    const result = b.mag();
    expect(result).toEqual(5);
  });

  test('magSq', () => {
    const b = new Vector(3, 4);
    const result = b.magSq();
    expect(result).toEqual(25);
  });

  test('dir', () => {
    const a = new Vector(1, 1);
    const result = a.dir();
    expect(result).toEqual(Math.PI / 4);
  });

  test('dist', () => {
    const a = new Vector(1, 2);
    const b = new Vector(1, 4);
    const result = a.dist(b);
    expect(result).toEqual(2);
  });

  test('distSq', () => {
    const a = new Vector(1, 2);
    const b = new Vector(1, 4);
    const result = a.distSq(b);
    expect(result).toEqual(4);
  });

  test('angle', () => {
    const a = new Vector(0, 1);
    const b = new Vector(1, 1);
    const result = a.angle(b);
    expect(result).toBeCloseTo(Math.PI / 4, 10);
  });

  test('normalize', () => {
    const a = new Vector(2, 3);
    a.normalize();
    expect(a.mag()).toEqual(1);
  });

  test('clone', () => {
    const a = new Vector(2, 3);
    const result = a.clone();
    expect(result).toEqual(a);
  });

  test('set', () => {
    const a = new Vector(2, 3);
    a.set(4, 5);
    expect(a).toEqual({ x: 4, y: 5 });
  });

  test('setX', () => {
    const a = new Vector(2, 3);
    a.setX(5);
    expect(a).toEqual({ x: 5, y: 3 });
  });

  test('setY', () => {
    const a = new Vector(2, 3);
    a.setY(5);
    expect(a).toEqual({ x: 2, y: 5 });
  });

  test('setMag', () => {
    const a = new Vector(6, 8);
    a.setMag(5);
    expect(a).toEqual({ x: 3, y: 4 });
  });

  test('limit', () => {
    const a = new Vector(6, 8);
    a.limit(5);
    expect(a).toEqual({ x: 3, y: 4 });

    const b = new Vector(1, 1);
    b.limit(5);
    expect(b).toEqual({ x: 1, y: 1 });
  });
});
