/**
 * Componente Button reutilizável.
 * Usa {props.children} para renderizar o que for passado dentro do botão (ícones, texto, etc).
 */
function Button(props) {
  return (
    <button {...props} className="bg-slate-400 p-2 rounded-md text-white">
      {props.children}
    </button>
  );
}
export default Button;
