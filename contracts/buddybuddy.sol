// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BuddyBuddy {
    string public projectName;
    string public rewardType;
    string private scoringRules; // Private state variable for scoring rules
    uint256 private recurringCount;
    uint256 private eventPeriod;

    // Struct for blob data
    struct BlobData {
        bytes32 blobHash;
        uint256 timestamp;
    }

    BlobData[] public blobs;
    mapping(uint256 => BlobData) public blobById;

    // Event for when blob data is written
    event BlobWritten(address indexed writer, uint256 indexed blobId, bytes32 blobHash);

    // Constructor with scoring rules parameter
    constructor(string memory _projectName, string memory _rewardType, string memory _scoringRules) {
        projectName = _projectName;
        rewardType = _rewardType;
        scoringRules = _scoringRules; // Set scoring rules
    }

    // Function to write blob data
    function writeBlobData(bytes32 blobHash) public {
        BlobData memory newBlob = BlobData({
            blobHash: blobHash,
            timestamp: block.timestamp
        });
        blobs.push(newBlob);
        uint256 blobId = blobs.length - 1;

        blobById[blobId] = newBlob;
        emit BlobWritten(msg.sender, blobId, blobHash);
    }

    // Read functions for blob data
    function readBlobById(uint256 blobId) public view returns (BlobData memory) {
        require(blobId < blobs.length, "Blob ID does not exist.");
        return blobs[blobId];
    }

    function readLatestBlob() public view returns (BlobData memory) {
        require(blobs.length > 0, "No blobs written yet.");
        return blobs[blobs.length - 1];
    }

    // Functions for recurring count and event period
    function setRecurringCount(uint256 _recurringCount) public {
        recurringCount = _recurringCount;
    }

    function getRecurringCount() public view returns (uint256) {
        return recurringCount;
    }

    function setEventPeriod(uint256 _eventPeriod) public {
        eventPeriod = _eventPeriod;
    }

    function getEventPeriod() public view returns (uint256) {
        return eventPeriod;
    }

    // Set and get functions for scoring rules
    function setScoringRules(string memory _scoringRules) public {
        scoringRules = _scoringRules;
    }

    function getScoringRules() public view returns (string memory) {
        return scoringRules;
    }
}
