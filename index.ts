const firstName: string = "Faruk";
const lastName: string = "Aminu";
const collection: number[] = [1, 1, 1, 2, 1, 2, 4, 3, 4];

function addNumbers(a: number, b: number) {
    return a + b;
}

let sum = collection.reduce((accum, curr) => accum + curr, 0);
const removeDuplicates = new Set(collection);
console.log(Array.from(removeDuplicates))

const makeUnique = (arr: number[]) => arr.filter((value, index, self) => self.indexOf(value) === index);
// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = makeUnique(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

const nameLists: string[] = ["Malik", "Faruk", "John", "Fatima", "Jerry", "Glad"];
const order = nameLists.sort((a: string, b: string) => {
    return a.localeCompare(b);
});
console.log(order)