contract('TestContract', function(accounts) {
  it("should behave", function() {
    var testo = TestContract.deployed();

    return testo.getGroups.call().then(function(theseGroups) {
      console.log(theseGroups);
      for (ii=0;ii<theseGroups.length;ii++){
        console.log(web3.toAscii(theseGroups[ii]));
      }


    });
  });

});
