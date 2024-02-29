import Date from "react-datepicker ";
function DateSelector() {
  return (
    <Date dateFormat="dd/MM/yyyy" placeholder="Check-In" closeOnScroll={true} />
  );
}

export default DateSelector;
