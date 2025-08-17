

import { login } from "./actions";
import styles from "./page.module.css"
export default function LoginPage() {
  return (
    <div className={styles.Container}>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          className="border-2 border-gray-500 rounded-md p-1"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="border-2 border-gray-500 rounded-md p-1"
          id="password"
          name="password"
          type="password"
          required
        />
        <button
          formAction={login}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Log in
        </button>
      </form>

    </div>
  );
}
