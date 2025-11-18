const operations = $("get operations by tg user id").all();

const formatButtonText = (operation) => {
  const category = operation.category || "Без категории";
  const typeIcon = operation.type === 2 ? "⬆️" : "⬇️"; // Доход/расход
  const maxLength = 45;

  let text = `${typeIcon} ${category}. ${operation.description}`;
  if (text.length > maxLength) {
    text = text.substring(0, maxLength - 3) + "...";
  }

  return text;
};

const inline_keyboard = operations
  .slice(-10)
  .reverse()
  .map((operation) => [
    {
      text: formatButtonText(operation.json),
      callback_data: `oper:${operation.json.id}|id:${operation.json.user_id}`,
    },
  ]);

// console.log("inline_keyboard", inline_keyboard);

return [
  {
    reply_markup: {
      inline_keyboard: inline_keyboard,
    },
  },
];
