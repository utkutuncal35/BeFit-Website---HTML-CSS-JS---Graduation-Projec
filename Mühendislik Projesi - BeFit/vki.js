var form = document.getElementById('bmi-form');


form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  
  var bmi = weight / (height / 100 * height / 100);

  bmi = bmi.toFixed(1);

  
  var result = document.getElementById('result');

if (bmi < 18.5) {
  result.innerHTML = 'Vücut Kitle İndeksiniz: ' + bmi + '. Zayıf.';
} else if (bmi >= 18.5 && bmi < 25) {
  result.innerHTML = 'Vücut Kitle İndeksiniz: ' + bmi + '. Normal.';
} else if (bmi >= 25 && bmi < 30) {
  result.innerHTML = 'Vücut Kitle İndeksiniz: ' + bmi + '. Kilolu.';
} else {
  result.innerHTML = 'Vücut Kitle İndeksiniz: ' + bmi + '. Obez.';
}
});