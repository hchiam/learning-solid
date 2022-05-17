import type { Component } from "solid-js";
import { createSignal, createEffect, createMemo, Show } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  const slowDep = createMemo(function someSlowFunction() {
    return count() * 9001;
  });

  const isOver9000 = () => slowDep() > 9;

  // setTimeout(() => {
  //   alert("This uses a top-level setTimeout that works as you expect!");
  // }, 3000);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  createEffect(() => {
    console.log("The count is now", count());
  }); // no dependency array needed!

  return (
    <div class={styles.App}>
      <p>
        Count: {count()}{" "}
        <button onclick={() => setCount(count() + 1)}>Update count</button>
      </p>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Slow dep updated with <code>createMemo</code>: {slowDep()}
        </p>
        <Show when={isOver9000()} fallback={<p>Fallback text.</p>}>
          <p>It's over 9000!</p>
        </Show>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
