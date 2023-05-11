const parseDate = (storageDate: Date) => {
  const date = new Date(storageDate);
  function addZero(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  }

  return `${addZero(date.getHours())}:${addZero(date.getMinutes())} | ${addZero(
    date.getDate()
  )}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`;
};

export default parseDate;
