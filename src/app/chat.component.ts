import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h3> Chat Component </h3>
  `
})
export class ChatComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit() {
    // debugger;
    // set a breakpoint here, and inspect the router service via this.router
  }
}
