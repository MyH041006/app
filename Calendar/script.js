document.addEventListener('DOMContentLoaded', () => {
    const calendarDays = document.getElementById('calendarDays');
    const monthYear = document.getElementById('monthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    let currentMonth, currentYear;

    function generateCalendar(month, year) {
        currentMonth = month;
        currentYear = year;

        const date = new Date(year, month);
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        let daysHtml = '';
        for (let i = 0; i < firstDay; i++) {
            daysHtml += '<div></div>';
        }

        for (let i = 1; i <= lastDate; i++) {
            daysHtml += `<div class="day" data-day="${i}">${i}</div>`;
        }

        calendarDays.innerHTML = daysHtml;

        document.querySelectorAll('.day').forEach(day => {
            day.addEventListener('click', () => {
                
            });
        });
    }

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    });

    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    });

    generateCalendar(new Date().getMonth(), new Date().getFullYear());
});
