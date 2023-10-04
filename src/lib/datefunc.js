// Create a new Date object using the timestamp

export const date_convert = (date_input) => {
    date_input = 1000 * date_input

    const date = new Date(date_input);
    
    // Get the month name
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];
    
    // Get the date number
    const dateNumber = date.getDate();
    
    // Get the year
    const year = date.getFullYear();
    
    // Output the formatted date
    const formattedDate = `${month} ${dateNumber}, ${year}`;
    return formattedDate
}