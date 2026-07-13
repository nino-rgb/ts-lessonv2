interface Todo {
  id: number;
  title: string;
  status: "todo" | "doing" | "done";
  description?: string;
}

const todos: Todo[] = [
  { id: 1, title: "test1", status: "todo" },
  { id: 2, title: "test2", status: "doing" },
  { id: 3, title: "test3", status: "done" },
];

const targetTodo = todos.find((u) => u.id === 1);
console.log(targetTodo);

const remainingTodos = todos.filter((u) => u.status !== "done");
console.log(remainingTodos);

const todoTitles = todos.map((u) => u.title);
console.log(todoTitles);

const responseData: any = {
  user: {
    name: "山田",
  },
};

const email = responseData?.user?.contact?.email ?? "メールアドレス未登録";
console.log(email);

// 2秒後にTodo一覧を返す関数
function fetchTodos(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["買い物", "掃除"]), 2000);
  });
}

// 2秒後にユーザー情報を返す関数
function fetchUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("山田太郎"), 2000);
  });
}

async function displayDashboard() {
  try {
    const [todos, user] = await Promise.all([fetchTodos(), fetchUser()]);
    console.log(`${user}のtodo ${todos.join(", ")}`);
  } catch (error) {
    console.error(error);
  }
}
displayDashboard();
