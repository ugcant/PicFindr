import { useState } from 'react';
import '../styles/SearchForm.scss';

// eslint-disable-next-line react/prop-types
function SearchForm({ search }) {
  const [valueInput, setValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value.toLowerCase());
  }

  const handleClear = () => {
    setValue('')
  }

  return (
    <div>
      <form className='searchHeader' onSubmit={handleFormSubmit}>
        <div className='searchHeader__container'>
          <button className='searchHeader__btn'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
          <input placeholder='Görsel Arama' className='searchHeader__input' value={valueInput} onChange={handleChange}/>
          {valueInput != '' && <button className="searchHeader__xmark" onClick={handleClear}><i className="fa-solid fa-xmark"></i></button>}
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
