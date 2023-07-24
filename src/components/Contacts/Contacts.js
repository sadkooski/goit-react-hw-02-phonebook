export const Contacts = ({ name, number }) => {
  return (
    <div>
      <ul>
        <li>
          <span>
            {name}: {number}
          </span>
        </li>
      </ul>
    </div>
  );
};
