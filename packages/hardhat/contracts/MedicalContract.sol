//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author João Marinho
 */
contract MedicalContract {
    address public owner;
    string public contractTitle;
    
    struct Patient {
        string name;
        string cpf;
        uint256 age;
        uint256 priority;
        string necessity;
        address doctorAddress;
    }
    
    struct Doctor {
        address doctorAddress;
        string crm;
    }
    
    mapping(address => Doctor) public doctors;
    mapping(address => Patient[]) public patientsByDoctor;
    Patient[] public allPatients;
    
    constructor(string memory _contractTitle) {
        owner = msg.sender;
        contractTitle = _contractTitle;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }
    
    // add onlyOwner afer public
    function addDoctor(address _doctorAddress, string memory _crm) public  {
        doctors[_doctorAddress] = Doctor(_doctorAddress, _crm);
    }
    
    function addPatient(string memory _name, string memory _cpf, uint256 _age, uint256 _priority, string memory _necessity) public {
        require(doctors[msg.sender].doctorAddress != address(0), "Doctor address is not registered");
        
        patientsByDoctor[msg.sender].push(Patient(_name, _cpf, _age, _priority, _necessity, msg.sender));
        allPatients.push(Patient(_name, _cpf, _age, _priority, _necessity, msg.sender));
    }
    
    
    function getAllPatientsByDoctor(address _doctorAddress) public view returns (Patient[] memory) {
        return patientsByDoctor[_doctorAddress];
    }

    function getAllPatients() public view returns (Patient[] memory) {
        return allPatients;
    }

    function getDoctorCRM(address _doctorAddress) public view returns (string memory) {
        require(doctors[_doctorAddress].doctorAddress != address(0), "Doctor address is not registered");
        
        return doctors[_doctorAddress].crm;
    }
    
    function getTitle() public view returns (string memory) {
        return contractTitle;
    }
}