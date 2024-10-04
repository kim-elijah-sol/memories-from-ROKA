function interchange(vectors: number[][], line1: number, line2: number) {
    return vectors.map((vector, index) => {
        if (index === line1) return vectors[line2]
        if (index === line2) return vectors[line1]
        return vector
    })
}
