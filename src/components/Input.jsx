/**
 * Componente Input reutilizável.
 * Recebe todas as props padrão de um input HTML via spread operator (...props)
 */
function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props}
    />
  );
}

export default Input;
