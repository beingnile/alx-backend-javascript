interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'New York',
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    location: 'New York',
};

const studentsList: Student[] = [ student1, student2 ];

// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table, each containing firstName and location.


