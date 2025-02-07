window.onload = function () {
        $("#time").hide();
       // 格式化日期
        function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        // 根据时间获取问候语
        function getGreetingByTime(now) {
            const hours = now.getHours();
            if (hours >= 6 && hours < 10) {
                return "老师早上好 !";
            } else if (hours >= 11 && hours < 13) {
                return "老师中午好 !";
            } else if (hours >= 14 && hours < 18) {
                return "老师下午好 !";
            } else {
                return "老师晚上好 !";
            }
        }
        // 更新页面显示日期和问候语
        function updateDate() {
            // 直接输出时间
            $("#time-time").text(new Date().toLocaleTimeString('chinese', { hour12: false }));
            // 输出日期和问候语
            $("#time-date").text(formatDate(new Date()));
            $("#time-greet").text(getGreetingByTime(new Date()));
            $("#time").addClass('afterhide');
            $("#time").fadeIn(500);
        }
        // 初始化
        updateDate();
        setInterval(updateDate, 1000);
}