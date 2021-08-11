'use strict';


angular
.module('test')
.component('test', {
  controller : [function TestController(){
    this.todos = [
      { id: 1, title: 'Learn AngularJS', description: 'Learn,Live,Laugh AngularJS', done: true },
      { id: 2, title: 'Explore hibernate', description: 'Explore and use hibernate instead of jdbc', done: true },
      { id: 3, title: 'Play with spring', description: 'spring seems better have a look', done: false },
      { id: 4, title: 'Try struts', description: 'No more labour work..use struts', done: false },
      { id: 5, title: 'Try servlets', description: 'Aah..servlets stack seems cool..why dont u try once', done: false }
    ];
  }],
  templateUrl: 'app/angularJs/test-component/test.template.html'
});

