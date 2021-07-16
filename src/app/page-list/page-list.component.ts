import { Component, OnInit } from '@angular/core';
import { Page } from '../page.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  pages: Page[] = [
    new Page('Secret Manager in Google Cloud', 'No password on your code.', 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80'),
    new Page('Automation by AWS Lambda and EventBridge', 'Automation can be easy and low-cost.', 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80'),
    new Page('Type hints in Python', 'Add type feature like Java to your Python functions.', 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80'),
    new Page('Make website by AWS S3 and Route 53', 'Quickly make your website!', 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
