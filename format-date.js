const meetingTimeStr = $input.first().json.meeting_time; // пример: "2025-07-15T11:00:00"
const meetingDate = new Date(meetingTimeStr);

// Прибавляем 1 час (3600000 миллисекунд)
const updatedDate = new Date(meetingDate.getTime() + 3600000);

// Форматируем результат как "YYYY-MM-DDTHH:MM:SS"
const pad = (n) => n.toString().padStart(2, "0");
const formatted =
  updatedDate.getFullYear() +
  "-" +
  pad(updatedDate.getMonth() + 1) +
  "-" +
  pad(updatedDate.getDate()) +
  "T" +
  pad(updatedDate.getHours()) +
  ":" +
  pad(updatedDate.getMinutes()) +
  ":" +
  pad(updatedDate.getSeconds());

return [
  {
    json: {
      updated_meeting_time: formatted,
      formatMetingTime: meetingDate.toLocaleString("ru-RU"),
    },
  },
];
