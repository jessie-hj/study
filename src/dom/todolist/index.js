var STORAGEKEY = 'TODOLIST';

var storedData = JSON.parse(localStorage.getItem(STORAGEKEY));
var todoListData = storedData || [];

function getTime() {
  return (new Date).getTime();
}

function renderTodo() {
  localStorage.setItem(STORAGEKEY, JSON.stringify(todoListData));

  var $todoList = $(".list-group");
  $todoList.empty();

  todoListData.forEach(function(item, index){
    var doneClass = '';
    var completeText = '완료';
    var completeClass = 'btn-success';

    if(item.done) {
      doneClass = 'complete';
      completeText = '취소';
      completeClass = 'btn-dark'
    }

    var listTemplate = "<li class=\"list-group-item\" data-date=\"" + item.date + "\">\n" +
      "    <div class=\"input-group\">\n" +
      "      <strong class=\"form-control\">" + item.title + "</strong>\n" +
      "      <div class=\"input-group-append\">\n" +
      "        <button class=\"btn " + completeClass + "\">" + completeText + "</button>\n" +
      "        <button class=\"btn btn-warning\">수정</button>\n" +
      "        <button class=\"btn btn-danger\">삭제</button>\n" +
      "      </div>\n" +
      "    </div>\n" +
      "  </li>";
    var $listTemplate = $(listTemplate);
    $listTemplate.addClass(doneClass);

    $todoList.append($listTemplate);
  });
}

function addEvent() {
  var $addTodo = $("#addTodo");
  var $btnAdd = $("#btnAdd");

  $btnAdd.on('click',function() {
    var title = $addTodo.val();

    if(title === '') {
      return;
    }

    var newTodo = {
      title : title,
      date : getTime(),
      done: false
    };

    todoListData.push(newTodo);
    $addTodo.val('');
    renderTodo();
  });
}

function successEvent() {
  var $todoList = $('.list-group');
  $todoList.on('click', '.btn-success', function(event) {
    var $currentTarget = $(event.currentTarget);
    var $currentItem = $currentTarget.closest('li');
    var targetDate = $currentItem.data('date');

    var currentItem = todoListData.filter(function(item) {
      return item.date === targetDate;
    })[0]; //첫번째 배열을 가져온다.

    currentItem.done = true;

    renderTodo();
  });

  // javascript 처리 방식
  // var todoListElement = document.querySelector('.list-group');
  // console.log(todoListElement);
  //
  // todoListElement.addEventListener('click',function(event){
  //   if (event.target.className.includes('btn-success')) { //완료
  //     //codes
  //     console.log(event);
  //   }
  // });
}

function removeEvent() {
  var $todoList = $('.list-group');
  $todoList.on('click', '.btn-danger', function(event) {
    var $currentTarget = $(event.currentTarget);
    var $currentItem = $currentTarget.closest('li');
    var targetDate = $currentItem.data('date');

    // var currentItem = todoListData.findIndex(function(item) {
    //   return item.date === targetDate;
    // });

    var currentItem = todoListData.filter(function(item) {
      return item.date === targetDate;
    })[0];

    var currentIndex = todoListData.indexOf(currentItem);

    console.log(currentIndex);
    todoListData.splice(currentIndex, 1);

    renderTodo();

  });
}

function editEvent() {
  var $todoList = $('.list-group');
  $todoList.on('click', '.btn-warning', function(event) {
    var $currentTarget = $(event.currentTarget);
    var $currentItem = $currentTarget.closest('li');

    var $inputItem = $currentItem.find('strong');
    var inputItemText = $inputItem.text();
    console.log($inputItem);
    var $changedInput = $('<input class="form-control" value="' + inputItemText + '">');

    $inputItem.replaceWith($changedInput);
    $changedInput.focus();

    $currentTarget.replaceWith("<button class=\"btn btn-info\">수정완료</button>");
  });

  $todoList.on('click', '.btn-info', function(event) {
    var $currentTarget = $(event.currentTarget);
    var $currentItem = $currentTarget.closest('li');
    var targetDate = $currentItem.data('date');

    var $inputItem = $currentItem.find('input');
    var $inputItemText = $inputItem.val();

    var currentItem = todoListData.filter(function(item) {
      return item.date === targetDate;
    })[0];

    currentItem.title = $inputItemText;

    renderTodo();

  });
}

function cancleEvent() {
  var $todoList = $('.list-group');
  $todoList.on('click', '.btn-dark', function(event) {
    var $currentTarget = $(event.currentTarget);
    var $currentItem = $currentTarget.closest('li');
    var targetDate = $currentItem.data('date');

    var currentItem = todoListData.filter(function(item) {
      return item.date === targetDate;
    })[0];

    currentItem.done = false;

    renderTodo();
  });
}


renderTodo();
addEvent();
successEvent();
removeEvent();
editEvent();
cancleEvent();