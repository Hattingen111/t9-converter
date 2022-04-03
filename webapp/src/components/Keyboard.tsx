import {
  Button,
  ButtonGroup,
  ButtonProps as BlueprintButtonProps,
} from "@blueprintjs/core";

import "../public/App.css";
import { lettersByNumber } from "../utils/lettersByNumbers";
import { useInputContext } from "../context/useInputContext";

type ButtonProps = BlueprintButtonProps & {
  text?: string;
  letters?: string;
};

export const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ButtonGroup large={true} fill={true}>
        <ClearButton />
        <BackspaceButton />
      </ButtonGroup>
      <div className="numeric-buttons-container">
        {Array.from(Object.entries(lettersByNumber)).map(
          ([number, letters]) => (
            <NumberButton
              key={number}
              text={number}
              letters={letters.join(" ")}
            />
          )
        )}
      </div>
    </div>
  );
};

const NumberButton = (props: ButtonProps) => {
  const { text, letters } = props;
  const { inputValue, setInputValue, setIsChanged } = useInputContext();

  const onClick = () => {
    setInputValue(inputValue + text);
    setIsChanged(true);
  };

  const textBlock = (
    <div>
      <div className="keyboard-button-main-text">
        <b>{text}</b>
      </div>
      <div className="keyboard-button-help-text">
        <i>{letters}</i>
      </div>
    </div>
  );

  return (
    <Button text={textBlock} className="keyboard-button" onClick={onClick} />
  );
};

const ClearButton = (props: ButtonProps) => {
  const { setInputValue, setIsChanged } = useInputContext();

  const onClick = () => {
    setInputValue("");
    setIsChanged(true);
  };

  return (
    <Button
      className="keyboard-button"
      text="clear"
      onClick={onClick}
      {...props}
    />
  );
};

const BackspaceButton = (props: ButtonProps) => {
  const { inputValue, setInputValue, setIsChanged } = useInputContext();

  const onClick = () => {
    setInputValue(inputValue.substring(0, inputValue.length - 1));
    setIsChanged(true);
  };

  return (
    <Button
      className="keyboard-button"
      icon="key-backspace"
      onClick={onClick}
      {...props}
    />
  );
};
