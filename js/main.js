window.onload = function(){
        // 格式化日期和时间
        function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        function formatTime(date) {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }
        // 根据时间获取问候语
        function getGreetingByTime(now) {
            const hours = now.getHours();
            if (hours >= 6 && hours < 10) {
                return "老师早上好！";
            } else if (hours >= 11 && hours < 13) {
                return "老师中午好！";
            } else if (hours >= 14 && hours < 18) {
                return "老师下午好！";
            } else {
                return "老师晚上好！";
            }
        }
        // 更新页面显示日期和问候语
        function updateDate() {
            $("#time-time").text(formatTime(new Date()));
            $("#time-date").text(formatDate(new Date()));
            $("#time-greet").text(getGreetingByTime(new Date()));
        }
        updateDate();
        setInterval(updateDate, 1000);
}