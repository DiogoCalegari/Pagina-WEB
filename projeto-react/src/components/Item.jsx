// Recebe a cor de fundo via props
export default function Item({ texto, corFundo }) {
  return (
    <li className="item" style={{ backgroundColor: corFundo }}>
      {texto}
    </li>
  );
}
