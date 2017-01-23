var accounts;
var account;


function displayNames(){
  var testc = TestContract.deployed();
  var namesTag = document.getElementById("names");
  namesTag.length = 0;
  return testc.getNames.call().then(function(theseNames) {
    console.log(theseNames);
    namesTag.innerhtml = "Names";
    for (ii=0;ii<theseNames.length;ii++){
      var name = web3.toAscii(theseNames[ii]);
      console.log(name);
      var opt = document.createElement('option');
      opt.value = ii;
      opt.innerHTML = name;
      namesTag.appendChild(opt);
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
