
/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

const row: RowElement = {
  firstName:'Guillaume',
  lastName: 'Salva',
};

const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
const lastRow: RowID = CRUD.updateRow(newRowId, updatedRow);

CRUD.deleteRow(lastRow);
