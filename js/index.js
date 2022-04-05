
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu')


menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('menu-btn_active')
  menu.classList.toggle('active')
})

const menuToggle = document.querySelector('.js-menu-nav_about')
const menuToggleBlock = document.querySelector('.js-menu-nav_aboutBl')

menuToggle.addEventListener('click', function(){
  menuToggleBlock.classList.toggle('opened')
})
  

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',        
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },  
});

$(document).ready(function () {
  $("#cphone").mask("+7 (000) 000-00-00");
})
$.validator.addMethod("pwcheckallowedchars", function (value) {
  return /^[a-zA-Zа-яА-я-()ёЁ ]+$/.test(value)  
}, "Недопустимое значение");
$('.form-block').validate({
  rules: {
    cname: {
      required: true,
      minlength: 2,
      pwcheckallowedchars: true
    },
    cemail: {
      required: true,
      email: true
    },
    cphone: {
      required: true,
      minlength: 18
    },
    area: {
      required: true,
    }
  },
  messages: {
    cname: {
      required: 'Поле не заполнено',
      minlength: 'Минимум 2 символа'
    },
    cemail: {
      required: 'Поле не заполнено',
      email: 'Введите правильный email'
    },
    cphone: {
      required: 'Поле не заполнено',
      minlength: 'Введите номер до конца'
    },
    area: {
      required: 'Поле не заполнено',
      minlength: 'Минимум 10 символов',
      maxlength: 'Максимум 100 символов'
    }
  },
  onkeyup: function (element) {
    let submit = document.querySelector('#form-block .form-block__btn')

if ($('#form-block').validate().checkForm()) {
submit.classList.remove('disabled')
} else {
submit.classList.add('disabled')
}
  var excludedKeys = [
  16, 17, 18, 20, 35, 36, 37,
  38, 39, 40, 45, 144, 225
];
if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
  return;
} else if (element.name in this.submitted || element.name in this.invalid) {
  this.element(element);
}
},
})