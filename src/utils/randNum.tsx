const randNum = (max: number): number => {
    let rndNumber: number = Math.random();
    return Math.floor(rndNumber * max);
}

export default randNum;