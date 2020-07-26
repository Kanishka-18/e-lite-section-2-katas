function findMultiples(integer, limit) {
    let result = [];
    let multiple = integer;
    if (integer >= 0 && limit > integer) {
        while (multiple <= limit) {
            result.push(multiple);
            multiple += integer;
        }
    }
    return result;
}