const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error, if fullName arg is not a string', () => {
    expect(formatFullname(1)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
  });  

  it('should return proper casing name, if letters are randomly capitalized', () => {
    expect(formatFullname('RoB Zombie')).to.equal('Rob Zombie');
    expect(formatFullname('bOB chYwoNEth')).to.equal('Bob Chywoneth');
    expect(formatFullname('PAWEL pAWELSKI')).to.equal('Pawel Pawelski');
  });

  it('should return error, if there is more than or less than two words in the string', () => {
    expect(formatFullname('RoB Zombie bob')).to.equal('Error');
    expect(formatFullname('RoB Zombie bob Maria Chris')).to.equal('Error');
    expect(formatFullname('RoB')).to.equal('Error');
  });
});
