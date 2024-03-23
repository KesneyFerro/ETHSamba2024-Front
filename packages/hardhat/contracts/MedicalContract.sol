// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract MedicalContract {
    address public owner;
    string public contractTitle;
    
    
    struct Patient {
        string name;
        string cpf;
        uint256 birthDate;
        uint256 priority;
        address doctorAddress;
         address patientWalletAddress;
        string bloodType;
        uint256 recipientAge;
        uint256 organSize;
        uint256 urgency; // Fator de urgência
        uint256 curability; // Fator de curabilidade
        uint256 qConstant; // Fator Q Constant
        uint256 queueEntryDate; // Data que foi adicionado na fila
    }
    
    struct Record {
        address patientAddress;
        uint256 oldValue;
        uint256 newValue;
        string field;
        address doctorAddress;
        uint256 date;
    }
    
    struct Doctor {
        string crm;
        address doctorAddress;
    }
    
    mapping(address => Record[]) public records;
    mapping(address => Doctor) public doctors;
    mapping(address => Patient[]) public patientsByDoctor;
    // mapping(address => Patient[]) public patientsByAddress;
    Patient[] public allPatients;
    
    constructor(string memory _contractTitle) {
        owner = msg.sender;
        contractTitle = _contractTitle;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }
    
    modifier onlyDoctor() {
        require(doctors[msg.sender].doctorAddress != address(0), "Only registered doctor can call this function");
        _;
    }
    
    function addDoctor(address _doctorAddress, string memory _crm) public onlyOwner {
        require(doctors[_doctorAddress].doctorAddress == address(0), "Doctor already registered");
        
        doctors[_doctorAddress] = Doctor(_crm, _doctorAddress);
    }
    
    function addPatient(
        string memory _name,
        string memory _cpf,
        uint256 _birthDate,
        uint256 _priority,
        string memory _bloodType,
        uint256 _recipientAge,
        address _patientWalletAddress,
        uint256 _organSize,
        uint256 _urgency,
        uint256 _curability,
        uint256 _qConstant
    ) public onlyDoctor {
        patientsByDoctor[msg.sender].push(Patient({
            name: _name,
            cpf: _cpf,
            birthDate: _birthDate,
            priority: _priority,
            doctorAddress: msg.sender,
            patientWalletAddress: _patientWalletAddress,
            bloodType: _bloodType,
            recipientAge: _recipientAge,
            organSize: _organSize,
            urgency: _urgency,
            curability: _curability,
            qConstant: _qConstant,
            queueEntryDate: block.timestamp
        }));
        
        allPatients.push(Patient({
            name: _name,
            cpf: _cpf,
            birthDate: _birthDate,
            priority: _priority,
            doctorAddress: msg.sender,
            patientWalletAddress: _patientWalletAddress,
            bloodType: _bloodType,
            recipientAge: _recipientAge,
            organSize: _organSize,
            urgency: _urgency,
            curability: _curability,
            qConstant: _qConstant,
            queueEntryDate: block.timestamp
        }));

        // patientsByAddress[msg.sender].push(Patient({
        //     name: _name,
        //     cpf: _cpf,
        //     birthDate: _birthDate,
        //     priority: _priority,
        //     doctorAddress: msg.sender,
        //     patientWalletAddress: _patientWalletAddress,
        //     bloodType: _bloodType,
        //     recipientAge: _recipientAge,
        //     organSize: _organSize,
        //     urgency: _urgency,
        //     curability: _curability,
        //     qConstant: _qConstant,
        //     queueEntryDate: block.timestamp
        // }));
    }
    
    function getDoctorCRM(address _doctorAddress) public view returns (string memory) {
        require(doctors[_doctorAddress].doctorAddress != address(0), "Doctor address is not registered");
        
        return doctors[_doctorAddress].crm;
    }
    
    function getAllPatientsByDoctor(address _doctorAddress) public onlyDoctor() view returns (Patient[] memory) {
        return patientsByDoctor[_doctorAddress];
    }

    // function getMyData() public view returns (Patient[] memory) {
    //     return patientsByAddress[msg.sender];
    // }
    
    function getAllPatients() public view returns (Patient[] memory) {
        // if sender is a doctor, return all patients with all data
        if (doctors[msg.sender].doctorAddress != address(0)) {
            return allPatients;
        }

        // if sender is not a doctor, return all expected name and cpf

        Patient[] memory patients = new Patient[](allPatients.length);

        for (uint256 i = 0; i < allPatients.length; i++) {
            patients[i] = Patient({
                name: "",
                cpf: "",
                birthDate: allPatients[i].birthDate,
                priority: allPatients[i].priority,
                doctorAddress: allPatients[i].doctorAddress,
                patientWalletAddress: allPatients[i].patientWalletAddress,
                bloodType: allPatients[i].bloodType,
                recipientAge: allPatients[i].recipientAge,
                organSize: allPatients[i].organSize,
                urgency: allPatients[i].urgency,
                curability: allPatients[i].curability,
                qConstant: allPatients[i].qConstant,
                queueEntryDate: allPatients[i].queueEntryDate
            });
        }
        return patients;
    }
    
    function getTitle() public view returns (string memory) {
        return contractTitle;
    }
    
    function elevatePriority(address _patientAddress, uint256 _newPriority) public onlyDoctor {
        Patient[] storage patients = patientsByDoctor[msg.sender];
        
        for (uint256 i = 0; i < patients.length; i++) {
            if (patients[i].patientWalletAddress == _patientAddress) {
                require(_newPriority > patients[i].priority, "New priority must be higher than current priority");

                records[_patientAddress].push(Record({
                    patientAddress: _patientAddress,
                    oldValue: patients[i].priority,
                    newValue: _newPriority,
                    field: "priority",
                    doctorAddress: msg.sender,
                    date: block.timestamp
                }));
                
                patients[i].priority = _newPriority;
                allPatients[i].priority = _newPriority;
                // patientsByAddress[_patientAddress].priority = _newPriority;
                
                break;
            }
        }
    }

    function getPatientRecords(address _patientAddress) public view returns (Record[] memory) {
        return records[_patientAddress];
    }
    
    function getPatientByAddress(address _patientAddress) public view returns (string memory, string memory, uint256, uint256, address, address, string memory, uint256, uint256, uint256, uint256, uint256, Record[] memory ) {



        for (uint256 i = 0; i < allPatients.length; i++) {
            if (allPatients[i].patientWalletAddress == _patientAddress) {
                address from =payable(msg.sender);
                console.log("from", from);
                console.log("patientAddress", _patientAddress);
                if (from == _patientAddress) {
                    return (
                        allPatients[i].name,
                        allPatients[i].cpf,
                        allPatients[i].birthDate,
                        allPatients[i].priority,
                        allPatients[i].doctorAddress,
                        allPatients[i].patientWalletAddress,
                        allPatients[i].bloodType,
                        allPatients[i].recipientAge,
                        allPatients[i].organSize,
                        allPatients[i].urgency,
                        allPatients[i].curability,
                        allPatients[i].qConstant,
                        records[allPatients[i].patientWalletAddress].length > 0 ? records[allPatients[i].patientWalletAddress] : new Record[](0)
                    );
                }

                return (
                    "",
                    "",
                    allPatients[i].birthDate,
                    allPatients[i].priority,
                    allPatients[i].doctorAddress,
                    allPatients[i].patientWalletAddress,
                    allPatients[i].bloodType,
                    allPatients[i].recipientAge,
                    allPatients[i].urgency,
                    allPatients[i].curability,
                    allPatients[i].qConstant,
                    allPatients[i].queueEntryDate,
                    records[allPatients[i].patientWalletAddress].length > 0 ? records[allPatients[i].patientWalletAddress] : new Record[](0)
                );
            }
        }
        
        revert("Patient not found");
    }
}