import PersonList from "../components/persons/PersonList";

function PopularPersonsPage() {
  return (
    <div className="container">
      <PersonList category="person" endpoint="popular" title="Popular People" />
    </div>
  );
}

export default PopularPersonsPage;
