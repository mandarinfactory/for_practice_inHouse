function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });

  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
