// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC721Receiver {
    function onERC721Received(address operator, address _from, uint tokenId, bytes calldata data) external returns(bytes4);
}