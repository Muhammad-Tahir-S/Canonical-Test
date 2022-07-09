export const formatDate = (date: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const newDate = new Date(date);

  const dateObject = {
    year: newDate.getFullYear(),
    month: months[newDate.getMonth()],
    day: newDate.getDate(),
  };

  return dateObject;
};
