import { $ }  from 'react-jquery-plugin'

$('.opt-btn').on('click', function(e) {
    alert("test");
    $('.cell-cell-panel').toggleClass("on"); //you can list several class names 
    e.preventDefault();
  }); 