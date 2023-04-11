import { useState } from "react";

const useUserForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setClicked] = useState(true);

  const getInputValue = (e) => {
    setInputValue(e.target.value);
    setClicked(true);
  };

  const onBlurHandler = () => {
    setClicked(false);
  };

  const onFocusHandler = () => {
    setClicked(true);
  };

  const reset = () => {
    setInputValue("");
    setClicked(true);
  };

  const inputValueValidation = inputValue.trim() !== "";

  const error = () => {
    if (!inputValueValidation) {
      setClicked(false);
    }
  };

  const invalidInput = !clicked && !inputValueValidation;

  return {
    inputValue,
    getInputValue,
    onBlurHandler,
    onFocusHandler,
    invalidInput,
    inputValueValidation,
    error,
    reset,
  };
};

export default useUserForm;
