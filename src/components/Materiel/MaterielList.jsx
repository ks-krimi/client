import Card from "./Card";

function MaterielList({ materiels, isLibre = true }) {
  const libre = materiels.filter((materiel) => materiel.user === null);
  const occuper = materiels.filter((materiel) => materiel.user !== null);

  const list = isLibre ? libre : occuper;

  return (
    <>
      {list.map((materiel, index) => (
        <Card key={index} materiel={materiel} />
      ))}
    </>
  );
}

export default MaterielList;
