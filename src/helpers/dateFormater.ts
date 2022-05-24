export const formatDateByTimestamp = (timestamp: string | number) => {
  if(typeof timestamp === 'string') timestamp = Number(timestamp);

  timestamp = timestamp * 1000; //convert from Unix to Javascript time

  const date = new Date(timestamp);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); 
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  
  return `${day}/${month}/${year} - ${hours}:${minutes}`;

};