
const checkbox1 = document.getElementById('toggleList1');
const list1 = document.getElementById('myList1');
const checkbox2 = document.getElementById('toggleList2');
const list2 = document.getElementById('myList2');
const checkbox3= document.getElementById('toggleList3');
const list3 = document.getElementById('myList3');
const checkbox4 = document.getElementById('toggleList4');
const list4 = document.getElementById('myList4');
const checkbox5= document.getElementById('toggleList5');
const list5 = document.getElementById('myList5');
const checkbox6= document.getElementById('toggleList6');
const list6 = document.getElementById('myList6');
const checkbox7= document.getElementById('toggleList7');
const list7 = document.getElementById('myList7');
const checkbox8= document.getElementById('toggleList8');
const list8 = document.getElementById('myList8');




/*
function goBack() {
  window.history.back();
}

function toggleForm() {
  var form = document.getElementById("form-card");
  var checkbox = document.getElementById("showForm");
  if (checkbox.checked) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}


function Captcha() {  
  // Define the characters that can be used in the captcha code
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  // Generate a random string of 6 characters
  let captchaCode = "";
  for (let i = 0; i < 6; i++) {
    captchaCode += chars[Math.floor(Math.random() * chars.length)];
  }
  
  // Set the value of the txtCaptcha element to the captcha code
  document.getElementById("txtCaptcha").value = captchaCode;  
} 
*/

// تبديل عرض تفاصيل العقار
function toggleDetails(id) {
  const detailsRow = document.getElementById(id);
  if (!detailsRow) return;
  if (detailsRow.classList.contains("hidden")) {
    detailsRow.classList.remove("hidden");
  } else {
    detailsRow.classList.add("hidden");
  }
}

// تحقق من صحة النموذج
function validateForm() {
  const form = document.getElementById("property-form");
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const id = form.id.value.trim();

  if (!email || !phone || !id) {
    alert("يرجى تعبئة جميع الحقول المطلوبة.");
    return false;
  }

  // تحقق بسيط من البريد الإلكتروني
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("يرجى إدخال بريد إلكتروني صالح.");
    return false;
  }

  // تحقق بسيط من رقم الهاتف (رقم يبدأ بـ 09 ويحتوي 10 أرقام تقريبًا)
  const phonePattern = /^09\d{8,9}$/;
  if (!phonePattern.test(phone)) {
    alert("يرجى إدخال رقم هاتف صالح يبدأ بـ 09.");
    return false;
  }

  // تحقق من رقم الهوية (رقم فقط وطوله بين 6 و12)
  if (!/^\d{6,12}$/.test(id)) {
    alert("يرجى إدخال رقم هوية صالح (6 إلى 12 رقم).");
    return false;
  }

  alert("تم إرسال النموذج بنجاح!");
  form.reset();
  return false; // منع الإرسال الفعلي في هذا المثال
}
function toggleMenu() {
        const navList = document.querySelector("nav ul");
        navList.classList.toggle("show");
    }
function toggleCardDetails(button) {
  const details = button.nextElementSibling;
  if (details.classList.contains("hidden")) {
    details.classList.remove("hidden");
    button.textContent = "تفاصيل أقل ▲";
  } else {
    details.classList.add("hidden");
    button.textContent = "تفاصيل أكثر ▼";
  }
}
