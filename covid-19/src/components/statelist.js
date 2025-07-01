
import "./stateList.css"; 

function StateList({ states, selectedStates, onToggle, onToggleAll }) {
  return (
    <div className="sidebar">
      <h3>States</h3>
      
      <label>
        <input
          type="checkbox"
          checked={selectedStates.length === states.length}
          onChange={onToggleAll}
        />
        Select All
      </label>

      <div className="state-list">
        {states.map((stateCode) => (
          <label key={stateCode}>
            <input
              type="checkbox"
              checked={selectedStates.includes(stateCode)}
              onChange={() => onToggle(stateCode)}
            />
            {stateCode}
          </label>
        ))}
      </div>
    </div>
  );
}

export default StateList;
