// function mathFunction(queue) {
//     return [queue];
// }
let valueArray;

export default function guardrail(mathFunction) {
  try {
    valueArray = mathFunction();
  } catch (error) {
    valueArray = error.toString();
  }
  return [valueArray, 'Guardrail was processed'];
}
