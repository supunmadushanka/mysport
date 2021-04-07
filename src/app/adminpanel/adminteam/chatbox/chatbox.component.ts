import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  constructor() { }

  chat = [
    {
      name: 'Supun', role: 'Me', message: 'Hi'
    },
    {
      name: 'Tharushi', role: 'Other', message: 'Hi'
    },
    {
      name: 'Supun', role: 'Me', message: 'How are you'
    },
    {
      name: 'Tharushi', role: 'Other', message: 'i am fine, thank you'
    },
  ]

  ngOnInit(): void {
  }

  showother(role) {
    if (role == 'Other') {
      return true
    } else {
      return false
    }
  }

  showme(role) {
    if (role == 'Me') {
      return true
    } else {
      return false
    }
  }

}
