import { Component } from '@angular/core';
import {Proposal } from './proposal';
@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15,'Abc Company',
'http://portfolio.jordanhudgens.com','Ruby on Rails',150,120,15,
'jordan@devamp.com')

proposalTwo: Proposal = new Proposal(99,'Xyz Company',
'http://portfolio.jordanhudgens.com','Ruby on Rails',150,120,15,
'jordan@devamp.com')

proposalThree: Proposal = new Proposal(300,'Something Company',
'http://portfolio.jordanhudgens.com','Ruby on Rails',150,120,15,
'jordan@devamp.com')

proposals: Proposal[] =[
    this.proposalOne,
    this.proposalTwo, 
    this.proposalThree]
}