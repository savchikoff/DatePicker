export const regex = /^\d{2}\.\d{2}\.\d{4}$/;


/* This regular expression corresponds to the string representing the date in the format "dd.mm.yyy".

 ^ - Line start character

 \d{2} - Corresponds to two consecutive digits. In this context, it is used to represent
  the day/month in the "dd"/"mm" format.
  
  \. - Corresponds to the dot.

  \d{4} - Corresponds to four consecutive digits that represents the year in the format of "yyyy".

  $ - Line end character

  */
