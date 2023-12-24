export default function NotesList({ data, onRemove }) {
  return (
    <div className="list">
      {data.map((note) => (
        <div className="card">
          <div className="remove" onClick={() => onRemove(note.id)}></div>
          <p className="content">
            {note.content}
          </p>
        </div>
      ))}
    </div>
  )
}