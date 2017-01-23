contract('TestContract', function(accounts) {
  it("should behave", function() {
    var testc = TestContract.deployed();

    return testc.getNames.call().then(function(theseNames) {
      for (ii=0;ii<theseNames.length;ii++){
        console.log(web3.toAscii(theseNames[ii]));
      }
      return assert.equal(theseNames.length,4);

    });
  });

});
