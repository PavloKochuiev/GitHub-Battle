

const PlayerPreview = ({ avatar, username }) => (
    <div>
        <div className="column">
            <img className="avatar" src={avatar} alt="avatar" />
            <h2 className="username"> @{username}</h2>
            <button className="reset" onClick={() => this.handleReset("playerOne")}>
                Reset
            </button>
        </div>
    </div>
);

export default PlayerPreview;