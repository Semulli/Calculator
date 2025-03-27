import { createContext, useContext, useReducer } from "react";

export const context = createContext();

const initialState = {
  value: "0",
  previousValue: null,
  operation: null,
};

const calcReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      return {
        ...state,
        value: state.value === "0" ? action.payload : state.value + action.payload,
      };

    case "CLEAR":
      return initialState;

    case "CHOOSE_OPERATION":
      return {
        previousValue: state.value,
        value: "0",
        operation: action.payload,
      };

    case "ADD_PERCENTAGE":
      return {
        ...state,
        value: String(parseFloat(state.value) / 100), 
      };

    case "CALCULATE": {
      if (!state.previousValue || !state.operation) return state;

      let result;
      const prev = parseFloat(state.previousValue);
      const current = parseFloat(state.value);

      switch (state.operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = prev / current;
          break;
        case "%":
          result = prev % current; 
          break;
        default:
          return state;
      }

      return {
        value: String(result),
        previousValue: null,
        operation: null,
      };
    }

    default:
      return state;
  }
};

export const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export const UseCalcContext = () => {
  return useContext(context);
};
