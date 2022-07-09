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
  const slicedDate = newDate.getDate().toString().slice(1);
  let dateSuffix = "";

  if (slicedDate === "1") {
    dateSuffix += "st";
  } else if (slicedDate === "2") {
    dateSuffix += "nd";
  } else if (slicedDate === "3") {
    dateSuffix += "rd";
  } else {
    dateSuffix += "th";
  }

  const dateObject = {
    year: newDate.getFullYear(),
    month: months[newDate.getMonth()],
    day: `${newDate.getDate()}`,
    dateSuffix: dateSuffix,
  };

  return dateObject;
};
