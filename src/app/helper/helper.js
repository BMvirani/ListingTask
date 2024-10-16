// convert cm to meter 
export const convertCmToMeters = (cm) => {
  if (cm) {
    return cm / 100;
  } else {
    return "-";
  }
};

//Convert data in to DD-MM-YY formate   
export const convertToCustomDateFormat = (datestr) => {
    if(datestr){
        const date = new Date(datestr);
  
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }else {
        return '-';
    }
    
  };