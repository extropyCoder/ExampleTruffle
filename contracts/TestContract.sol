pragma solidity ^0.4.2;




contract TestContract {

	bytes32 [] public groups;

	function TestContract() {
		groups.push("Stephen");
		groups.push("Laurence");
		groups.push("Mario");
		groups.push("Edward");

	}

	function getGroups() constant returns (bytes32 []){
		return groups;
	}


	}
