/** */

const isColor = (value: string) =>
  /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);

export default isColor;
