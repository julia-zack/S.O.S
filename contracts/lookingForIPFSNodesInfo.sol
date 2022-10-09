// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import Ownable from the OpenZeppelin Contracts library
import "@openzeppelin/contracts/access/Ownable.sol";

contract lookingForIPFSNodesInfo is Ownable {
    string[] hashesList;

    function addHashFiles(string calldata _hash) public onlyOwner(){
        hashesList.push(_hash);
    }

    function seeHashsFiles() public view returns (string[] memory) {
        return hashesList;
    }

}