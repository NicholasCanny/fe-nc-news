import { useNavigate } from "react-router-dom";

function TopicSelector({ topics, currentTopic }) {
  const navigate = useNavigate();

  return (
    <form>
      <label htmlFor="topic">Select a topic</label>
      <select
        name="topic"
        id="topic"
        value={currentTopic || "default"}
        onChange={(e) => navigate(`/topics/${e.target.value}`)}
        aria-label="Select Topic"
      >
        <option value="default" disabled>
          Select Topic
        </option>
        {topics.length === 0 ? (
          <option disabled>{"Loading topics..."}</option>
        ) : (
          topics.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.slug}
            </option>
          ))
        )}
      </select>
    </form>
  );
}

export default TopicSelector;
