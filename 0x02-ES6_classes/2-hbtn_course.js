export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, 'Name');
    this._validateNumber(length, 'Length');
    this._validateArray(students, 'Students');
  
    this._name = name;
    this._length = length;
    this._students = students;
  }
  
  get name() {
    return this._name;
  }
  
  set name(newName) {
    this._validateString(newName, 'Name');
    this._name = newName;
  }
  
  get length() {
    return this._length;
  }
  
  set length(newLength) {
    this._validateNumber(newLength, 'Length');
    this._length = newLength;
  }
  
  get students() {
    return this._students;
  }
  
  set students(newStudents) {
    this._validateArray(newStudents, 'Students');
    this._students = newStudents;
  }
  
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
  }
  
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
  }
  
  _validateArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array`);
    }
  }
}
