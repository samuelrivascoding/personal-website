import PropTypes from "prop-types";

const ContentApplicationSpace = ({ className = "" }) => {
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [winner, setWinner] = useState(null); // Add state for winner

  // Fetch initial board state
  useEffect(() => {
    const fetchBoard = async () => {
      const response = await fetch("/api/v1/connect4/board");
      const boardData = await response.json();
      setBoard(boardData.board);
      setCurrentPlayer(boardData.currentPlayer);
    };
    fetchBoard();
  }, []);

  // Fetch winner information (optional, update based on your API)
  useEffect(() => {
    const fetchWinner = async () => {
      const response = await fetch("/api/v1/connect4/winner"); // Replace with your winner endpoint
      const winnerData = await response.json();
      setWinner(winnerData);
    };
    fetchWinner(); // Call on initial render (optional)
  }, []);

  const handleCellClick = async (colIndex) => {
    if (winner || board[0][colIndex] !== 0) { // Check for winner or full column
      return;
    }

    const response = await fetch(`/api/v1/connect4/move?col=${colIndex}`, {
      method: "POST", // Specify POST method for making a move
    });

    if (response.ok) {
      const updatedData = await response.json();
      setBoard(updatedData.board || board); // Update board based on response (or recalculate)
      setCurrentPlayer(updatedData.currentPlayer || currentPlayer); // Update current player
    } else {
      console.error("Error making move:", response.statusText);
      // Handle API call errors (optional)
    }
  };



  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-0 px-space-2400 ${className}`}
    > <div className="connect4-board">
    {board.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((cellValue, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cellValue}
            onClick={() => handleCellClick(colIndex)} // Add onClick handler
            className="cell" 
          />
        ))}
      </div>
    ))}
  </div>
    </section>
  );
};

ContentApplicationSpace.propTypes = {
  className: PropTypes.string,
};

export default ContentApplicationSpace;
