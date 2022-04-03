import { useEffect } from "react";
import "../public/App.css";
import { useInputContext } from "../context/useInputContext";

export const Screen = () => {
  const { inputValue, isChanged, setIsChanged, setSuggestions } =
    useInputContext();

  const fetchServer = async (inputValue: string) => {
    try {
      const res = await fetch("http://localhost:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number: inputValue }),
      });
      const response = await res.json();

      if ("error" in response) {
        throw new Error(response.error);
      }

      setSuggestions(response);
    } catch (err) {
      console.error(err, "ERROR");
    } finally {
      setIsChanged(false);
    }
  };

  useEffect(() => {
    if (isChanged && inputValue.length > 0) {
      fetchServer(inputValue);
    } else if (isChanged && inputValue.length === 0) {
      setSuggestions({
        predictions: [],
        combos: [],
      });
      setIsChanged(false);
    }
  });

  return (
    <div className="screen">
      <input
        className="screen-input"
        type="text"
        readOnly={true}
        value={inputValue}
      />
    </div>
  );
};
