import { useEffect } from "react";

export default function useKey(key, callbackFunction) {
  useEffect(() => {
    function KeyboardHandler(e) {
      if (e.code.toUpperCase() === key.toUpperCase()) {
        callbackFunction();
      }
    }
    document.addEventListener("keydown", KeyboardHandler);

    return function () {
      document.removeEventListener("keydown", KeyboardHandler);
    };
  }, [key, callbackFunction]);
}
