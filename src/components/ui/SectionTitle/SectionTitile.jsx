import './SectionTitle.css';

const SectionTitile = ({ children }) => {
  return (
    <div className="section-title">
      <div className="title-inner">{children}</div>
    </div>
  );
};

export { SectionTitile };
