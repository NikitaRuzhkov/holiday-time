const BookInfoPrice = ({ house }) => {
  return (
    <table className="bookinfoprice">
      <thead>
        <tr>
          <th>Вміщує</th>
          <th>Тип розміщення</th>
          <th>Ціна</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {house.persons} {house.persons === 1 ? 'персона' : 'персони'}
          </td>
          <td>
            <strong>{house.room}</strong>
            <br />
            {house.bad}
          </td>

          <td className="price-cell">
            <button className="price-button">Показати ціни</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { BookInfoPrice };
