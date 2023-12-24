export default function Form({ onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h3>New note</h3>
      <textarea required />

      <button type="submit">Send</button>
    </form>
  )
}