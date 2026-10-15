export default function Card({ icon: Icon, tone, title, sub, action, children, className = "" }) {
  return (
    <section className={"card " + className}>
      <header className="card-h">
        <span className={"ico " + tone}><Icon size={18} /></span>
        <div className="card-t"><h3>{title}</h3><small>{sub}</small></div>
        {action}
      </header>
      {children}
    </section>
  );
}
