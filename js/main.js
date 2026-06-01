document.addEventListener('DOMContentLoaded', function() {
    setTimeout(randomInit, 100);
});

function randomInit() {
    var randomGender = Math.random() > 0.5 ? 1 : 2;
    document.getElementById('g' + randomGender).checked = true;
    
    var operators = ['mobile', 'unicom', 'telecom'];
    var randomOperator = operators[Math.floor(Math.random() * operators.length)];
    document.getElementById('operator').value = randomOperator;
    
    var currentYear = new Date().getFullYear();
    var minYear = currentYear - 80;
    var maxYear = currentYear - 50;
    var randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    var randomMonth = Math.floor(Math.random() * 12) + 1;
    var daysInMonth = new Date(randomYear, randomMonth, 0).getDate();
    var randomDay = Math.floor(Math.random() * daysInMonth) + 1;
    
    document.getElementById('y').value = randomYear;
    YYYYDD(randomYear, document.form1.SMonth, document.form1.SDay);
    document.getElementById('m').value = randomMonth;
    MMDD(randomMonth, randomYear, document.form1.SDay);
    document.getElementById('d').value = randomDay;
}

function changeNumber(delta) {
    var input = document.getElementById('n');
    var currentValue = parseInt(input.value) || 1;
    var newValue = currentValue + delta;
    if (newValue < 1) newValue = 1;
    if (newValue > 999) newValue = 999;
    input.value = newValue;
}

function copyText(elementId) {
    var text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(function() {
        showToast('复制成功');
    }).catch(function(err) {
        showToast('复制失败');
    });
}

function showToast(message) {
    var toast = document.getElementById('toast');
    toast.textContent = message + ' ✓';
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 2000);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('go').click();
    }
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        changeNumber(1);
    }
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        changeNumber(-1);
    }
});