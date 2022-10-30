export const ItemInform = ({ name, createdAt, description }) => {
  return (
    <div>
      <div>
        <span>
          name: {name} createdAt: {createdAt}
          description: {description}
        </span>
      </div>
    </div>
  );
};
