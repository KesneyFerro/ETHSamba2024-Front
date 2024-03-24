// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract MedicalContract {
    address public owner;
    string public contractTitle;

    string[] public RandomName = ['Joao', 'Maria', 'Jose', 'Ana', 'Francisco', 'Antonio', 'Luiz', 'Paulo', 'Carlos', 'Manoel', 'Pedro', 'Francisca', 'Marcos', 'Raimundo', 'Sebastiao', 'Antonia', 'Marcelo', 'Marcia', 'Ricardo', 'Fernando']; 
    string[] public RandomBloodType = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-'];
    string[] public RandomCPF = ['123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00', '123.456.789-00', '987.654.321-00'];
    string[] public RandomDisease = ["Hipertensao Pulmonar","Bronquiectasia nao fibrocistica", "Fibrose cistica", "Doenca Intersticial Pulmonar","Doenca Pulmonar Cronica","Doenca Renal Cronica (fase terminal)","Ceratopatia bolhosa","Ceratocone","Ceratite","Queimaduras quimicas da cornea","Distrofias do estroma da cornea","Leucemia","Linfomas","Doencas dos ganglios","Doencas do baco","Anemia grave adquirida ou congenita","Mielodisplasias"];


    uint256[] public RamdomUrgencyLevels = [80,70,90,95,85,40,70,60,75,95,50,60,55,70,50,90,85,80,85,95,90];
    uint256[] public RamdomCurabilityLevels = [70,80,60,40,50,70,30,40,50,90,70,80,75,70,65,80,75,70,75,90,85];
    uint256[] public RamdomAge = [65,55, 60, 50, 50,40,30,55,50, 60,45,30,40, 50,40,45,55,55,55, 45, 55];


    struct Patient {
        string name;
        string cpf;
        uint256 birthDate;
        address doctorAddress;
         address patientWalletAddress;
        string bloodType;
        uint256 recipientAge;
        uint256 organSize;
        uint256 urgency; // Fator de urgência
        uint256 curability; // Fator de curabilidade
        uint256 qConstant; // Fator Q Constant
        uint256 queueEntryDate; // Data que foi adicionado na fila
        string disease;
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

    function generateRandomPatient() public onlyDoctor {

        for (uint256 i = 0; i < 6; i++) {
            uint randNo = 0;
            randNo = uint (keccak256(abi.encodePacked (msg.sender, block.timestamp, randNo)))%100;

            string memory name = RandomName[i];
            string memory cpf = RandomCPF[i];
            uint256 birthDate = RamdomAge[i];
            string memory bloodType = RandomBloodType[i];
            uint256 recipientAge = uint (keccak256(abi.encodePacked (msg.sender, block.timestamp, randNo)))%100;
            address patientWalletAddress = address(uint160(uint(keccak256(abi.encodePacked(i, blockhash(block.number))))));
            uint256 organSize = uint (keccak256(abi.encodePacked (msg.sender, block.timestamp, randNo)))%100;
            uint256 urgency = RamdomUrgencyLevels[i];
            string memory disease = RandomDisease[i];
            uint256 curability = RamdomCurabilityLevels[i];
            uint256 qConstant = uint (keccak256(abi.encodePacked (msg.sender, block.timestamp, randNo)))%100;

            addPatient(name, cpf, birthDate, bloodType, recipientAge, patientWalletAddress, organSize, urgency, disease, curability, qConstant);

        }

        

    }
    
    function addPatient(
        string memory _name,
        string memory _cpf,
        uint256 _birthDate,
        string memory _bloodType,
        uint256 _recipientAge,
        address _patientWalletAddress,
        uint256 _organSize,
        uint256 _urgency,
        string memory _disease,
        uint256 _curability,
        uint256 _qConstant
    ) public onlyDoctor {
        patientsByDoctor[msg.sender].push(Patient({
            name: _name,
            cpf: _cpf,
            birthDate: _birthDate,
            doctorAddress: msg.sender,
            patientWalletAddress: _patientWalletAddress,
            bloodType: _bloodType,
            recipientAge: _recipientAge,
            organSize: _organSize,
            urgency: _urgency,
            disease: _disease,
            curability: _curability,
            qConstant: _qConstant,
            queueEntryDate: block.timestamp
        }));
        
        allPatients.push(Patient({
            name: _name,
            cpf: _cpf,
            birthDate: _birthDate,
            doctorAddress: msg.sender,
            patientWalletAddress: _patientWalletAddress,
            bloodType: _bloodType,
            recipientAge: _recipientAge,
            organSize: _organSize,
            urgency: _urgency,
            disease: _disease,
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

    // function that generates 10 pacients for testing

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
                name: "", // 0
                cpf: "", // 1
                birthDate: allPatients[i].birthDate, // 2
                doctorAddress: allPatients[i].doctorAddress, // 3
                patientWalletAddress: allPatients[i].patientWalletAddress, // 4
                bloodType: allPatients[i].bloodType, // 5
                recipientAge: allPatients[i].recipientAge, // 6
                organSize: allPatients[i].organSize, // 7
                urgency: allPatients[i].urgency, // 8
                disease: allPatients[i].disease, // 9
                curability: allPatients[i].curability, // 10
                qConstant: allPatients[i].qConstant, // 11
                queueEntryDate: allPatients[i].queueEntryDate // 12
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
                require(_newPriority > patients[i].urgency, "New priority must be higher than current priority");

                records[_patientAddress].push(Record({
                    patientAddress: _patientAddress,
                    oldValue: patients[i].urgency,
                    newValue: _newPriority,
                    field: "Urg\u00eancia",
                    doctorAddress: msg.sender,
                    date: block.timestamp
                }));
                
                patients[i].urgency = _newPriority;
                allPatients[i].urgency = _newPriority;
                
                break;
            }
        }
    }

    function getPatientRecords(address _patientAddress) public view returns (Record[] memory) {
        return records[_patientAddress];
    }
    
    function getPatientByAddress(address _patientAddress) public view returns (string memory, string memory, uint256, address, address, string memory, uint256, uint256, uint256, uint256, uint256, string memory, uint256, Record[] memory ) {



        for (uint256 i = 0; i < allPatients.length; i++) {
            if (allPatients[i].patientWalletAddress == _patientAddress) {
                if (_patientAddress == allPatients[i].patientWalletAddress) {
                    return (
                        allPatients[i].name,
                        allPatients[i].cpf,
                        allPatients[i].birthDate,
                        allPatients[i].doctorAddress,
                        allPatients[i].patientWalletAddress,
                        allPatients[i].bloodType,
                        allPatients[i].recipientAge,
                        allPatients[i].urgency,
                        allPatients[i].curability,
                        allPatients[i].qConstant,
                        allPatients[i].queueEntryDate,
                        allPatients[i].disease,
                        allPatients[i].organSize,
                        records[allPatients[i].patientWalletAddress].length > 0 ? records[allPatients[i].patientWalletAddress] : new Record[](0)
                    );
                }

                return (
                    "",
                    "",
                    allPatients[i].birthDate, // 2
                    allPatients[i].doctorAddress, // 4
                    allPatients[i].patientWalletAddress, // 5
                    allPatients[i].bloodType, // 6
                    allPatients[i].recipientAge, // 7
                    allPatients[i].urgency, // 8
                    allPatients[i].curability, // 9
                    allPatients[i].qConstant, // 10
                    allPatients[i].queueEntryDate, // 11
                    allPatients[i].disease,
                    allPatients[i].organSize,
                    records[allPatients[i].patientWalletAddress].length > 0 ? records[allPatients[i].patientWalletAddress] : new Record[](0)
                );
            }
        }
        
        revert("Patient not found");
    }
}