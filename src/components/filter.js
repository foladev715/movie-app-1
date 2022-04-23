function Filter(props) {
  return (
    <div className="filter">
      <div className="card filter-card">
        <div className="filter-top">
          <h5 className="card-header">Filter</h5>
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.handleClick}
          >
            Clear
          </button>
        </div>
        <div className="card-body">
          <h6 className="by-rating">By Rating</h6>
          <div className="list-group">
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value="⭐⭐⭐⭐⭐"
                // checked={props.checkStatus}
                checked={props.checkStatus == "⭐⭐⭐⭐⭐"}
                onChange={props.handleChange}
                name="isSelected"
              />
              ⭐⭐⭐⭐⭐
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value="⭐⭐⭐⭐"
                // checked={props.checkStatus}
                checked={props.checkStatus == "⭐⭐⭐⭐"}
                onChange={props.handleChange}
                name="isSelected"
              />
              ⭐⭐⭐⭐
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value="⭐⭐⭐"
                // checked={props.checkStatus}
                checked={props.checkStatus == "⭐⭐⭐"}
                onChange={props.handleChange}
                name="isSelected"
              />
              ⭐⭐⭐
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value="⭐⭐"
                // checked={props.checkStatus}
                checked={props.checkStatus == "⭐⭐"}
                onChange={props.handleChange}
                name="isSelected"
              />
              ⭐⭐
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value="⭐"
                // checked={props.checkStatus}
                checked={props.checkStatus == "⭐"}
                onChange={props.handleChange}
                name="isSelected"
              />
              ⭐
            </label>
          </div>
          <br />
          <h6>By Title</h6>
          <div className="list-group">
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value={["A", "B", "C", "D", "E"]}
                // checked={props.checkStatus}
                checked={props.checkStatus == ["A", "B", "C", "D", "E"]}
                onChange={props.handleChange}
                name="isSelected"
              />
              A - E
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value={["F", "G", "H", "I", "J"]}
                // checked={props.checkStatus}
                checked={props.checkStatus == ["F", "G", "H", "I", "J"]}
                onChange={props.handleChange}
                name="isSelected"
              />
              F - J
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value={["K", "L", "M", "N", "O"]}
                // checked={props.checkStatus}
                checked={props.checkStatus == ["K", "L", "M", "N", "O"]}
                onChange={props.handleChange}
                name="isSelected"
              />
              K - O
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value={["P", "Q", "R", "S", "T"]}
                // checked={props.checkStatus}
                checked={props.checkStatus == ["P", "Q", "R", "S", "T"]}
                onChange={props.handleChange}
                name="isSelected"
              />
              P - T
            </label>
            <label className="list-group-item">
              <input
                className="form-check-input me-1"
                type="radio"
                value={["U", "V", "W", "X", "Y", "Z"]}
                // checked={props.checkStatus}
                checked={props.checkStatus == ["U", "V", "W", "X", "Y", "Z"]}
                onChange={props.handleChange}
                name="isSelected"
              />
              U - Z
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
