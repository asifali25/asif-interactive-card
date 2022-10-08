const inputCardNum = document.querySelector("#number");
const inputCardName = document.querySelector("#name");
const inputmm = document.querySelector("#expirymm");
const inputyy = document.querySelector("#expiryyy");
const cvv = document.querySelector("#cvc");
const numberInputWrong = document.querySelector(".input-card-wrong");

inputCardNum.addEventListener("input", function (e) {
  const cardNum = document.querySelector(".card-front__container-num");

  e.target.value = e.target.value
    .replace(/[^\dA-Za-z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

    const inputCardValue = inputCardNum.value.split(" ").join("");

  const reg = /\d{16}/gi;

  const regResult = reg.test(inputCardValue);

  if(regResult) {
    inputCardNum.style.borderColor = ''; 
  }



  cardNum.innerHTML = e.target.value;


  if (inputCardNum.value !== "") {
    numberInputWrong.classList.add("display");
  }

  if (inputCardNum.value === "") {
    numberInputWrong.classList.add("display");
    inputCardNum.style.borderColor = "";
  }

  if (cardNum.innerHTML === "") {
    cardNum.innerHTML = "0000 0000 0000 0000";
  }
});

inputCardName.addEventListener("input", function (e) {
  const cardName = document.querySelector("#card-name");
  const nameInputWrong = document.querySelector(".input-name-wrong");
  cardName.innerHTML = e.target.value.toUpperCase();

  if (cardName.value !== "") {
    nameInputWrong.classList.add("display");
    inputCardName.style.borderColor = "";
  }

  if (cardName.innerHTML === "") {
    cardName.innerHTML = "JANE APPLESEED";
  }
});

inputmm.addEventListener("input", function (e) {
  const cardMm = document.querySelector(".card-exp-mm");
  cardMm.innerHTML = e.target.value;
  const regmm = /\d{2}/;

  const inputmmValue = inputmm.value.split(" ").join(""); 

  const ismm = regmm.test(inputmmValue);

  const errorMy = document.querySelector('.error-my'); 

  if(ismm) {
    inputmm.style.borderColor = '';
    errorMy.classList.add('display');  
  }

  if (cardMm.innerHTML === "") {
    cardMm.innerHTML = "00";
  }
});

inputyy.addEventListener("input", function (e) {
  const cardYy = document.querySelector(".card-exp-yy");
  cardYy.innerHTML = e.target.value;
  if (cardYy.innerHTML === "") {
    cardYy.innerHTML = "00";
  }

  const errorYy = document.querySelector('.error-yyy'); 

  const regyy = /\d{2}/;

  const isyy = regyy.test(inputyy.value)

  if(isyy) {
    errorYy.classList.add('display')
    inputyy.style.borderColor = ''; 
  }  

});

cvv.addEventListener("input", function (e) {
  const cardCvv = document.querySelector(".card-back-p");
  cardCvv.innerHTML = e.target.value;

  const cvcError = document.querySelector('.cvc-error'); 

  const regcvc = /\d{3}/;

  const cvc = regcvc.test(cvv.value)

  if(cvc) {
    cvcError.classList.add('display'); 
    cvv.style.borderColor = ''; 
  }

  if (cardCvv.innerHTML === "") {
    cardCvv.innerHTML = "000";
  }
});

const myForm = document.querySelectorAll(".selectForm");

for (let i = 0; i < myForm.length; i++) {
  myForm[i].addEventListener("keyup", function () {
    if (this.maxLength === this.value.length) {
      this.nextElementSibling.focus();
    }
  });
}

const formBtn = document.querySelector("#formSub");

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const cardInput = document.querySelector(".cardinput__form");
  const succussful = document.querySelector(".successful");
  const containerOneInput = document.querySelector('.exp-container-one'); 

  const inputCardValue = inputCardNum.value.split(" ").join("");

  const reg = /\d{16}/gi;

  const regResult = reg.test(inputCardValue);

  const nameInputWrong = document.querySelector(".input-name-wrong");

  if (inputCardName.value === "") {
    nameInputWrong.classList.remove("display");
    inputCardName.style.borderColor = "red";
  } else {
    inputCardName.style.borderColor = "";
    nameInputWrong.classList.add("display");
  }

  if (!regResult) {
    numberInputWrong.classList.remove("display");
    inputCardNum.style.borderColor = "hsl(0, 100%, 66%)";
    numberInputWrong.innerHTML = "Wrong format, numbers only";
    if (inputCardNum.value === "") {
      numberInputWrong.innerHTML = "Can't be blank";
    }

  } else {
    numberInputWrong.classList.add("display");
    inputCardNum.style.borderColor = "black";
    numberInputWrong.innerHTML = "Wrong format, numbers only";
  }

  const errorMy = document.querySelector('.error-my'); 
  
  const regmm = /\d{2}/;

  const inputmmValue = inputmm.value.split(" ").join(""); 

  const ismm = regmm.test(inputmmValue);


  if (!ismm) {
    inputmm.style.borderColor = 'red'; 
    errorMy.classList.remove('display')
    errorMy.innerHTML = "Wrong format"  
  } else {
    inputmm.style.borderColor = ''; 
    errorMy.classList.add('display')
    errorMy.innerHTML = ''

  } 

  if(inputmm.value === "") {
    errorMy.classList.remove('display')
    errorMy.innerHTML = "Can't be blank"
  }

  const errorYy = document.querySelector('.error-yyy'); 

  const regyy = /\d{2}/;

  const isyy = regyy.test(inputyy.value)

  if(!isyy) {
    errorYy.classList.remove('display')
    errorYy.innerHTML = "Wrong format"
    inputyy.style.borderColor = 'red'; 
  } else {
    inputyy.style.border = ''; 
    errorYy.innerHTML = ""; 
  }

  if(inputyy.value === "") {
    errorYy.classList.remove('display')
    inputyy.style.borderColor = 'red'; 
    errorYy.innerHTML = "Can't be blank"
  }

  const cvcError = document.querySelector('.cvc-error'); 

  const regcvc = /\d{3}/;

  const cvc = regcvc.test(cvv.value)

  if(!cvc) {
    cvcError.classList.remove('display')
    cvv.style.borderColor = 'red'
    cvcError.innerHTML = 'Wrong format'
  }

  if(cvv.value === "") {
    cvcError.classList.remove('display')
    cvv.style.borderColor = 'red'
    cvcError.innerHTML = "Can't be blank"
  }


  if(regResult && ismm && inputCardName.value !== "" && isyy && cvc) {
    cardInput.style.display = "none";
    succussful.classList.remove("remove");
  } else {
    return
  }


});

const succussBtn = document.querySelector("#success-btn");

succussBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const cardInput = document.querySelector(".cardinput__form");
  const succussful = document.querySelector(".successful");

  cardInput.style.display = "block";
  inputCardNum.style.borderColor = "";
  succussful.classList.add("remove");
  inputCardName.value = "";
  inputCardNum.value = "";
  inputmm.value = "";
  inputyy.value = "";
  cvv.value = "";   
});


