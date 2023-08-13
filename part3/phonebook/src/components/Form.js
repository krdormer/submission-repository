const Form = ({ onSubmit, onChange, newContact }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input name="name" onChange={onChange} value={newContact.name} />
      </div>
      <div>
        number:{" "}
        <input name="number" onChange={onChange} value={newContact.number} />
      </div>
      <div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

export default Form;
