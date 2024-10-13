export function scaling (vector: number[], scale: number) {
    return vector.map(scalar => scalar * scale)
}

console.log(scaling([5,0,12,4], 2))   // [10, 0, 24, 8]
console.log(scaling([5,0,12,4], .5))  // [2.5, 0, 6, 2]
