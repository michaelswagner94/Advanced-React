import { useState } from 'react/cjs/react.production.min';

export default function CreateProduct() {
  const [name, setName] = useState('Michael');
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}
