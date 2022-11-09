const computate = ({ currentState, previousState, operation }) => {
  const prev = parseFloat(previousState.replace(/\s/g, ""));
  const current = parseFloat(currentState.replace(/\s/g, ""));
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    case "exp":
      computation = prev ** current;
      break;
  }
  return computation.toString();
};

export default computate;