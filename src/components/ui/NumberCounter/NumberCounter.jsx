import './NumberCounter.css';

const NumberCounter = ({ label, count, setCount, min = 0, max = 10 }) => {
  return (
    <div className="guest-counter">
      <span>{label}</span>
      <div className="counter-control">
        <button
          className="counter-btn counter-down"
          onClick={() => setCount(prev => Math.max(min, prev - 1))}
        />
        <input className="counter-input" type="number" value={count} readOnly />
        <button
          className="counter-btn counter-up"
          onClick={() => setCount(prev => Math.min(max, prev + 1))}
        />
      </div>
    </div>
  );
};

export { NumberCounter };
