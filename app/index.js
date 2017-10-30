(function() {
  angular
    .module('app', [])
    .controller('ApplicationController', ApplicationController);

  function ApplicationController() {
    var vm = this;

    vm.todos = [];
    vm.newTodo = null;
    vm.addTodo = addTodo;
    vm.completeTodo = completeTodo;

    function addTodo() {
      if (!vm.newTodo) return false;
      vm.todos.push(vm.newTodo);
      vm.newTodo = null;
    }

    function completeTodo(todo) {
      var ind = vm.todos.indexOf(todo);
      vm.todos.splice(ind, 1);
    }
  }
})();
