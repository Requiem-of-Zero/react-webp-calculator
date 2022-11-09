const formatInteger = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

const formatOperand = (operand) => {
  if(operand == null) return
  const [integer, decimal] = operand.split('.')
  if(decimal == null) return formatInteger.format(integer)
}

export default formatOperand;