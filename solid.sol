// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialManager {
    address public owner;

    // Struct to represent a certificate
    struct Certificate {
        address recipient;
        string course;
        uint256 completionDate;
        bool isIssued;
    }

    // Mapping to store certificates
    mapping(bytes32 => Certificate) public certificates;

    // Event to signal certificate issuance
    event CertificateIssued(address indexed recipient, string course, uint256 completionDate);

    // Modifier to ensure only the owner can perform certain actions
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // Constructor to set the owner
    constructor() {
        owner = msg.sender;
    }

    // Function to issue a certificate
    function issueCertificate(
        address _recipient,
        string memory _course,
        uint256 _completionDate
    ) external onlyOwner {
        bytes32 certificateHash = keccak256(abi.encodePacked(_recipient, _course, _completionDate));
        require(!certificates[certificateHash].isIssued, "Certificate already issued");

        certificates[certificateHash] = Certificate({
            recipient: _recipient,
            course: _course,
            completionDate: _completionDate,
            isIssued: true
        });

        emit CertificateIssued(_recipient, _course, _completionDate);
    }

    // Function to verify a certificate
    function verifyCertificate(
        address _recipient,
        string memory _course,
        uint256 _completionDate
    ) external view returns (bool) {
        bytes32 certificateHash = keccak256(abi.encodePacked(_recipient, _course, _completionDate));
        return certificates[certificateHash].isIssued;
    }
}
