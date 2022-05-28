export const formatDateByTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); 
  const month = date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  
  return `${day}/${month}/${year} - ${hours}:${minutes}`;

};