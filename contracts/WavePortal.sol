// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping(address => uint256) public data;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        data[msg.sender] += 1;
    }

    function getTotalWaves() public view returns (uint256) {
        // console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }

    function getUserWaves(address _address) public view returns (uint256) {
        return data[_address];
    }
}
