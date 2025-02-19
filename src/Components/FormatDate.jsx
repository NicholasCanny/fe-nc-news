function FormatDate({ date }) {
  const formattedDate = new Date(date).toLocaleString([], {
    dateStyle: "short",
    timeStyle: "short",
  });

  return <span>{formattedDate}</span>;
}

export default FormatDate;
