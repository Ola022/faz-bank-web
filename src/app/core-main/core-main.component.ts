import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-main',
  templateUrl: './core-main.component.html',
  styleUrl: './core-main.component.scss'
})
export class CoreMainComponent implements OnInit{
  default_theme = 'light'
  ngOnInit(): void {
     this.switchTheme()
  }
  showMenu = true

  toggle(){
    const burger = document.querySelector('#burger')
    const menu = document.querySelector('#menu')

    if(menu?.classList.contains('hidden')){
      menu.classList.remove('hidden')
    }
    else{
      menu?.classList.add('hidden')
    }
  }

  switchTheme() {
    
    document.documentElement.setAttribute('data-theme', this.default_theme);
    if(this.default_theme == 'light'){
      this.default_theme='dark'
    }
    else{
      this.default_theme= 'light'
    }
  }
}
