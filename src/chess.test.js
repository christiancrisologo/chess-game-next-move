import { initChessboard, getMoves } from "chess";

describe("Chess forumula and logics", () => {
    const cb = initChessboard();
    test("Should initiate correct chessboard", () => {
        expect(Object.keys(cb).length === 64).toBeTruthy();
    });
    test("Should handle incorrect  chessboard", () => {
        expect(Object.keys(cb).lenght === 0).toBeFalsy();
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
});
