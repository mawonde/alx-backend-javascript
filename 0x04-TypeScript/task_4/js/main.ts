/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/Java.ts" />
/// <reference path="./js/subjects/React.ts" />
/// <reference path="./js/subjects/cTeacher.ts" />

import { Subjects } from './js/subjects';

// Cpp Subject
console.log('C++');
Subjects.cpp.setTeacher(Subjects.cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// Java Subject
console.log('\nJava');
Subjects.java.setTeacher(Subjects.cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// React Subject
console.log('\nReact');
Subjects.react.setTeacher(Subjects.cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
