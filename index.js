/**
 * 2d vector
 */
export default class Vector {
  /**
   * @param {Vector} v0
   * @param {Vector} v1
   */
  static add(v0, v1) {
    return new Vector(v0.x + v1.x, v0.y + v1.y);
  }

  /**
   * @param {Vector} v0
   * @param {Vector} v1
   */
  static sub(v0, v1) {
    return new Vector(v0.x - v1.x, v0.y - v1.y);
  }

  /**
   * multiply a vector by a scalar
   *
   * @param {Vector} v
   * @param {Number} s
   * @return {Vector}
   */
  static mult(v, s) {
    return new Vector(v.x * s, v.y * s);
  }

  /**
   * divide a vector by a scalar
   *
   * @param {Vector} v
   * @param {Number} s
   * @return {Vector}
   */
  static div(v, s) {
    return new Vector(v.x / s, v.y / s);
  }

  /**
   * dot product
   *
   * @param {Vector} v0
   * @param {Vector} v1
   * @return {Number}
   */
  static dot(v0, v1) {
    return v0.x * v1.x + v0.y * v1.y;
  }

  /**
   * cross product
   *
   * @param {Vector} v0
   * @param {Vector} v1
   * @return {Number}
   */
  static cross(v0, v1) {
    return v0.x * v1.y - v1.x * v0.y;
  }

  /**
   * the magnitude of a vector
   *
   * @param {Vector} v
   * @return {Number}
   */
  static mag(v) {
    return Math.sqrt(Vector.magSq(v));
  }

  /**
   * the square of the magnitude
   *
   * @param {Vector} v
   * @return {Number}
   */
  static magSq(v) {
    return v.x ** 2 + v.y ** 2;
  }

  /**
   * the direction of a vector
   *
   * @param {Vector} v
   * @return {Number} radian
   */
  static dir(v) {
    return -Math.atan2(-v.y, v.x);
  }

  /**
   * the distance between two vectors
   *
   * @param {Vector} v0
   * @param {Vector} v1
   * @return {Number}
   */
  static dist(v0, v1) {
    return Math.sqrt(Vector.distSq(v0, v1));
  }

  /**
   * the square of the distance between two vectors
   *
   * @param {Vector} v0
   * @param {Vector} v1
   * @return {Number}
   */
  static distSq(v0, v1) {
    return (v0.x - v1.x) ** 2 + (v0.y - v1.y) ** 2;
  }

  /**
   * the angle between two vectors, range [0, PI]
   *
   * @param {Vector} from
   * @param {Vector} to
   * @return {Number} radian
   */
  static angle(from, to) {
    const dotmag = Vector.dot(from, to) / (from.mag() * to.mag());
    return Math.acos(Math.min(1, Math.max(-1, dotmag)));
  }

  /**
   * create a vector by rectangular form
   *
   * @param {Number} x
   * @param {Number} y
   * @return {Vector}
   */
  static create(x, y) {
    return new Vector(x, y);
  }

  /**
   * create a vector by polar form
   *
   * @param {Number} angle radian
   * @param {Number} [mag=1]
   * @return {Vector}
   */
  static fromAngle(angle, mag = 1) {
    return new Vector(mag * Math.cos(angle), mag * Math.sin(angle));
  }

  /**
   * create a unit vector
   *
   * @param {Vector} v
   * @return {Vector}
   */
  static normalize(v) {
    const copy = Vector.clone(v);
    const mag = copy.mag();
    if (mag !== 0) {
      copy.div(mag);
    }
    return copy;
  }

  /**
   * create a new vector copy
   *
   * @param {Vector} v
   * @return {Vector}
   */
  static clone(v) {
    return new Vector(v.x, v.y);
  }

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Vector} v
   * @return {Vector}
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  /**
   * @param {Vector} v
   * @return {Vector}
   */
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  /**
   * multiply a vector by a scalar
   *
   * @param {Number} s
   * @return {Vector}
   */
  mult(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }

  /**
   * divide a vector by a scalar
   *
   * @param {Number} s
   * @return {Vector}
   */
  div(s) {
    this.x /= s;
    this.y /= s;
    return this;
  }

  /**
   * dot product
   *
   * @param {Vector} v
   * @return {Number}
   */
  dot(v) {
    return Vector.dot(this, v);
  }

  /**
   * cross product
   *
   * @param {Vector} v
   * @return {Number}
   */
  cross(v) {
    return Vector.cross(this, v);
  }

  /**
   * the magnitude of a vector
   *
   * @return {Number}
   */
  mag() {
    return Vector.mag(this);
  }

  /**
   * the square of the magnitude
   *
   * @return {Number}
   */
  magSq() {
    return Vector.magSq(this);
  }

  /**
   * the direction of a vector
   *
   * @return {Number} radian
   */
  dir() {
    return Vector.dir(this);
  }

  /**
   * the distance between two vectors
   *
   * @param {Vector} v
   * @return {Number}
   */
  dist(v) {
    return Vector.dist(this, v);
  }

  /**
   * the square of the distance between two vectors
   *
   * @param {Vector} v
   * @return {Number}
   */
  distSq(v) {
    return Vector.distSq(this, v);
  }

  /**
   * the angle between two vectors
   *
   * @param {Vector} to
   * @return {Number} radian
   */
  angle(to) {
    return Vector.angle(this, to);
  }

  /**
   * normalize the vector
   *
   * @return {Vector}
   */
  normalize() {
    const mag = this.mag();
    if (mag !== 0) {
      this.div(mag);
    }
    return this;
  }

  /**
   * create a new vector copy
   *
   * @return {Vector}
   */
  clone() {
    return Vector.clone(this);
  }

  /**
   * set x, y of this vector
   *
   * @param {Number} x
   * @param {Number} y
   * @return {Vector}
   */
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * set x of this vector
   *
   * @param {Number} x
   * @return {Vector}
   */
  setX(x) {
    this.x = x;
    return this;
  }

  /**
   * set y of this vector
   *
   * @param {Number} y
   * @return {Vector}
   */
  setY(y) {
    this.y = y;
    return this;
  }

  /**
   * set the magnitude of this vector
   *
   * @param {Number} mag
   * @return {Vector}
   */
  setMag(mag) {
    return this.normalize().mult(mag);
  }

  /**
   * limit the magnitude of this vector
   *
   * @param {Number} limit
   * @return {Vector}
   */
  limit(limit) {
    const mag = this.mag();
    if (mag > limit) {
      this.mult(limit / mag);
    }
    return this;
  }
}
