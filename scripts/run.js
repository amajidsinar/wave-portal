const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    
    console.log("Contract deployed to", waveContract.address);
    console.log("Contract deployed by", owner.address)
    
    let waveCount;
    let ownerWaves;
    let randomPersonWaves;

    waveCount = await waveContract.getTotalWaves();
    console.log("We have %d waves", waveCount.toString())

    waveTxn = await waveContract.wave();
    await waveTxn.wait()
    console.log("%s just waved",owner.address);
    
    waveCount = await waveContract.getTotalWaves();
    console.log("We have %d waves", waveCount.toString())

    waitTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait()
    console.log("%s just waved",randomPerson.address)

    waveCount = await waveContract.getTotalWaves();
    console.log("We have %d waves", waveCount.toString())

    waveTxn = await waveContract.wave();
    await waveTxn.wait()
    console.log("%s just waved",owner.address);
    
    ownerWaves = await waveContract.getUserWaves(owner.address)
    console.log("%s have waved %d times", owner.address, ownerWaves)

    randomPersonWaves = await waveContract.getUserWaves(randomPerson.address)
    console.log("%s have waved %d times", randomPerson.address, ownerWaves)
    

}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error){
        console.log(error);
        process.exit(1)
    }
}

runMain();