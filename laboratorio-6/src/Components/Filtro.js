export default function Filter({ setFilter }) {
  return (
    <div className="filter">
      <label>Filtrar por Categoría</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">Listar Todo</option>
        <option value="Proxima">Próxima</option>
        <option value="Cercana">Cercana</option>
        <option value="Lejana">Lejana</option>
      </select>
    </div>
  );
}
