pragma solidity ^0.4.2;

contract TestContract {

	bytes32 [] public names;

	function TestContract() {
		names.push("Stephen");
		names.push("Laurence");
		names.push("Mario");
		names.push("Edward");

	}

	function getNames() constant returns (bytes32 []){
		return names;
	}


	}
