import parsePhoneNumber from 'libphonenumber-js';
import { allCountryPhoneCodes } from './helperObjects';

let code;

export const mergePhoneNumber = (phone) => {
  if (phone?.code && phone?.number) {
    return `${phone.code} ${phone.number?.replace(/ /g, '')}`;
  }
};

export const phoneFormatter = (phoneCode, phoneNum) => {
  try {
    if (phoneCode && phoneNum) {
      code = allCountryPhoneCodes[phoneCode];
      const phoneNumber = parsePhoneNumber(`${code} ${phoneNum}`);
      return phoneNumber.formatInternational();
    } else return '';
  } catch (error) {
    console.log(error);
    return '';
  }
};

export const phoneFormatterSplit = (phone) => {
  try {
    if (phone && phone.split(' ').length > 1) {
      const [phoneCode, phoneNum] = phone.split(' ');
      code = allCountryPhoneCodes[phoneCode];
      const phoneNumber = parsePhoneNumber(`${code} ${phoneNum}`);
      return phoneNumber.formatInternational();
    } else return '';
  } catch (error) {
    console.log(error);
    return '';
  }
};
