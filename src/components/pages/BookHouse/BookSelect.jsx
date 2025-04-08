import Select from 'react-select';

const BookSelect = ({ setSelectedLocation }) => {
  const selectHouse = [
    { label: 'Бакота', value: 'Бакота' },
    { label: 'Карпати', value: 'Карпати' },
    { label: 'Київ', value: 'Київ' },
    { label: 'Одеська область', value: 'Одеська область' },
  ];

  const customSelectStyles = {
    control: base => ({
      ...base,
      width: '100%',
      height: '73px',
      fontSize: '28px',
      backgroundColor: '#E8E8E8',
      border: 'none',
      outline: 'none',
      textAlign: 'center',
      paddingRight: '40px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: () => ({
      display: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '10px 20px',
      fontSize: '28px',
      color: '#000',
      fontStyle: 'italic',
      background: state.isSelected ? '#E8E8E8' : 'transparent',
      textDecoration: 'none',
      position: 'relative',
    }),
    menuList: provided => ({
      ...provided,
      padding: 0,
    }),
  };

  const optionUnderlineStyle = {
    position: 'absolute',
    bottom: '-15px',
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(to right, transparent, #000, transparent)',
  };
  return (
    <>
      <Select
        className="bookhouse-select"
        options={selectHouse}
        isSearchable={false}
        placeholder="Оберіть місцерозташування"
        styles={customSelectStyles}
        onChange={option => setSelectedLocation(option.value)}
        getOptionLabel={e => (
          <div style={{ position: 'relative' }}>
            {e.label}
            <div style={optionUnderlineStyle} />{' '}
            {/* Подчеркивание с градиентом */}
          </div>
        )}
      />
    </>
  );
};

export { BookSelect };
