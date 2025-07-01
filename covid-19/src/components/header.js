import "./header.css"
function Header({ selectedDate, onChangeDate }) {
  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  return (
    <div className="header">
      <h2>COVID - 19 India - Daily Report</h2>
      <input
        type="date"
        value={formatDate(selectedDate)}
        onChange={(e) => onChangeDate(new Date(e.target.value))}
        className="date-box"
      />
    </div>
  );
}


export default Header;
