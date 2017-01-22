var accounts;
var account;


function displayGroups(){
  var testo = TestContract.deployed();
  var groupsTag = document.getElementById("groups");
  return testo.getGroups.call().then(function(theseGroups) {
    console.log(theseGroups);
    groupsTag.innerhtml = "Groups";
    for (ii=0;ii<theseGroups.length;ii++){
      var groupName = web3.toAscii(theseGroups[ii]);
      console.log(groupName);
      var opt = document.createElement('option');
      opt.value = ii;
      opt.innerHTML = groupName;
      groupsTag.appendChild(opt);
//      groupsTag.innerhtml += groupName + "<br>"
    }
  });
}



window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];


  });
}
