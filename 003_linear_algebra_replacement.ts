export function replacement(matrix: number[][], targetIndex: number, toIndex: number) {
    return matrix.map((vector, index) => index === targetIndex ? vector.map((scalar, index) => scalar - matrix[toIndex][index]) : vector)
}

console.log(replacement(
    [
        [2,1,4],
        [0,6,9],
        [2,0,1]
    ],
    2,0
)) // [[2, 1, 4], [0, 6, 9], [0, -1, -3]] 
