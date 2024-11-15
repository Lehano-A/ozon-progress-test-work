// проверить значение на ноль с числом
function checkForZeroWithInt(value) {
  return value[0] === "0" && !Number.isNaN(value[1]);
}

export { checkForZeroWithInt };
