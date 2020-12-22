/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const Todo = require("./todo");
const TodoList = require("./todolist");

describe("TodoList", () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo("Buy milk");
    todo2 = new Todo("Clean room");
    todo3 = new Todo("Go to the gym");

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });
  test("toArray returns an array", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });
  test("returns first item in the todo list", () => {
    expect(list.first()).toEqual(todo1);
  });
  test("returns last item in the todo list", () => {
    expect(list.last()).toEqual(todo3);
  });
  test("shift removes and returns the first item in the list", () => {
    let todo = list.shift();
    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });
  test("pop removes and returns the last item in the list", () => {
    let todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });
  test("returns false if not all todos are marked done", () => {
    expect(list.isDone()).toBe(false);
  });
  test("TypeError occurs when trying to add an item that is not a ToDo object", () => {
    expect(list.add("hello")).toThrow(TypeError);
  });
  test("itemAt returns the item at given index", () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });
  test("marks an item done at a given index", () => {
    expect(() => list.markDoneAt(6)).toThrow(ReferenceError);

    list.markDoneAt(1);
    expect(todo2.done).toBe(true);
    expect(todo1.done).toBe(false);
  });
  test("marks an item undone at a given index", () => {
    expect(() => list.markUndoneAt(6)).toThrow(ReferenceError);
    todo2.markDone();

    list.markUndoneAt(1);
    expect(todo2.done).toBe(false);
    expect(todo1.done).toBe(false);
  });
  test("marks all todos as done", () => {
    list.markAllDone();

    expect(todo1.done).toEqual(true);
    expect(todo2.done).toEqual(true);

    expect(todo3.done).toEqual(true);
    expect(list.isDone()).toEqual(true);
  });
  test("removes an item from the list a given index", () => {
    expect(() => list.removeAt(6)).toThrow(ReferenceError);

    list.removeAt(1);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });
  test("toString returns string representation of the list", () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });
  test("toString returns string representation of the list", () => {
    list.markDoneAt(0);
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });
  test("toString returns string representation of the list", () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });
  test("forEach iterates over all elements in the list", () => {
    let result = [];
    list.forEach((item) => {
      result.push(item);
    });

    expect(result).toEqual([todo1, todo2, todo3]);
  });
  test("filter should return a new list based on callback", () => {
    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);

    expect(newList.title).toBe(list.title);

    let doneItems = list.filter((todo) => todo.isDone());
    expect(doneItems.toString()).toBe(newList.toString());
  });
});
