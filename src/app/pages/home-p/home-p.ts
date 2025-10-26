import { AfterContentInit, afterNextRender, Component, DoCheck, effect, OnChanges, OnDestroy, OnInit, signal } from '@angular/core';
import { TitleC } from '../../components/title-c/title-c';


const log = (...messages: string[]) => {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 'color: #bada55');

}

@Component({
  selector: 'app-home-p',
  imports: [TitleC],
  templateUrl: './home-p.html',
  styleUrl: './home-p.css',
})
export class HomeP implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {

  traditionalProperty = 'Agus'
  signalProperty = signal('Agus')


  changeTraditional(){
    this.traditionalProperty = "Santos"
  }


  changeSignal(){
    this.signalProperty.set("Santos")
  }


  constructor() {
    log('Constructor llamado');
  }

  basicEffect = effect((onCleanup) => {
    log(
      'effect',
      'Disparar efectos segundarios'
    )

    onCleanup( () => {
      log(
        'onCleanup',
        "Se ejecuta cuando el efecto se va a destruir"
      )
    })
  })

  ngOnInit() {
    log(
      'ngOnInit',
      "Runs once after Angular has initialized all the component's inputs."
    );
  }


  ngOnChanges() {
    log(
      'ngOnchanges',
      "Runs every time the component's inputs have changed."
    );
  }


  ngDoCheck() {
    log(
      'ngDoCheck',
      "Runs every time this component is checked for changes."
    );

  }


  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized."
    );
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      "Runs every time this component content has been checked for changes."
    );
  }

  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs once after the component's view has been initialized."
    );

  }

  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "Runs every time the component's view has been checked for changes."
    );

  }

  ngOnDestroy(): void {
    log(
      'Ondestroy',
      "Runs once before the component is destroyed."
    )
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      "Runs once the next time that all components have been rendered to the DOM."
    )
  })




}
