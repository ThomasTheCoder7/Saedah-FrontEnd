export const URL = 'https://saedah.pythonanywhere.com';

export const isEmpty = (str: string|any[]) => {
  return str.length == 0;
};

export const headers: Record<string, string> = {
  "Content-Type": "application/json",
  Accept: "application/json",
};


export const capitalizeString = (input: string): string => {
  // Check if the input string is empty
  if (input.length === 0) {
    return input; // Return the empty string as is
  }

  // Capitalize the first letter and concatenate the rest of the string
  const capitalized = input[0].toUpperCase() + input.slice(1);

  return capitalized;
}


export const generateRandomToken = ()=>{
  const min = 10000; // Minimum 5-digit number
  const max = 99999; // Maximum 5-digit number

  // Generate a random number between min and max
  const randomToken = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomToken;
}


export const extractFileType = (filename: string): string => {
  const match = filename.match(/\.(.+)$/);
  if (match) {
    return match[1];
  }
  return 'Unknown';
};


export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);


  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString(undefined, options);
};
