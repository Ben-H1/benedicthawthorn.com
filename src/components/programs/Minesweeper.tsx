import Text from '@components/Text';
import Button from '@components/form/Button';
import { faBomb, faFlag, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@util/css';
import _ from 'lodash';
import { useState } from 'react';
import { MobileView, isMobile } from 'react-device-detect';

enum CellState {
    Clicked = 'clicked',
    Flagged = 'flagged',
    Unknown = 'unknown',
    Unclicked = 'unclicked'
}

enum ClickType {
    Left = 'left',
    Right = 'right'
}

type Cell = {
    state: CellState;
    adjacentCount: number;
    hasMine: boolean;
    x: number;
    y: number;
};

type TableCellProps = {
    data: Cell;
    handleCellClick: (data: Cell, clickType: ClickType) => void;
};

const TableCell = ({ data, handleCellClick }: TableCellProps) => {
    return (
        <td
            onClick={() => handleCellClick(data, ClickType.Left)}
            onContextMenu={(e) => {
                e.preventDefault();
                handleCellClick(data, ClickType.Right);
            }}
            className={cn(
                `border border-black w-5 h-5 ${isMobile ? 'active' : 'hover'}:bg-gray-300 p-0`,
                data.state === CellState.Clicked && `bg-gray-400 ${isMobile ? 'active' : 'hover'}:bg-gray-500`
            )}
        >
            <div className='w-full h-full flex items-center justify-center relative'>
                {data.state === CellState.Flagged && (
                    <FontAwesomeIcon icon={faFlag} size='sm' />
                )}
                {data.state === CellState.Unknown && (
                    <FontAwesomeIcon icon={faQuestion} size='sm' />
                )}
                {(data.state === CellState.Clicked && data.adjacentCount > 0) && (
                    <Text.System className='select-none absolute'>{data.adjacentCount}</Text.System>
                )}
                {(data.state === CellState.Clicked && data.hasMine) && (
                    <FontAwesomeIcon icon={faBomb} size='sm' />
                )}
            </div>
        </td>
    );
};

const gridWidth = 10;
const gridHeight = 10;
const mineCount = 10;

const Minesweeper = () => {
    const getInitialGrid = () => {
        const initialGrid: Cell[][] = [];

        for (let y = 0; y < gridHeight; y++) {
            const newRow = [];
            for (let x = 0; x < gridWidth; x++) {
                newRow.push({
                    state: CellState.Unclicked,
                    adjacentCount: 0,
                    hasMine: false,
                    x, y
                });
            }
            initialGrid.push(newRow);
        }

        const mineCoords = [];

        for (let i = 0; i < mineCount; i++) {
            const randomX = _.random(0, gridWidth - 1);
            const randomY = _.random(0, gridHeight - 1);

            const newCoords = { x: randomX, y: randomY };

            if (_.some(mineCoords, newCoords)) {
                i--;
            } else {
                mineCoords.push(newCoords);
            }

        }

        mineCoords.forEach((coord) => {
            initialGrid[coord.y][coord.x].hasMine = true;
        });

        for (let y = 0; y < gridHeight; y++) {
            for (let x = 0; x < gridWidth; x++) {
                const data = initialGrid[y][x];
                if (!data.hasMine) {
                    const adjacent = [
                        initialGrid?.[y - 1]?.[x]?.hasMine ?? false, // up
                        initialGrid?.[y + 1]?.[x]?.hasMine ?? false, // down
                        initialGrid?.[y]?.[x - 1]?.hasMine ?? false, // left
                        initialGrid?.[y]?.[x + 1]?.hasMine ?? false, // right
                        initialGrid?.[y - 1]?.[x - 1]?.hasMine ?? false, // up-left
                        initialGrid?.[y - 1]?.[x + 1]?.hasMine ?? false, // up-right
                        initialGrid?.[y + 1]?.[x - 1]?.hasMine ?? false, // down-left
                        initialGrid?.[y + 1]?.[x + 1]?.hasMine ?? false, // down-right
                    ];

                    data.adjacentCount = adjacent.filter(Boolean).length;
                }
            }
        }

        return initialGrid;
    };

    const initialGrid = getInitialGrid();

    const [grid, setGrid] = useState(initialGrid);
    const [moveCount, setMoveCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);
    const [mobileClickType, setMobileClickType] = useState(ClickType.Left);

    const fillGrid = (grid: Cell[][], x: number, y: number) => {
        const currentCell = grid?.[y]?.[x] ?? undefined;

        if (currentCell) {
            if (currentCell.state === CellState.Unclicked) {
                grid[y][x].state = CellState.Clicked;

                if (currentCell.adjacentCount === 0) {
                    fillGrid(grid, x, y - 1); // up
                    fillGrid(grid, x, y + 1); // down
                    fillGrid(grid, x - 1, y); // left
                    fillGrid(grid, x + 1, y); // right
                    fillGrid(grid, x - 1, y - 1); // up-left
                    fillGrid(grid, x + 1, y - 1); // up-right
                    fillGrid(grid, x - 1, y + 1); // down-left
                    fillGrid(grid, x + 1, y + 1); // down-right
                }
            }

        }
    };

    const resetGame = () => {
        setGrid(getInitialGrid());
        setMoveCount(0);
        setGameOver(false);
        setWin(false);
    };

    const handleCellClick = (data: Cell, clickType: ClickType) => {
        if (!gameOver && !win) {
            if (moveCount === 0) {
                if (data.hasMine || data.adjacentCount > 0) {
                    console.log('MOVE');
                }
            }

            setMoveCount(p => p + 1);

            const newData = JSON.parse(JSON.stringify(data));
            const newGrid: Cell[][] = JSON.parse(JSON.stringify(grid));

            const leftClick = () => {
                if (data.state === CellState.Unclicked) {
                    if (data.hasMine) {
                        newData.state = CellState.Clicked;
                        newGrid[data.y][data.x] = newData;
                        
                        for (let y = 0; y < newGrid.length; y++) {
                            for (let x = 0; x < newGrid[0].length; x++) {
                                const cellNewData = JSON.parse(JSON.stringify(newGrid[y][x]));
                                if (
                                    cellNewData.hasMine &&
                                    (cellNewData.state === CellState.Unclicked || cellNewData.state === CellState.Unknown)
                                ) {
                                    cellNewData.state = CellState.Clicked;
                                }
                                newGrid[y][x] = cellNewData;
                            }
                        }

                        setGameOver(true);
                    } else if (data.adjacentCount > 0) {
                        newData.state = CellState.Clicked;
                        newGrid[data.y][data.x] = newData;
                    } else {
                        fillGrid(newGrid, data.x, data.y);
                    }
                }
            };

            const rightClick = () => {
                if (data.state === CellState.Unclicked) {
                    newData.state = CellState.Flagged;
                    newGrid[data.y][data.x] = newData;
                } else if (data.state === CellState.Flagged) {
                    newData.state = CellState.Unknown;
                    newGrid[data.y][data.x] = newData;
                } else if (data.state === CellState.Unknown) {
                    newData.state = CellState.Unclicked;
                    newGrid[data.y][data.x] = newData;
                }
            };
    
            if (isMobile ? mobileClickType === ClickType.Left : clickType === ClickType.Left) {
                leftClick();
            } else {
                rightClick();
            }
            
            if (newGrid.flat().every(c => c.hasMine ? c.state !== CellState.Clicked : c.state === CellState.Clicked)) {
                for (let y = 0; y < newGrid.length; y++) {
                    for (let x = 0; x < newGrid[0].length; x++) {
                        const cellNewData = JSON.parse(JSON.stringify(newGrid[y][x]));
                        if (cellNewData.state === CellState.Unclicked) {
                            cellNewData.state = CellState.Flagged;
                        }
                        newGrid[y][x] = cellNewData;
                    }
                }

                setWin(true);
            }

            setGrid(newGrid);
        }
    };

    return (
        <div className='flex flex-col items-center space-y-4'>
            <div className='w-full flex items-center justify-between space-x-4'>
                <div className='flex-1 flex items-center space-x-2'>
                    <FontAwesomeIcon icon={faFlag} />
                    <Text.H3>
                        {mineCount - grid.flat().filter(c => c.state === CellState.Flagged).length}
                    </Text.H3>
                </div>
                <Button onClick={resetGame}>
                    Reset
                </Button>
                <Text.H3 className='flex-1 text-right'>
                    {win && 'Win'}
                    {gameOver && 'Game over'}
                </Text.H3>
            </div>
            <table>
                <tbody>
                    {grid.map((row, y) => (
                        <tr key={`grid-row-${y}`}>
                            {row.map((cell, x) => (
                                <TableCell
                                    key={`grid-row-${y}-cell-${x}`}
                                    data={cell}
                                    handleCellClick={handleCellClick}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <MobileView>
                <div className='flex items-center justify-center space-x-4'>
                    <Button
                        onClick={() => setMobileClickType(ClickType.Left)}
                        className={cn(
                            'w-12 h-12',
                            mobileClickType === ClickType.Left && 'bg-gray-300'
                        )}
                    >
                        <FontAwesomeIcon icon={faBomb} size='2xl' />
                    </Button>
                    <Button
                        onClick={() => setMobileClickType(ClickType.Right)}
                        className={cn(
                            'w-12 h-12',
                            mobileClickType === ClickType.Right && 'bg-gray-300'
                        )}
                    >
                        <FontAwesomeIcon icon={faFlag} size='2xl' />
                    </Button>
                </div>
            </MobileView>
        </div>
    );
};

export default Minesweeper;
