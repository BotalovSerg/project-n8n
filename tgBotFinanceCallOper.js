const callbackData = $input.first().json.callback; // "id:255807085|oper:57"

const [operIdPart, userIdPart] = callbackData.split("|");
const user_id = userIdPart.split(":")[1];
const operation_id = operIdPart.split(":")[1];

return {
  user_id: user_id,
  operation_id: operation_id,
};
