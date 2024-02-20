export function transformOracleText(oracleText) {
  const oracleTextReplaced = oracleText.replace(/\n/g, "\n\n");
  return oracleTextReplaced;
}
