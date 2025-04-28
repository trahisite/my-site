const tiltBox = document.getElementById('tiltCard');

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const xAxis = ((e.clientX / innerWidth) - 0.5) * 40;
  const yAxis = ((e.clientY / innerHeight) - 0.5) * 40;
  tiltBox.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});


function scrollProducts(direction) {
  const container = document.getElementById("productRow");
  const scrollAmount = 240; // به اندازه هر کارت + margin
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}










const allSidebars = document.querySelectorAll('.sidebar');
const openButtons = document.querySelectorAll('.openSidebar');

// باز کردن سایدبار مربوطه
openButtons.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.stopPropagation(); // جلوگیری از بسته شدن فوری بعد از باز کردن

    const targetSelector = trigger.getAttribute('data-target');
    const targetPanel = document.querySelector(targetSelector);

    // بستن تمام سایدبارها
    allSidebars.forEach(panel => panel.classList.remove('open'));

    // باز کردن سایدبار موردنظر
    if (targetPanel) {
      targetPanel.classList.add('open');
    }
  });
});

// بستن سایدبار با کلیک روی دکمه close-btn
document.querySelectorAll('.sidebar .close-btn').forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation(); // جلوگیری از کلیک روی دکمه باعث بسته شدن همه نشه
    btn.closest('.sidebar').classList.remove('open');
  });
});

// جلوگیری از بستن هنگام کلیک داخل خود سایدبار
allSidebars.forEach(sidebar => {
  sidebar.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

// کلیک بیرون از سایدبار = بستن همه سایدبارها
document.addEventListener('click', () => {
  allSidebars.forEach(panel => panel.classList.remove('open'));
});







if (window.innerWidth < 1000) {
  const sidebars = document.querySelectorAll('.sidebar');  // انتخاب تمام سایدبارها

  sidebars.forEach(sidebar => {
    sidebar.style.setProperty('width', '60%', 'important');  // اعمال استایل به هر کدوم
  });
}