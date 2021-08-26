class ComponentError {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}

export class InvalidPropError extends ComponentError {
  constructor(component, propType, propValue) {
    super(
      `Invalid prop ${propValue} passed to ${propType} on component ${component}`
    );
    this.name = "InvalidPropError";
  }
}
