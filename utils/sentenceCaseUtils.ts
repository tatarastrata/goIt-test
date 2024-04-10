export const sentenceCase = (str: string): string => {
  if (!str) return '';

  const firstChar = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1).toLowerCase();

  return firstChar + restOfString;
};
