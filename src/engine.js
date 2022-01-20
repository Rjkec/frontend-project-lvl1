const playLogic = (qestion,answer) => {

    if (qestion === answer) {
        console.log('Correct!');
        return true;
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${qestion}`);
    return false
}

export default playLogic; 
