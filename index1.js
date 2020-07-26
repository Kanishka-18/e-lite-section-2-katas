function checkExam(array1, array2) {
    let totalScore = 0;
    if (array1.length === array2.length && array1.length > 0) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]) {
                totalScore += 4;
            } else if (array2[i] === "") {

            } else {
                totalScore -= 1;
            }
        }
        if (totalScore < 0) {
            totalScore = 0;
        }
        return totalScore;
    }