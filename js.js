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

document.querySelectorAll('.openSidebar').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const targetSelector = trigger.getAttribute('data-target');
    const targetPanel = document.querySelector(targetSelector);

    // بستن تمام پنل‌ها
    allSidebars.forEach(panel => panel.classList.remove('open'));

    // باز کردن پنل موردنظر
    if (targetPanel) {
      targetPanel.classList.add('open');
    }
  });
});

// دکمه بستن
document.querySelectorAll('.sidebar .close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.sidebar').classList.remove('open');
  });
});