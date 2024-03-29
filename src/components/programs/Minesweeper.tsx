import Text from '@components/Text';
import MenuBar from '@components/desktopEnvironment/window/MenuBar';
import Button from '@components/form/Button';
import { faBomb, faFlag, faQuestion, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@util/css';
import _ from 'lodash';
import { useState } from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

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
    gameOver: boolean;
    handleCellClick: (data: Cell, clickType: ClickType) => void;
};

const TableCell = ({ data, gameOver, handleCellClick }: TableCellProps) => {
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
                {(gameOver && data.state === CellState.Flagged && !data.hasMine) && (
                    <FontAwesomeIcon icon={faXmark} className='absolute w-full h-full text-red-600' />
                )}
            </div>
        </td>
    );
};

const Minesweeper = () => {
    const [gridWidth, setGridWidth] = useState(9);
    const [gridHeight, setGridHeight] = useState(9);
    const [mineCount, setMineCount] = useState(10);

    const getInitialGrid = (newGridWidth?: number, newGridHeight?: number) => {
        const initialGrid: Cell[][] = [];

        for (let y = 0; y < (newGridHeight ?? gridHeight); y++) {
            const newRow = [];
            for (let x = 0; x < (newGridWidth ?? gridWidth); x++) {
                newRow.push({
                    state: CellState.Unclicked,
                    adjacentCount: 0,
                    hasMine: false,
                    x, y
                });
            }
            initialGrid.push(newRow);
        }

        return initialGrid;
    };

    const initialGrid = getInitialGrid(gridWidth, gridHeight);

    const [grid, setGrid] = useState(initialGrid);
    const [minesPlaced, setMinesPlaced] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);
    const [mobileClickType, setMobileClickType] = useState(ClickType.Left);

    const placeMines = (grid: Cell[][], x: number, y: number) => {
        const invalidCoords = [
            { x, y },
            { x: x, y: y - 1 }, // up
            { x: x, y: y + 1 }, // down
            { x: x - 1, y: y }, // left
            { x: x + 1, y: y }, // right
            { x: x - 1, y: y - 1 }, // up-left
            { x: x + 1, y: y - 1 }, // up-right
            { x: x - 1, y: y + 1 }, // down-left
            { x: x + 1, y: y + 1 }, // down-right
        ].filter(c => _.inRange(c.x, gridWidth) && _.inRange(c.y, gridHeight));

        const mineCoords = [];

        for (let i = 0; i < mineCount; i++) {
            const randomX = _.random(0, gridWidth - 1);
            const randomY = _.random(0, gridHeight - 1);

            const newCoords = { x: randomX, y: randomY };

            if (_.some([...invalidCoords, ...mineCoords], newCoords)) {
                i--;
            } else {
                mineCoords.push(newCoords);
            }

        }

        mineCoords.forEach((coord) => {
            grid[coord.y][coord.x].hasMine = true;
        });

        for (let y = 0; y < gridHeight; y++) {
            for (let x = 0; x < gridWidth; x++) {
                const data = grid[y][x];
                if (!data.hasMine) {
                    const adjacent = [
                        grid?.[y - 1]?.[x]?.hasMine ?? false, // up
                        grid?.[y + 1]?.[x]?.hasMine ?? false, // down
                        grid?.[y]?.[x - 1]?.hasMine ?? false, // left
                        grid?.[y]?.[x + 1]?.hasMine ?? false, // right
                        grid?.[y - 1]?.[x - 1]?.hasMine ?? false, // up-left
                        grid?.[y - 1]?.[x + 1]?.hasMine ?? false, // up-right
                        grid?.[y + 1]?.[x - 1]?.hasMine ?? false, // down-left
                        grid?.[y + 1]?.[x + 1]?.hasMine ?? false, // down-right
                    ];

                    data.adjacentCount = adjacent.filter(Boolean).length;
                }
            }
        }
    };

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

    const resetGame = (gridWidth?: number, gridHeight?: number, mineCount?: number) => {
        gridWidth && setGridWidth(gridWidth);
        gridHeight && setGridHeight(gridHeight);
        mineCount && setMineCount(mineCount);

        setGrid(getInitialGrid(gridWidth, gridHeight));
        setMinesPlaced(false);
        setGameOver(false);
        setWin(false);
    };

    const handleCellClick = (data: Cell, clickType: ClickType) => {
        if (!gameOver && !win) {
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
                if (!minesPlaced) {
                    placeMines(newGrid, data.x, data.y);
                    setMinesPlaced(true);
                }

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
        <>
            <BrowserView>
                <MenuBar options={[
                    {
                        name: 'Game',
                        options: [
                            {
                                name: 'Difficulty',
                                options: [
                                    {
                                        name: 'Beginner',
                                        onClick: () => resetGame(9, 9, 10)
                                    },
                                    {
                                        name: 'Intermediate',
                                        onClick: () => resetGame(16, 16, 40)
                                    },
                                    {
                                        name: 'Expert',
                                        onClick: () => resetGame(30, 16, 99)
                                    }
                                ]
                            }
                        ]
                    }
                ]} />
            </BrowserView>
            <div className='flex flex-col items-center space-y-4'>
                <div className='w-full flex items-center justify-between space-x-4'>
                    <div className='flex-1 flex items-center space-x-2'>
                        <FontAwesomeIcon icon={faFlag} />
                        <Text.H3>
                            {mineCount - grid.flat().filter(c => c.state === CellState.Flagged).length}
                        </Text.H3>
                    </div>
                    <Button onClick={() => resetGame()}>
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
                                        gameOver={gameOver}
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
        </>
    );
};

export default Minesweeper;
