"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:33374434395757368598 LICENSE.md

const {expect} = require('chai')
const PhilosophyDeva = require('./index.js');

describe(PhilosophyDeva.me.name, () => {
  beforeEach(() => {
    return PhilosophyDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(PhilosophyDeva).to.be.an('object');
    expect(PhilosophyDeva).to.have.property('agent');
    expect(PhilosophyDeva).to.have.property('vars');
    expect(PhilosophyDeva).to.have.property('listeners');
    expect(PhilosophyDeva).to.have.property('methods');
    expect(PhilosophyDeva).to.have.property('modules');
  });
})
