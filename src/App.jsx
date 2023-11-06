import { useState } from 'react';
import './App.css';
import FormPhoneSelect from './FormPhoneSelect';
import {
  mergePhoneNumber,
  phoneFormatter,
  phoneFormatterSplit,
} from './FormPhoneSelect/helperFunctions';

function App() {
  const [phone, setPhone] = useState({
    code: '',
    number: '',
  });
  return (
    <div className="app">
      <div className="phone-number">
        <FormPhoneSelect
          label="Telephone number"
          placeholder="Enter telephone number"
          inputName={`phone.code`}
          selectName={`phone.number`}
          type="text"
          selectValue={phone.code}
          inputValue={phone.number}
          changeHandler={(e) =>
            setPhone((prev) => ({ ...prev, number: e.target.value }))
          }
          clearInput={() => setPhone((prev) => ({ ...prev, number: '' }))}
          selectChangeHandler={(value) =>
            setPhone((prev) => ({ ...prev, code: value.code }))
          }
          position="top"
        />
      </div>
      <p>
        Formatting for display in UI:{' '}
        {phone.code && phone.number && phoneFormatter(phone.code, phone.number)}
      </p>
      <p>
        How it is sent to and received from database:{' '}
        {phone.code && phone.number && mergePhoneNumber(phone)}
      </p>
      <p>
        Exapmle if we only want to display a phone number comming from database
        like for example MA 0708080808 we only need to transform code to digits
        and format number accordingly: {phoneFormatterSplit('MA 0708080808')}
      </p>
    </div>
  );
}

export default App;
