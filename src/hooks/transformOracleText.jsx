import PropTypes from "prop-types";
import "../Cards/Cards.css";

export function OracleText({ oracleText }) {
  if (typeof oracleText !== "string") {
    console.error("OracleText expects a string", oracleText);
    return null;
  }

  const oracleTextSpace = oracleText.replace(/\n/g, "\n\n");
  function parseText() {
    const segments = oracleTextSpace.split(/(\([^)]+\))/);

    return segments.map((segment, index) => {
      if (segment.startsWith("(") && segment.endsWith(")")) {
        return <i key={index}>{segment}</i>;
      }
      return segment;
    });
  }

  return <p className="oracle-text">{parseText()}</p>;
}

OracleText.propTypes = {
  oracleText: PropTypes.string,
};
