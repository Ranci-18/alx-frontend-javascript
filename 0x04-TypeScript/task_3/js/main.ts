/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { age: 23, ...row};

// TESTS
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

const obj = {firstName: "Guillaume", lastName: "Salva"};
console.log(CRUD.insertRow(obj));
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updateRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
console.log(CRUD.updateRow(newRowID, updateRow));
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

console.log(CRUD.deleteRow(125));
// Delete row id 125