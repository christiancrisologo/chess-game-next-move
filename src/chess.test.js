import { initChessboard, getMoves } from "chess";

describe("Chess forumula and logics", () => {
    const cb = initChessboard();

    test("Should initiate correct chessboard", () => {
        expect(Object.keys(cb).length === 64).toBeTruthy();
    });
    test("Should handle incorrect  chessboard", () => {
        expect(Object.keys(cb).length === 0).toBeFalsy();
    });
    test("Should handle correct black bishop move", () => {
        const testData = { position: "a2", color: "B", type: "B" };
        const result = getMoves(testData)(cb);
        expect(result).toEqual(["b1", "b3", "c4", "d5", "e6"]);
    });
    test("Should handle correct white  horse move", () => {
        const testData = { position: "h1", color: "W", type: "N" };
        const result = getMoves(testData)(cb);
        expect(result).toEqual(["g3"]);
    });
    test("Should handle correct black  rook move", () => {
        const testData = { position: "a5", color: "B", type: "R" };
        const result = getMoves(testData)(cb);
        expect(result).toEqual([
            "b5",
            "c5",
            "d5",
            "e5",
            "f5",
            "g5",
            "h5",
            "a4",
            "a3",
            "a2",
            "a6",
        ]);
    });
    test("Should handle continue multiple chess piece", () => {
        const newCB = initChessboard();
        const blackRook = { position: "a6", color: "B", type: "R" };
        const blackHorse = { position: "c6", color: "B", type: "N" };
        const blackBishop = { position: "e6", color: "B", type: "B" };
        const whiteRook = { position: "a3", color: "W", type: "R" };
        const whiteHorse = { position: "c3", color: "W", type: "N" };
        const whiteBishop = { position: "h3", color: "W", type: "B" };

        const results = [
            getMoves(blackRook)(newCB),
            getMoves(blackHorse)(newCB),
            getMoves(blackBishop)(newCB),
            getMoves(whiteRook)(newCB),
            getMoves(whiteHorse)(newCB),
            getMoves(whiteBishop)(newCB),
        ];

        expect(results).toEqual([
            ["b6", "c6", "d6", "e6", "f6", "g6", "h6", "a5", "a4", "a3", "a2"],
            ["a5", "b4", "d4", "e5"],
            ["f5", "g4", "h3", "d5", "c4", "b3", "a2"],
            ["b3", "c3", "d3", "e3", "f3", "g3", "h3", "a4", "a5", "a6", "a7"],
            ["a4", "b5", "d5", "e4"],
            ["g4", "f5", "e6", "d7"],
        ]);
    });
});
