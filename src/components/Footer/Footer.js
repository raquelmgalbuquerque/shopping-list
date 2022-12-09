import "./Footer.scss";

const Footer = ({ budget, total, balance }) => {
  const getBalance = (balance) => {
    return balance < 0
      ? `${balance.toFixed(2)}€ 😱`
      : `${balance.toFixed(2)}€ 🤑`;
  };
  return (
    <div className="footer-container">
      <p className="footer-info">
        Orçamento: <span className="footer-value">{budget.toFixed(2)}€</span>
      </p>
      <p className="footer-info">
        Total: <span className="footer-value">{total.toFixed(2)}€</span>
      </p>
      <p className="footer-info">
        Saldo: <span className="footer-value">{getBalance(balance)}</span>
      </p>
    </div>
  );
};

export default Footer;
