// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Form.module.css";
import useUserForm from "../hooks/userForm";

const UserForm = () => {
  const {
    inputValue: nameInputValue,
    getInputValue: getInputNameValue,
    onBlurHandler: onBlurNameHandler,
    onFocusHandler: onFocusNameHandler,
    invalidInput: invalidNameInput,
    inputValueValidation: nameValidation,
    error: nameError,
    reset: resetName,
  } = useUserForm();

  const {
    inputValue: adressInputValue,
    getInputValue: getInputAdressValue,
    onBlurHandler: onBlurAdressHandler,
    onFocusHandler: onFocusAdressHandler,
    invalidInput: invalidAdressInput,
    inputValueValidation: adressValidation,
    error: adressError,
    reset: resetAdress,
  } = useUserForm();

  const {
    inputValue: codeInputValue,
    getInputValue: getInputCodeValue,
    onBlurHandler: onBlurCodeHandler,
    onFocusHandler: onFocusCodeHandler,
    invalidInput: invalidCodeInput,
    inputValueValidation: codeValidation,
    error: codeError,
    reset: resetCode,
  } = useUserForm();

  const {
    inputValue: cityInputValue,
    getInputValue: getInputCityValue,
    onBlurHandler: onBlurCityHandler,
    onFocusHandler: onFocusCityHandler,
    invalidInput: invalidCityInput,
    inputValueValidation: cityValidation,
    error: cityError,
    reset: resetCity,
  } = useUserForm();

  function submitOrder(e) {
    e.preventDefault();
    nameError();
    adressError();
    codeError();
    cityError();

    if (
      !nameValidation ||
      !adressValidation ||
      !codeValidation ||
      !cityValidation
    ) {
      return;
    }

    resetName();
    resetCode();
    resetAdress();
    resetCity();
  }

  const changeClass = invalidNameInput ? styles.invalid : styles.valid;

  const changeClassAdress = invalidAdressInput ? styles.invalid : styles.valid;

  const changeClassCode = invalidCodeInput ? styles.invalid : styles.valid;

  const changeClassCity = invalidCityInput ? styles.invalid : styles.valid;

  return (
    <Form className="p-3">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          className={changeClass}
          onChange={getInputNameValue}
          type="text"
          value={nameInputValue}
          onBlur={onBlurNameHandler}
          onFocus={onFocusNameHandler}
          placeholder={!invalidNameInput ? "Enter name" : undefined}
        />
        {invalidNameInput && (
          <Form.Text className="text-danger">Please enter your name</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Adress</Form.Label>
        <Form.Control
          className={changeClassAdress}
          type="adress"
          value={adressInputValue}
          onChange={getInputAdressValue}
          onBlur={onBlurAdressHandler}
          onFocus={onFocusAdressHandler}
          placeholder={!invalidAdressInput ? "Adress" : undefined}
        />
        {invalidAdressInput && (
          <Form.Text className="text-danger">
            Please enter your adress
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Postal Code(without -)</Form.Label>
        <Form.Control
          className={changeClassCode}
          type="number"
          value={codeInputValue}
          onChange={getInputCodeValue}
          onBlur={onBlurCodeHandler}
          onFocus={onFocusCodeHandler}
          placeholder={!invalidCodeInput ? "Postal Code" : undefined}
        />
        {invalidCodeInput && (
          <Form.Text className="text-danger">
            Please enter your postal code(without -)
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control
          className={changeClassCity}
          type="city"
          value={cityInputValue}
          onChange={getInputCityValue}
          onBlur={onBlurCityHandler}
          onFocus={onFocusCityHandler}
          placeholder={!invalidCityInput ? "City" : undefined}
        />
        {invalidCityInput && (
          <Form.Text className="text-danger">Please enter your city</Form.Text>
        )}
      </Form.Group>
      <Button onClick={submitOrder} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
